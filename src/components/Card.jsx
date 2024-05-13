import styled from 'styled-components';
import LogoPD from '../img/logoPD.svg';
import Form from './Form';

const CardStyled = styled.div`
  width: 458.48px;
  height: 667px;
  background-color: #eed8ff;
  border-radius: 46px;
  border: 1px solid #ffffff;
  box-shadow: 7px 7px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    padding-top: 1.25rem;
  }
`;

const Card = () => {
  return (
    <CardStyled>
      <img src={LogoPD} alt='Início do Quiz' />
      <Form />
      <button>Iniciar Quiz</button>
    </CardStyled>
  );
};

export default Card;
