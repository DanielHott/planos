import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    height: 5rem;
    border: 2px solid black;
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