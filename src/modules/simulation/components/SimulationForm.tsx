import { useState } from "react";
import { Button, Form } from '@digico/ui'
import { useForm } from 'react-hook-form'

export default function SimulationForm() {
    const form = useForm()
    let step = 0;

    const content = <Form.Field name={`name`} id={'name'} label="Nom" placeholder={'Vanden Broeck'}/>
    const content2 = <Form.Field name={`firstname`} id={'firstname'} label="Prénom" placeholder={'Alexis'}/>
    const content3 = <Form.Field name={`age`} type={'number'} id={'age'} label="Âge" placeholder={'23'}/>

    const contentArray = [content, content2, content3]
    const [currentContent, setContent] = useState(contentArray[0]);
    const size = contentArray.length -1;

    const handleNext = () => {
        step = step !== size ? step + 1 : size;
        setContent(() => contentArray[step])
        setButtons(() => {
           if (step === size) return finalNav;
           return midNav;
        });
    }

    const handleBack = () => {
        step = step !== 0 ? step - 1 : 0;
        setContent(() => contentArray[step]);
        setButtons(() => {
            if (step === 0) return firstNav;
            return midNav;
        });
    }

    const firstNav = <Button type={'button'} onClick={handleNext}>Next</Button>;
    const midNav =
        <div>
            <Button type={'button'} onClick={handleBack}>Back</Button>
            <Button type={'button'} onClick={handleNext}>Next</Button>
        </div>;
    const finalNav =
            <Button type={'submit'}>Submit</Button>;
    const [buttons, setButtons] = useState(firstNav);

    return (
      <Form useForm={form}>
          {currentContent}
          {buttons}
      </Form>
    );
}
