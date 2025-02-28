import { Button } from "@digico/ui";

interface StepNavigationProps {
    step: number
    totalSteps: number;
    onNext: () => void;
    onBack: () => void;
    isNextVisible: boolean
}

export const StepNavigation = ({ step, totalSteps, onNext, onBack, isNextVisible }: StepNavigationProps) => {

    return (
        <div>
            {step > 0 && <Button type="button" onClick={onBack}>Back</Button>}

            {isNextVisible && step < totalSteps - 1 && (
                <Button type="button" onClick={onNext}>Next</Button>
            )}

            {isNextVisible && step === totalSteps - 1 && (
                <Button type="submit">Submit</Button>
            )}

        </div>
    );
}
