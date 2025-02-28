import React from 'react'

type ConditionFunction = (data: any) => boolean;

export interface Node {
    id: string;
    component: React.FC<any>;
}