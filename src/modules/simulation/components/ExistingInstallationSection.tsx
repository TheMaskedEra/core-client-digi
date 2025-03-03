import { InputCard } from '@simulation/components/InputCard'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onValid: () => void;
    onBack: () => void;
}

export default function ExistingInstallationSection({ onValid, onBack }: Props) {
    return(
        <div>
            <h2>Avez-vous déjà une installation photovoltaïque existante ?</h2>

            <InputCard id={'hasInstallation'} label={'Oui'} value={'hasInstallation'} name={'existingInstallation'} onClick={ onValid }/>
            <InputCard id={'hasNoInstallation'} label={'Non'} value={'hasNoInstallation'} name={'existingInstallation'} onClick={ onValid }/>

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    );
}