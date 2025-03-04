import { Box } from '@digico/ui'

import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onBack: () => void;
    onSkip: () => void;
}

export default function InstallationInformationSection({ onBack, onSkip }: Props) {
    return(
        <div>
            <h2>Consommation de votre maison</h2>
            <Box>
                <input/>
                <input/>
            </Box>

            <StepNavigation showSkip={true} onSkip={ onSkip } showBack={ true } onBack={ onBack } showSubmit={false}/>
        </div>
    );
}