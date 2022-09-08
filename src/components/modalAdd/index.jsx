import React from "react";
import { Container, Form, Modal, BottomInputs, TopInputs, Close, Button } from "./styles";
import { useAddContext } from "../../hooks/useAddContext";
import { useForm } from "react-hook-form";

export function ModalAdd() {
  const { isModalOpen, setisModalOpen } = useAddContext();
  const {
    register,
    handleSubmit,
  } = useForm();
  const savePost = data => {
    const dataStringifado = JSON.stringify(data);
    const localAtual = localStorage.getItem('minhasEntrevistas');
    const array = [];
    array.push(dataStringifado);
    if(localAtual) array.push(localAtual);
    localStorage.setItem('minhasEntrevistas', array);
    setisModalOpen(false)
  };
  return (
    <Container >
      <Modal isAddOpen={isModalOpen}></Modal>
      <Form isAddOpen={isModalOpen} onSubmit={handleSubmit(savePost)}>
        <Close onClick={() => setisModalOpen(isModalOpen ? false :  true)}>x</Close>
        <TopInputs>
        <label>
          {" "}
          Empresa: {" "}
          <input type="text" name="empresa" required {...register("empresa")} />
        </label>
        <label>
          Data de inscrição: {" "}
          <input type="date" name="inscricao" {...register("inscricao")} />
        </label>
        <label>
         Estimativa de retorno: {" "}
          <input type="date" name="inscricao" {...register("inscricao")} />
        </label>
        </TopInputs>
        <BottomInputs>
        <label>
          Descrição da vaga: {" "}
          <textarea type="textarea" name="descricao" {...register("descricao")} />
        </label>
        <label>Status: {" "}
        <fieldset>
          <label>
            <input type="radio" name="status" value="Negativa" {...register("status")} ></input>
            Negativa
          </label>
          <label>
            <input type="radio" name="status" value="Sem Retorno" {...register("status")}></input>
            Sem Retorno
          </label>
          <label>
            <input type="radio" name="status" value="Desafio Técnico" {...register("status")}></input>
            Desafio técnico
          </label>
          <label>
            <input type="radio" name="status" value="Entrevista" {...register("status")}></input>
            Entrevista
          </label>
          <label>
            <input type="radio" name="status" value="Proposta" {...register("status")}></input>
            Proposta
          </label>
          <label>
            <input type="radio" name="status" value="Empregado" {...register("status")}></input>
            Empregado🎉
          </label>
        </fieldset>
        </label>
        </BottomInputs>
        <Button type="submit" >Salvar</Button>
      </Form>
    </Container>
  );
}
