import styled from "styled-components";

export const Table = styled.table`
    @media (min-width: 1000px) {
        width: 100%;
        padding: 1rem;
        th, td {
        border: 1px solid #3E4C5E;
        padding: 10px;
        max-width: 32rem;
        :hover {
            

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
        border: 1px solid #3E4C5E;
        padding: 5px;
        max-width: 32rem;
        :hover {

        }
    }
    #describe {
        width: 300px;
    }
    text-align: center;
    flex-direction: column;
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