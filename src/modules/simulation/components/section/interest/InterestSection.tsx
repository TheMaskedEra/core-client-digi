import { interests } from '@simulation/components/section/interest/index'

import { InputCard } from '@simulation/components/InputCard'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onBack: () => void;
    onSkip: () => void;
};

export const InterestSection = ({ onBack, onSkip }: Props) => {

    return (
        <>
            {interests.map((interest) => (
                    <InputCard
                        key={interest.id}
                        id={interest.id}
                        label={interest.label}
                        value={interest.value}
                        name={"interests"}
                        onClick={() => {
                            console.log("Gérer les checkbox"); //TODO
                        }}
                        type={'checkbox'}
                    />
            ))
            }

            <StepNavigation showSkip={true} onSkip={ onSkip} showBack={true} onBack={ onBack } showSubmit={false} />
        </>
    )
};