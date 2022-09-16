import styled from "styled-components";

export const Edit = styled.div`
@media (min-width: 1000px) {
    display: flex;
    visibility: ${(props) => (props.isEditOpen ? "visible" : "hidden" )};
    position: absolute;
    flex-direction: column;
    z-index: 10;
    color: black;
    background-color: white;
    padding: 60px;
    top: 18%;
    border: 2px solid black;
    left: 35%;
    justify-content: center;
    border: none;
    border-radius: 10px;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        align-items: end;
        input {
            background: #EEF3F8;
            border: none;
            padding: 5px;
            margin-bottom: 10px;
        }
    }
    h4 {
        position: absolute;
        top: 0;
        cursor: pointer;
        right: 30px;
    }
}
    display: flex;
    visibility: ${(props) => (props.isEditOpen ? "visible" : "hidden" )};
    position: absolute;
    flex-direction: column;
    color: black;
    background-color: white;
    padding: 70px;
    top: 48%;
    border: 2px solid black;
    left: 70%;
    justify-content: center;
    border: none;
    border-radius: 10px;
    align-items: center;
    h4 {
        font-size: 22px;
    }
    form {
        display: flex;
        z-index: 10;
        flex-direction: column;
        align-items: end;
        input {
            background: #EEF3F8;
            border: none;
            padding: 5px;
            margin-bottom: 10px;
        }
    }
    h4 {
        position: absolute;
        top: 0;
        cursor: pointer;
        right: 30px;
    }
`;

export const Button = styled.button`
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    margin-top: 20px;
    margin-bottom: -50px;
    font-weight: 800;
    padding: 0.5rem;
    :hover {
        box-shadow: 2px 5px 16px 0px #000000
    }
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