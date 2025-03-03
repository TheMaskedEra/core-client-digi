import { useEffect } from 'react'
import { Grid } from '@digico/ui'
import { enterprises } from '@simulation/enterprise'

import { InputCard } from '@simulation/components/InputCard'

type Props = {
    onValid: () => void,
    setNextVisible: (value: boolean) => void
}

export const EnterpriseTypeSection = ({ onValid, setNextVisible }: Props) => {

    useEffect(() => {
        setNextVisible(false);
    }, [setNextVisible]);
    
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
                            onClick={onValid}
                        />
                    ))}
                </Grid.Col>
            </Grid>
        </div>
    )
}