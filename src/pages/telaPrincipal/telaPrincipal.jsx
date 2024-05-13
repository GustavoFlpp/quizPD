import Card from '../../components/Card';
import backgroundPD from '../../img/backgroundPD.svg';
import styled from 'styled-components';

const TelaPrincipalStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundPD});
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TelaPrincipal = () => {
  return (
    <TelaPrincipalStyled>
      <Card />
    </TelaPrincipalStyled>
  );
};

export default TelaPrincipal;
