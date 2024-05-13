import LogoPD from '../img/logoPD.svg';

import './TelaInicialForm.css';

const Welcome = () => {
  return (
    <div id='welcome'>
      <img src={LogoPD} alt='Início do Quiz' />
      <h3>Encontre seu</h3>
      <h2>Agente de Sucesso</h2>
      <button>Iniciar Quiz</button>
    </div>
  );
};

export default Welcome;
// export default App;
