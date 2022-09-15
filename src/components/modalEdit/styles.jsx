import styled from "styled-components";

export const Edit = styled.div`
    display: flex;
    visibility: ${(props) => (props.isEditOpen ? "visible" : "hidden" )};
    position: absolute;
    flex-direction: column;
    color: black;
    background-color: white;
    padding: 60px;
    top: 18%;
    border: 2px solid black;
    left: 35%;
    justify-content: center;
    border: 2px solid #0044ff;
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