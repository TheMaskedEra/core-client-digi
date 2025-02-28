import { NodeMap } from '@simulation/DAGmap/NodeMap'

import { EnterpriseTypeSection } from '@simulation/components/EnterpriseTypeSection'
import { InstallationTypeSection } from '@simulation/components/InstallationTypeSection'
import { InterestSection } from '@simulation/components/InterestSection'

const simulationMap: NodeMap = {
    nodes: {
        installation: { id: "installation", component: InstallationTypeSection },
        enterpriseType: { id: "enterpriseType", component: EnterpriseTypeSection },
        interest: { id: "interest", component: InterestSection }
    },
    paths: {
        installation: [
            {
                next: "enterpriseType",
                condition: (data) => data.installationType === "enterprise"
            },
            {
                next: "interest",
            }
        ],
        enterpriseType: [
            {
                next: "interest",
            },
        ],
        interest: [
            {
                next: ''
            },
        ],
    }
}