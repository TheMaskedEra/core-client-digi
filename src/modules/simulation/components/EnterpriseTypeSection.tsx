import { Grid } from '@digico/ui'
import { enterprises } from '@simulation/enterprise'

import { InputCard } from '@simulation/components/InputCard'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onBack: () => void;
    onValid: () => void;
}

export const EnterpriseTypeSection = ({ onBack, onValid }: Props) => {
    
    return(
        <div>
            <p> { "Quel type d'entreprise êtes-vous ?" }</p>
            <Grid>
                <Grid.Col column={4}>
                    {enterprises.map((enterprise) => (
                        <InputCard
                            key={enterprise.id}
                            id={enterprise.id}
                            label={enterprise.label}
                            value={enterprise.value}
                            name={'enterpriseType'}
                            onClick={() => {
                                localStorage.setItem("enterpriseType", enterprise.value);
                                onValid();
                            }}
                        />
                    ))}
                </Grid.Col>
            </Grid>

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    )
}