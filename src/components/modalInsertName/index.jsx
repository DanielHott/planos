import { Modal, Container, NameInsert, Button } from "./styles";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function InsertName () {
    const {
        register,
        handleSubmit,
      } = useForm();
    const [showComponent, setShowComponent] = useState(true);
    const localName = localStorage.getItem('myName');
    const saveName = data => {
        localStorage.setItem('myName', data.myName);
        setShowComponent(false);
    }
    if (!localName) {
    return (
        <Container isModalOpen={showComponent}>
            <Modal isModalOpen={showComponent}></Modal>
            <NameInsert onSubmit={handleSubmit(saveName)}>
                <h2>Qual o seu nome?</h2>
                <input type="text" name="myName" data-testid="name" {...register("myName")}/>
                <Button type="submit">Salvar</Button>
            </NameInsert>
        </Container>
    )
    }
}