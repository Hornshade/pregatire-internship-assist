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

  const act={name: 'Leonardo Dicaprio',
  score: 10,
  hobbies:'Music and dancing naked in the rain',
  description: 'He is a good guy with a thick mustache.'}

  //ar trebui sa adaug un id pentru fiecare actor care sa fie utilizat pentru key cand fac map.
  return (
    <div className="App">    
        { actors.map((actor) => (<ul>
        <li key={actor.name}>{actor.name}</li>
        <li key={actor.score}>{actor.score}</li>
        <li key={actor.hobbies}>{actor.hobbies}</li>
        <li key={actor.description}>{actor.description}</li>
       
        </ul>))}  
        <h3>Fara sa stiu proprietatile in continuare</h3>
         <ul>
           { Object.keys(act).map(key => <li value={key}>{act[key]}</li>)}
         </ul>
    </div>
  );
}
export default App;
