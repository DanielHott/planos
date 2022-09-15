import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    height: 5rem;
    border: 2px solid #0044ff;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    border: 2px solid #0044ff;
    border-radius: 10px;
    font-weight: 800;
    background-color: white;
    cursor: pointer;
    padding: 0.5rem;
    :hover {
        border: 2px solid black;
    }
`;