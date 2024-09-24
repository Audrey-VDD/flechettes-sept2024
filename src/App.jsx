import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonComponent from './Components/ButtonComponent';
import ScoreIndicator from './Components/ScoreIndicator';
import { Alert } from 'bootstrap';

function App() {

  // Stocker le 501 et stocker le score joueur, guillemets ou pas, peu importe
  const [scoreBegin, setScoreBegin] = useState(501);
  const [score, setScore] = useState (501);

  // Logique est que chaque chiffre est multiplié par 1 ou 2 ou 3
  const [multiplicator, setMultiplicator] = useState(1);


  // Fonction pour décrémenter à chaque lancer
  const handleClick = (number) => {
    if(number == 25 && multiplicator == 3){
      alert("TRICHEUR !!");
      // remettre le multiplicateur à 1 sinon il reste à 2 ou 3
      setMultiplicator(1);
    } else if((score -(number * multiplicator)) < 0){
      alert("Tour terminé !!");
      setMultiplicator(1);
    }else if((score -(number * multiplicator)) == 0) {
      setScore(score - (number * multiplicator));
      setMultiplicator(1);
      alert("VICTOIRE !!!")
    }else{
      setScore(score - (number * multiplicator));
      // Faire en sorte qu'il revienne à 1
      // La logique dans le jeu c'est "je fais un double de" et pas "je prends le score et je le double"
      setMultiplicator(1);
    }

  };












  return <>

    {/* Tout mettre dans une grande div pour centrer tout le contenu */}
    <div className='d-flex flex-column align-items-center'>

      <h2>Partie de fléchettes</h2>

      <ScoreIndicator maxValue={scoreBegin} value={score}/>

      <div className='col-3 mt-3'>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">SCORE</InputGroup.Text>
          <Form.Control
            placeholder="score"
            aria-label="score"
            aria-describedby="basic-addon1"
            value={score}
          />
        </InputGroup>
      </div>

      <div className='col-3 d-flex justify-content-between flex-wrap mt-3'>
        <Button variant="info" onClick={() => { handleClick(1) }} >1</Button>
        <Button variant="info" onClick={() => { handleClick(2) }} >2</Button>
        <Button variant="info" onClick={() => { handleClick(3) }} >3</Button>
        <Button variant="info" onClick={() => { handleClick(4) }} >4</Button>
        <Button variant="info" onClick={() => { handleClick(5) }} >5</Button>
        <Button variant="info" onClick={() => { handleClick(6) }} >6</Button>
      </div>

      <div className='col-3 d-flex justify-content-between flex-wrap mt-2'>
        <Button variant="info" onClick={() => { handleClick(7) }} >7</Button>
        <Button variant="info" onClick={() => { handleClick(8) }} >8</Button>
        <Button variant="info" onClick={() => { handleClick(9) }} >9</Button>
        <Button variant="info" onClick={() => { handleClick(10) }} >10</Button>
        <Button variant="info" onClick={() => { handleClick(11) }} >11</Button>
        <Button variant="info" onClick={() => { handleClick(12) }} >12</Button>
      </div>

      <div className='col-3 d-flex justify-content-between flex-wrap mt-2'>
        <Button variant="info" onClick={() => { handleClick(13) }} >13</Button>
        <Button variant="info" onClick={() => { handleClick(14) }} >14</Button>
        <Button variant="info" onClick={() => { handleClick(15) }} >15</Button>
        <Button variant="info" onClick={() => { handleClick(16) }} >16</Button>
        <Button variant="info" onClick={() => { handleClick(17) }} >17</Button>
        <Button variant="info" onClick={() => { handleClick(18) }} >18</Button>
      </div>

      <div className='col-3 d-flex justify-content-evenly flex-wrap mt-2'>
        <Button variant="info" onClick={() => { handleClick(19) }} >19</Button>
        <Button variant="info" onClick={() => { handleClick(20) }} >20</Button>
        <Button variant="info" onClick={() => { handleClick(25) }} >25</Button>
        <Button variant="info" onClick={() => { handleClick(0) }} >0</Button>
      </div>

      <div className='col-3 d-flex justify-content-evenly flex-wrap mt-2'>
        <Button variant="info" onClick={() =>{setMultiplicator(2)}} >Double</Button>
        <Button variant="info" onClick={() =>{setMultiplicator(3)}} >Triple</Button>
      </div>

    </div>

  </>;
}

export default App;
