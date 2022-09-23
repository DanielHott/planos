import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  opacity: 100%;
  width: 100%;
  background-color: black;
  visibility: ${(props) => (props.isModalOpen ? "visible" : "hidden")};
  height: 100%;
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
@media (min-width: 1000px) {
    width: 300px;
    border: 2px solid #3E4C5E;
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
        border: none;
        background: #EEF3F8;
        width: 300px;
        padding: 10px;
    }
  }
  @media (max-width: 999px) {
    width: 300px;
    border: 2px solid #3E4C5E;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
    margin-left: 450px;
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
  }
`;

export const Button = styled.button`
    border: 2px solid #3E4C5E;
    border-radius: 10px;
    color: #a0dda0;
    font-weight: 800;
    background-color: #222A35;
    cursor: pointer;
    margin-top: 20px;
    padding: 0.5rem;
    :hover {
        box-shadow: 2px 5px 16px 0px #000000
    }
`;