import { InputCard } from '@simulation/components/InputCard'
import { existingInstallations } from '@simulation/components/section/existingInstallation/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onValid: () => void;
    onBack: () => void;
}

export default function ExistingInstallationSection({ onValid, onBack }: Props) {
    return(
        <div>
            <h2>Avez-vous déjà une installation photovoltaïque existante ?</h2>

            {existingInstallations.map((type) => (
               <InputCard
                   key={type.id}
                   id={type.id}
                   label={type.label}
                   value={type.value}
                   name={'existingInstallation'}
                   onClick={onValid}
               />
            ))}

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    );
}