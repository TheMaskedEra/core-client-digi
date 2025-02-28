import { RadioCard } from '@simulation/components/RadioCard'
import { useEffect } from 'react'

type Props = {
    onValid: () => void,
    setNextVisible: (visible: boolean) => void
}

export const InstallationTypeSection = ({ onValid, setNextVisible }: Props) => {

    useEffect(() => {
        setNextVisible(false);
    }, [setNextVisible])

    return(
        <div>
            <h2> {"Type d'installation "} </h2>
            <div className={"flex"}>
                <RadioCard id={'particulier'} label={'Un particulier'} value={'particulier'} name={'installationType'} onClick={onValid}/>
                <RadioCard id={'enterprise'} label={'Une entreprise'} value={'enterprise'} name={'installationType'} onClick={onValid}/>
            </div>
        </div>
    )
}