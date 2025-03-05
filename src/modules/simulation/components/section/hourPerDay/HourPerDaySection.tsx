import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onSkip: () => void;
    onBack: () =>  void;
}

export default function HourPerDaySection({ onSkip, onBack }: Props) {
    return (
        <div>
            <input type={'range'} min={2} max={10} step={1}/>

            <StepNavigation showSkip={true} onSkip={onSkip} showBack={true} onBack={onBack} showSubmit={false} />
        </div>
    );
}