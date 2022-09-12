import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    th, td {
        border: 1px solid;
        padding: 10px;
        max-width: 32rem;
        :hover {
            transform: scale(1.1);
            z-index: 10;
            background: white;
        }
    }
    text-align: center;
    background: #ecece9;
    flex-direction: column;
    
`;