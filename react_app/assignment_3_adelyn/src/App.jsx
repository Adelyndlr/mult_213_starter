
import './App.css';
import { getCatFact, getDogImage, getCatImage } from './api.js';
import Header from './Header.jsx';
import User from './User.jsx';
import Pets from './Pets.jsx';
import Card from './Card.jsx';
import { useState, useEffect } from 'react';
//import viteLogo from '/vite.svg';
//import reactLogo from './assets/react.svg';



function App() {

  const [name, setName] = useState('');
  const [wantsPet, setWantsPet] = useState(null);
  const [dogImage, setDogImage] = useState('');
  const [catFact, setCatFact] = useState('');
  const [catImage, setCatImage] = useState('');


  /*//I had to set a loop to get the api data to show up on the page
    useEffect(() => {
      getDogImage().then(image => setDogImage(image));
      getCatFact().then(fact => setCatFact(fact));
      getRandomAnimalImage().then(image => setAnimalImage(image));
    }, []);*/

  useEffect(() => {
    if (wantsPet === true) {
      getDogImage().then(image => setDogImage(image));
    }
    if (wantsPet === false) {
      getCatFact().then(fact => setCatFact(fact));
      //I had setCatImage(getCatImage());, instead of get, so it was not working
      getCatImage().then(image => setCatImage(image));
      /*Was trying to use other Api's to make it more fun, but they were not working
      //getRandomAnimalImage().then(image => setAnimalImage(image));*/
    }
    //wasn't working because I didn't include this part (dependency)
  }, [wantsPet]);


  return (
    <>

      <Header title="Pet Adoption Hype" message="Thanks for stopping by." />
      <User name={name} setName={setName} />
      <Card wantsPet={wantsPet} setWantsPet={setWantsPet} />
      <Pets name={name} wantsPet={wantsPet} dogImage={dogImage} catFact={catFact} catImage={catImage} />
    </>
  );
}

export default App;

