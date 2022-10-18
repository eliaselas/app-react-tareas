import "./App.css";
import freecodeacamplogo from "./imagenes/freecodecamp-logo.png";
import ListaTarea from "./componentes/ListaTarea";
function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodeacamplogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaTarea />
      </div>
    </div>
  );
}

export default App;
