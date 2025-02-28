import { HttpService } from '@simulation/services'
import { SimulationType } from '@simulation/types/simulation'

export const createSimulation = async (data: SimulationType) => {
    console.log("Send")
    await HttpService.post<{
        data: SimulationType
    }>('/', data)
};