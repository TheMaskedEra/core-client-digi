import { Grid } from '@digico/ui'
import { InputCard } from '@simulation/components/InputCard'
import { useEffect } from 'react'

type Props = {
    onValid: () => void,
    setNextVisible: (value: boolean) => void
}

export const EnterpriseTypeSection = ({ onValid, setNextVisible }: Props) => {

    useEffect(() => {
        setNextVisible(false);
    }, [setNextVisible]);
    
    const types = [
        <InputCard id={'magasin'} label={'Magasin'} value={'magasin'} name={'enterpriseType'} onClick={onValid}/>,
        <InputCard id={'garage'} label={'Garage'} value={'garage'} name={'enterpriseType'} onClick={onValid}/>,
        <InputCard id={'santé'} label={'Soin de santé'} value={'santé'} name={'enterpriseType'} onClick={onValid}/>,
        <InputCard id={'horeca'} label={'Horeca'} value={'horeca'} name={'enterpriseType'} onClick={onValid}/>,
        <InputCard id={'production'} label={'Production'} value={'production'} name={'enterpriseType'} onClick={onValid}/>
    ];
    
    return(
        <div>
            <p> { "Quel type d'entreprise êtes-vous ?" }</p>
            <Grid>
                <Grid.Col column={4}>
                    {types}
                </Grid.Col>
            </Grid>
        </div>
    )
}