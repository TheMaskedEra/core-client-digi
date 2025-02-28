import { useEffect } from 'react'

import { OptionCard } from '@simulation/components/OptionCard'

type Props = {
    setNextVisible: (value: boolean) => void,
};

export const InterestSection = ({ setNextVisible }: Props) => {

    useEffect(() => {
        setNextVisible(true);
    }, [setNextVisible]);

    return (
        <OptionCard
            id={'id'}
            label={'Panneaux photovoltaïques'}
            value={'panneaux'}
            name={'interest'}
            onClick={function (): void {
                throw new Error('Function not implemented.')
            }}
        />
    )
};