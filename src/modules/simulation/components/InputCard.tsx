import React from 'react'

type OptionType = 'radio' | 'checkbox';

type Props = {
    id: string,
    label: string,
    value: string,
    name: string;
    onClick: () => void,
    type?: OptionType
};

export const InputCard = ({ id, label, value, name, onClick, type = 'radio' }: Props) => {

    return (
        <label htmlFor={id} className="cursor-pointer">
            <input type={type} id={id} name={name} value={value} className="peer hidden" onClick={ onClick }/>
            <div className="w-80 h-36 flex items-center justify-center border-2 border-gray-300 rounded-xl bg-white shadow-md
                    peer-checked:bg-[#00FF00] transition-all">
                <span className="text-lg font-medium text-blue-700">{label}</span>
            </div>
        </label>
    );
};