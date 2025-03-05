import { InputCard } from '@simulation/components/InputCard'
import { orientationTypes } from '@simulation/components/section/houseOrientation/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onBack: () => void;
    onValid: () => void;
}

export default function HouseOrientationSection({ onBack, onValid }: Props) {
    return(
        <div>
            {orientationTypes.map((type) => (
                <InputCard key={type.id} id={type.id} label={type.label} value={type.value} name={'orientationType'} onClick={onValid}/>
            ))}

            <StepNavigation showSkip={true} onSkip={onValid} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    );
}