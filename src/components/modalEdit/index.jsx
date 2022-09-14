import { Edit } from "./styles"
import { useState, useEffect } from "react";
import { useAddContext } from "../../hooks/useAddContext";
import { useForm } from "react-hook-form";

export function ModalEdit ({info, index}) {
    const { isModalEditOpen, setisModalEditOpen, setAddFile } = useAddContext();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const changeItem = (data) => {
        const changedItem = {
            empresa: data.empresa !== '' ? data.empresa : info.empresa,
            inscricao: info.inscricao,
            retorno: info.retorno,
            descricao: data.descricao !== '' ? data.descricao : info.descricao,
            status: data.status !== '' ? data.status : info.status,
        };
        const localAtual = JSON.parse(localStorage.getItem('minhasEntrevistas'))
        const novoLocal = localAtual.filter((item, counter) => counter !== index);
        novoLocal.push(changedItem);
        localStorage.setItem('minhasEntrevistas', JSON.stringify(novoLocal));
        setAddFile(true);
    };

    const dateFormat = date => date && `${date.substr(8, 9)}/${date.substr(5, 2)}/${date.substr(0, 4)}`;
    return (
        <Edit isEditOpen={isModalEditOpen}>
        <form onSubmit={handleSubmit(changeItem)}>
        <label>Empresa: <input name="empresa" autoComplete="off" {...register("empresa")} defaultValue={info.empresa} /></label>
        <label>Inscrição: <input name="inscricao" {...register("inscricao")}  value={dateFormat(info.inscricao)} /></label>
        <label>Retorno: <input name="retorno" {...register("retorno")}  value={dateFormat(info.retorno)} /></label>
        <label>Descrição: <input name="descricao" autoComplete="off" {...register("descricao")}  defaultValue={info.descricao} /></label>
        <label>Status: <input name="status" autoComplete="off" {...register("status")}  defaultValue={info.status} /></label>
        <button type="submit" onClick={() => setisModalEditOpen(false)}>X</button>
        </form>
    </Edit>
    )
}