import { NodeMap } from '@simulation/DAGmap/NodeMap'

import { ConsumptionSection } from '@simulation/components/section/consumption/ConsumptionSection'
import { EnterpriseTypeSection } from '@simulation/components/section/enterprise/EnterpriseTypeSection'
import ExistingInstallationSection from '@simulation/components/section/existingInstallation/ExistingInstallationSection'
import { InstallationTypeSection } from '@simulation/components/section/installation/InstallationTypeSection'
import { InterestSection } from '@simulation/components/section/interest/InterestSection'
import InstallationInformationSection
    from '@simulation/components/section/installationInformation/InstallationInformationSection'

export const simulationMap: NodeMap = {
    nodes: {
        installation: { component: InstallationTypeSection },
        enterpriseType: { component: EnterpriseTypeSection },
        interest: { component: InterestSection },
        consumption: { component: ConsumptionSection },
        existingInstallation: { component: ExistingInstallationSection },
        installationInformation: { component: InstallationInformationSection },
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
    }
}