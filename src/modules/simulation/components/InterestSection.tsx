import { useEffect } from 'react'

import { InputCard } from '@simulation/components/InputCard'

type Props = {
    setNextVisible: (value: boolean) => void,
};

export const InterestSection = ({ setNextVisible }: Props) => {

    useEffect(() => {
        setNextVisible(true);
    }, [setNextVisible]);

    return (
        <InputCard
            id={'id'}
            label={'Panneaux photovoltaïques'}
            value={'panneaux'}
            name={'interest'}
            onClick={function (): void {
                throw new Error('Function not implemented.')
            }}
            type={"checkbox"}
        />
    )
};