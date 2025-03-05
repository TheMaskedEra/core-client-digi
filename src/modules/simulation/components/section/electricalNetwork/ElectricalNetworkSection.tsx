import { StepNavigation } from '@simulation/components/StepNavigation'
import { networkTypes } from '@simulation/components/section/electricalNetwork/index'
import { InputCard } from '@simulation/components/InputCard'

type Props = {
    onValid: () => void;
    onBack: () => void;
}

export default function ElectricalNetworkSection({ onBack, onValid }: Props) {
    return(
        <div>

            {networkTypes.map((type) => (
                <InputCard key={type.id} id={type.id} label={type.label} value={type.value} name={'networkType'} onClick={onValid}/>
            ))}

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    )
}