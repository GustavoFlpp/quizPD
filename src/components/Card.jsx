import styled from 'styled-components';
import LogoPD from '../img/logoPD.svg';

const CardStyled = styled.div`
  width: 458.48px;
  height: 667px;
  background-color: #eed8ff;
  border-radius: 46px;
  border: 1px solid #ffffff;
  box-shadow: 7px 7px 50px rgba(0, 0, 0, 0.25);
  img{
    
  }
`;

const Card = () => {
  return (
    <CardStyled>
      <img src={LogoPD} alt='Início do Quiz' />
      <h3>Encontre seu</h3>
      <h2>Agente de Sucesso</h2>
      <button>Iniciar Quiz</button>
    </CardStyled>
  );
};

export default Card;
