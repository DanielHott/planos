import styled from "styled-components";

export const Edit = styled.div`
    display: flex;
    visibility: ${(props) => (props.isEditOpen ? "visible" : "hidden" )};
    position: absolute;
    flex-direction: column;
    background-color: white;
    padding: 100px;
    top: 25%;
    border: 2px solid black;
    left: 34%;
    justify-content: center;
    align-items: end;
    form {
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`;