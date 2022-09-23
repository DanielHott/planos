import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    height: 5rem;
    margin-bottom: 10px;
    width: 100%;
    }
    display: flex;
    width: 800px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    height: 5rem;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    border: 2px solid #3E4C5E;
    border-radius: 10px;
    color: #a0dda0;
    font-weight: 800;
    background-color: #222A35;
    cursor: pointer;
    padding: 0.5rem;
    :hover {

    }
`;