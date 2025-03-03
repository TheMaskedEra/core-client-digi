import { InputCard } from '@simulation/components/InputCard'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onBack: () => void;
};

export const InterestSection = ({ onBack }: Props) => {

    return (
        <>
            <InputCard
                id={'id'}
                label={'Panneaux photovoltaïques'}
                value={'panneaux'}
                name={'interests'}
                onClick={function (): void {
                    throw new Error('Function not implemented.')
                }}
                type={'checkbox'}
            />

            <StepNavigation showSkip={false} showBack={true} onBack={ onBack } showSubmit={false} />
        </>
    )
};