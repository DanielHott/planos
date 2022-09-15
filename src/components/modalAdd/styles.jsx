import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    input {
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
`;

export const Close = styled.div`
    display: flex;
    right: 50px;
    top: 30px;
    font-size: 20px;
    position: absolute;
    cursor: pointer;
`;

export const BottomInputs = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    align-items: start;
    textarea {
        display: flex;
        width: 900px;
        height: 3rem;
        margin-bottom: 10px;
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
    fieldset {
        display: flex;
        width: 875px;
        height: 1rem;
        justify-content: space-around;
        border: none;
    }
`;

export const TopInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const Modal = styled.div`
    display: flex;
    opacity: 100%;
    width: 100vw;
    background-color: black;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    height: 120vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 20%;
`;

export const Form = styled.form`
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    border-radius: 10px;
    position: absolute;
    background: white;
    top: 10%;
    left: 9%;
    padding: 80px;
    z-index: 5;
    color: black;
    opacity: 100%;
    button {
        display: flex;
        margin-left: 400px;
        margin-top: 20px;
        margin-bottom: -60px;
        justify-content: center;
        width: 100px;
    }
`;

export const Button = styled.button`
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    font-weight: 800;
    padding: 0.5rem;
    :hover {
        box-shadow: 2px 5px 16px 0px #000000
    }
`;