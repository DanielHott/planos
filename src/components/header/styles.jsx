import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    height: 5rem;
    border: 2px solid violet;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    border: 2px solid violet;
    color: white;
    border-radius: 10px;
    background-color: #000000;
    font-weight: 800;
    cursor: pointer;
    padding: 0.5rem;
    :hover {
        border: 2px solid white;
    }
`;