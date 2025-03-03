import { radio_types } from '@simulation/consumption'

import { InputCard } from '@simulation/components/InputCard'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { Box } from '@digico/ui'

type Props = {
    onBack: ()=> void;
    onSkip: () => void;
}

export const ConsumptionSection = ({ onBack, onSkip }: Props) => {
    return(
        <div>
            <h2>Consommation de votre maison</h2>

            {radio_types.map((type) => (
                <InputCard
                    key={type.id}
                    id={type.id}
                    label={type.label}
                    value={type.value}
                    name={'consumptionType'}
                    onClick={() => {
                        console.log("Gérer les boutons radios type"); //TODO
                    }}
                />
            ))
            }

            <Box>
                <p>Je paye</p>
                <input/>
            </Box>

            <Box>
                <p>Je connais ma consommation</p>
                <input/>
            </Box>

            <StepNavigation showSkip={true} onSkip={ onSkip } showBack={true} onBack={ onBack } showSubmit={false}/>
        </div>
    );
}