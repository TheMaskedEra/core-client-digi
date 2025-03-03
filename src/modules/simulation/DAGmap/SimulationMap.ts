import { NodeMap } from '@simulation/DAGmap/NodeMap'

import { ConsumptionSection } from '@simulation/components/ConsumptionSection'
import { EnterpriseTypeSection } from '@simulation/components/EnterpriseTypeSection'
import { InstallationTypeSection } from '@simulation/components/InstallationTypeSection'
import { InterestSection } from '@simulation/components/InterestSection'

export const simulationMap: NodeMap = {
    nodes: {
        installation: { component: InstallationTypeSection },
        enterpriseType: { component: EnterpriseTypeSection },
        interest: { component: InterestSection },
        consumption: { component: ConsumptionSection }
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
    }
}