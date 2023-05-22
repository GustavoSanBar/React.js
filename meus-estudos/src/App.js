import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';

function App() {
  
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <HelloWorld/>
      <SayMyName />
      <Pessoa
      nome = 'Ichigo'
      idade = '17'
      profissao = 'Shinigami'
      foto = 'https://i.pinimg.com/564x/4a/b6/37/4ab637b00ba63bbaf7f2aa8baa567550.jpg'
      />
    </div>
  );
}

export default App;
