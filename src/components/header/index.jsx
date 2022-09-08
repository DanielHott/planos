import React from "react";
import { Container, Button } from "./styles";
import { useAddContext } from "../../hooks/useAddContext";

export function Header () {
     const { isModalOpen, setisModalOpen } = useAddContext();
     const localName = localStorage.getItem('myName');
    return (
        <Container>
            <h1>{localName ? `Processos Seletivos de ${localName}` : "Meus Processos Seletivos"}</h1>
            <Button onClick={() => setisModalOpen(isModalOpen === true ? false : true)}>
                Adicionar {">"}</Button>
        </Container>
    )
}