import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    th, td {
        border: 1px solid violet;
        padding: 10px;
        max-width: 32rem;
        :hover {
            transform: scale(1.1);
            border: 1px solid white;
            background: black;
            z-index: 10;
        }
    }
    text-align: center;
    background: black;
    flex-direction: column;
`;

export const Button = styled.button`
    border: 2px solid violet;
    border-radius: 10px;
    background-color: #000000;
    color: white;
    font-weight: 800;
    cursor: pointer;
    padding: 0.5rem;
    :hover {
        border: 2px solid white;
    }
`;