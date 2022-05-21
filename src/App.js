import './App.css';
import { useState } from 'react';


function App() {
  const [actors,setActors] = useState([
    {
      name: 'Leonardo Dicaprio',
      score: 10,
      hobbies:'Music and dancing naked in the rain',
      description: 'He is a good guy with a thick mustache.'
    }
  ])
  //ar trebui sa adaug un id pentru fiecare actor care sa fie utilizat pentru key cand fac map.
  return (
    <div className="App">    
        { actors.map((actor) => (<ul>
        <li>{actor.name}</li>
        <li>{actor.score}</li>
        <li>{actor.hobbies}</li>
        <li>{actor.description}</li>
        </ul>))}      
    </div>
  );
}

export default App;
