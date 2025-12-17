import './Pets.css';

function Pets({ name, wantsPet, dogImage, catFact, catImage }) {
  return (<>
    {wantsPet === true && (
        <div className= 'dogcard'>
          <h2>You can adopt this puppy today, {name}!</h2>
          <img src={dogImage} alt="Random Dog" width="300" />
          <p>Contact us or come visit us!🐾</p>
          <h4>306-856-478🐕
          4189 Bigdog St, North 😽</h4>
        </div>
      )}

      {wantsPet === false && (
        <div className='catinfo'>
          <h2>Ok {name}, here is a cat fact instead:</h2>
          <p>✏️{catFact}</p>
          <img src={catImage} alt="Random Cat" />
          <p>Consider donating to your local shelter ❤️</p>
        </div>
      )}
    </>
  );
}

export default Pets;