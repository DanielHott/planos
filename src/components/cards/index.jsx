import { Table } from "./styles";
import { useEffect, useState } from "react";
import { useAddContext } from "../../hooks/useAddContext";

export function Cards () {
    const [ localAtual, setLocal ] = useState();
    const { addFile, setAddFile   } = useAddContext();
    const [load, setLoad] = useState(false);
    const loadFiles = () => {
        setLocal(JSON.parse(localStorage.getItem('minhasEntrevistas')));
        setLoad(false);
    }
    const apagar = (numberIndex) => {
        const novoLocal = localAtual.filter((item, index) => index !== numberIndex);
        localStorage.setItem('minhasEntrevistas', JSON.stringify(novoLocal));
        setLoad(true);
        setAddFile(false);
    }
    useEffect(() => {
        loadFiles();
    }, [load, addFile])
    setAddFile(false);
    if(!localAtual) {
        return (
            <h1>Vazio :c</h1>
        )
    }
    return (
        <Table>
            <tr>
                <th>Empresa</th>
                <th>Inscrição</th>
                <th>Retorno</th>
                <th>Descrição</th>
                <th>Status</th>
            </tr>
           {localAtual && localAtual.map((interview, index) => {
            const dateFormat = date => `${date.substr(8, 9)}/${date.substr(5, 2)}/${date.substr(0, 4)}`;
            return (
                <tr>
                    <td>{interview.empresa}</td>
                    <td>{dateFormat(interview.inscricao)}</td>
                    <td>{dateFormat(interview.retorno)}</td>
                    <td>{interview.descricao}</td>
                    <td>{interview.status}</td>
                    <button onClick={() => apagar(index)}>Apagar</button>
                    <button>Editar</button>
                </tr>
            )
           })}
        </Table>
    )
}