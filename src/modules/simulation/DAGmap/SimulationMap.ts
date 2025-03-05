import { NodeMap } from '@simulation/DAGmap/NodeMap'

import { ConsumptionSection } from '@simulation/components/section/consumption/ConsumptionSection'
import { EnterpriseTypeSection } from '@simulation/components/section/enterprise/EnterpriseTypeSection'
import ExistingInstallationSection from '@simulation/components/section/existingInstallation/ExistingInstallationSection'
import { InstallationTypeSection } from '@simulation/components/section/installation/InstallationTypeSection'
import { InterestSection } from '@simulation/components/section/interest/InterestSection'
import InstallationInformationSection
    from '@simulation/components/section/installationInformation/InstallationInformationSection'
import HourPerDaySection from '@simulation/components/section/hourPerDay/HourPerDaySection'
import ElectricalNetworkSection from '@simulation/components/section/electricalNetwork/ElectricalNetworkSection'
import HouseOrientationSection from '@simulation/components/section/houseOrientation/HouseOrientationSection'

export const simulationMap: NodeMap = {
    nodes: {
        installation: { component: InstallationTypeSection },
        enterpriseType: { component: EnterpriseTypeSection },
        interest: { component: InterestSection },
        consumption: { component: ConsumptionSection },
        existingInstallation: { component: ExistingInstallationSection },
        installationInformation: { component: InstallationInformationSection },
        hourPerDay: { component: HourPerDaySection },
        networkType: { component: ElectricalNetworkSection },
        houseOrientation : { component: HouseOrientationSection }
    },
    paths: {
        installation: [
            {
                next: "enterpriseType",
                condition: () => localStorage.getItem("installationType") === "enterprise"
            },
            {
                next: "interest",
                condition: () => localStorage.getItem("installationType") === "private"
            }
        ],
        enterpriseType: [
            {
                next: "interest",
            },
        ],
        interest: [
            {
                next: 'consumption'
            },
        ],
        consumption: [
            {
                next: 'existingInstallation'
            },
        ],
        existingInstallation: [
            {
                next: 'installationInformation'
            },
        ],
        installationInformation: [
            {
                next: 'hourPerDay'
            },
        ],
        hourPerDay: [
            {
                next: 'networkType'
            },
        ],
        networkType: [
            {
                next: 'houseOrientation'
            }
        ],
        houseOrientation: [
            {
                next: ''
            }
        ]
    }
}