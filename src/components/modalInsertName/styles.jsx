import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  opacity: 100%;
  width: 100vw;
  background-color: black;
  visibility: ${(props) => (props.isModalOpen ? "visible" : "hidden")};
  height: 120vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 20%;
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  visibility: ${(props) => (props.isModalOpen ? "visible" : "hidden")};
  justify-content: center;
  color: black;
`;

export const NameInsert = styled.form`
    width: 300px;
    border: 2px solid #0044ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
    background: white;
    position: absolute;
    padding: 80px 180px;
    border-radius: 20px;
    z-index: 4;
    input {
        border-radius: 8px;
        text-align: center;
        width: 300px;
        padding: 6px;
    }
`;

export const Button = styled.button`
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    font-weight: 800;
    width: 80px;
    margin-top: 20px;
    padding: 0.5rem;
    :hover {
        box-shadow: 2px 5px 16px 0px #000000
    }
`;