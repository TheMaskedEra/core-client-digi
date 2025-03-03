import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Form } from "@digico/ui";
import { NodeNavigator } from '@simulation/DAGmap/NodeNavigator'
import { simulationMap } from '@simulation/DAGmap/SimulationMap'

import { createSimulation } from "@simulation/services";
import { SimulationType } from "@simulation/types/simulation";

export default function SimulationForm() {
    const form = useForm<SimulationType>();

    const firstNodeId = 'installation'
    const navigator = new NodeNavigator(simulationMap);
    const [currentNode, setCurrentNode] = useState(navigator.getNode(firstNodeId));
    const [history, setHistory] = useState([firstNodeId]);
    const [currentNodeId, setCurrentNodeId] = useState(firstNodeId);

    const handleNext = () => {
        const nodeId = navigator.getNextNodeId(currentNodeId);
        setCurrentNodeId(nodeId);
        const node = navigator.getNode(nodeId);
        setCurrentNode(node);
        setHistory(prev => [...prev, nodeId]);
    };

    const handleBack = () => {
        setHistory(prev =>  prev.slice(0, -1));
        const nodeId = history[history.length - 2]; // -2 car la suppression n'est pas encore acquise
        setCurrentNodeId(nodeId);
        const node = navigator.getNode(nodeId);
        setCurrentNode(node);
    };

    const handleSubmit = (data: SimulationType) => {
        console.log(data);
        createSimulation(data).then(() => console.log("sent"));
    };

    return (
        <Form useForm={form} onSubmit={handleSubmit}>
            { React.createElement(currentNode.component, { onValid: handleNext, onBack: handleBack, onSkip: handleNext }) }
            { /*TODO Faire le render dans le Map car sinon peut y avoir soucis si ça demande des attributs différents */}
        </Form>
    )
}

//TODO LA collection demande une clef pour les reacts node  -> enregistrer la clef dans les cookies, enregistrer
// l'état du form au changement avec le next/skip

//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?