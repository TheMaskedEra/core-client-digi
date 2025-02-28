import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@digico/ui";

import { createSimulation } from "@simulation/services";
import { SimulationType } from "@simulation/types/simulation";

import { EnterpriseTypeSection } from '@simulation/components/EnterpriseTypeSection'
import { InstallationTypeSection } from '@simulation/components/InstallationTypeSection'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InterestSection } from '@simulation/components/InterestSection'

export default function SimulationForm() {
    const form = useForm<SimulationType>();
    const [isNextVisible, setNextVisible] = useState(true);

    const handleNext = () => {
        setCurrentIndex(prevStep => Math.min(prevStep + 1, steps.length - 1));
    };

    const handleBack = () => {
        setCurrentIndex(prevStep => Math.max(prevStep - 1, 0));
    };

    const handleSubmit = (data: SimulationType) => {
        console.log(data);
        createSimulation(data).then(() => console.log("sent"));
    };

    const steps = [
        <InstallationTypeSection onValid={handleNext} setNextVisible={setNextVisible}/>,
        <EnterpriseTypeSection onValid={handleNext} setNextVisible={setNextVisible}/>,
        <InterestSection setNextVisible={setNextVisible}/>
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const size = steps.length;

    return (
        <Form useForm={form} onSubmit={handleSubmit}>
            { steps[currentIndex] }

            <StepNavigation step={currentIndex} totalSteps={size} onNext={handleNext} onBack={handleBack} isNextVisible={isNextVisible}/>
        </Form>
    )
}
