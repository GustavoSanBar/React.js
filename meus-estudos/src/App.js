import logo from './logo.svg';
import './App.css';

function App() {
  const name='Gustavo'
  const newname = name.toUpperCase()
  
 
  function sum(a, b){
    return a + b
  }

  const url ='https://i.pinimg.com/564x/d7/75/6b/d7756be2fb35a8cb5f752d100f68a541.jpg'


  return (
    <div className="App">
      <h1>Olá, React.</h1>
      <h2>Modificado por {newname}</h2>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Teste"/>
    </div>
  );
}

export default App;
