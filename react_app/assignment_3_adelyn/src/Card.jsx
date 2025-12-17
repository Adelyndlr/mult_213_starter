import './Card.css';

function Card({ wantsPet, setWantsPet }) {
  return (<>
    <div className= "want">
        <p>Are you looking to adopt a pet?</p>
        <button onClick={() => setWantsPet(true)}>Yes</button>
        <button onClick={() => setWantsPet(false)}>No</button>
      </div>
    </>
  );
}

export default Card;

