import ListaAmigos from "./components/ListaAmigos";
import './App.css'
import AddAmigo from "./components/AdicionarAmigo";
import Header from "./components/Header";
import DeletarAmigo from "./components/DeletarAmigo";
import AlterarAmigo from "./components/AlterarAmigo";

const App = () => {

  return (

    <div className='container' >
      <Header />
      <ListaAmigos />
      <AddAmigo />
      <DeletarAmigo />
      <AlterarAmigo />
    </div >
  )
}
export default App;
