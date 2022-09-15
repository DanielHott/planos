import React from "react";
import { useEffect, useState } from "react";
import { Container, Button } from "./styles";
import { useAddContext } from "../../hooks/useAddContext";

export function Header () {
    const { isModalOpen, setisModalOpen, name } = useAddContext();
    const [ localName, setLocalName ] = useState('');
    useEffect(() => {
        setLocalName(localStorage.getItem('myName'));
    } , [name])
    return (
        <Container>
            <h1>{localName ? `Processos Seletivos de ${localName}` : "Meus Processos Seletivos"}</h1>
            <Button onClick={() => setisModalOpen(isModalOpen === true ? false : true)}>
                Adicionar {">"}</Button>
        </Container>
    )
}