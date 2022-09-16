import styled from "styled-components";

export const Table = styled.table`
    @media (min-width: 1000px) {
        width: 100%;
        th, td {
            border: 1px solid #0044ff;
        padding: 10px;
        max-width: 32rem;
        :hover {
            
            border: 1px solid black;
            z-index: 10;
        }
    }
    #describe {
        width: 480px;
    }
    text-align: center;
    flex-direction: column;
}
    width: 820px;
    th, td {
        border: 1px solid #0044ff;
        padding: 5px;
        max-width: 32rem;
        :hover {
            border: 1px solid black;
            z-index: 10;
        }
    }
    #describe {
        width: 300px;
    }
    text-align: center;
    flex-direction: column;
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