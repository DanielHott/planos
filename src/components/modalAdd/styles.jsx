import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 1000px) {
    margin: 0;
    padding: 0;
    width: 100vw;
    input {
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
}
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
    @media (min-width: 1000px) {
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
}
    textarea {
        display: flex;
        width: 700px;
        height: 3rem;
        margin-bottom: 10px;
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
    fieldset {
        display: flex;
        width: 700px;
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
    @media (min-width: 1000px) {
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
    }
    display: flex;
    opacity: 100%;
    width: 100%;
    background-color: black;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 20%;
`;

export const Form = styled.form`
@media (min-width: 1000px) {
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    border-radius: 10px;
    position: absolute;
    background: white;
    top: 10%;
    left: 17%;
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
}
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    border-radius: 10px;
    position: absolute;
    background: white;
    top: 40%;
    left: 2.5%;
    padding: 70px;
    z-index: 5;
    color: black;
    opacity: 100%;
    width: 700px;
    button {
        display: flex;
        margin-left: 300px;
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