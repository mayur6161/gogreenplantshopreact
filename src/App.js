import logo from './logo.svg';
import './App.css';
import MovieCard from "./component/movieCard";

function App() {

  return (
      <>
          <div className="App">
              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
              <div className="w3-container w3-blue">
                  <h2 style={{fontWeight:"bold", fontFamily:"serif", textAlign:"start", paddingLeft:"20px"}}>CineFlix</h2>
              </div>
              <MovieCard/>
          </div>
      </>

  );
}

export default App;
