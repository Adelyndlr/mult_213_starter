import './Card.css';

function Card(props) {
  return (<>
    <div className="card">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.content}</p>
      <img src={props.image} alt={props.title}/>
    </div>
    </>
  );
}

export default Card;

/*This is how i had my fucntion before, it wasn't working
-Always forget to check the tags <card> </card> doesn't exist
-The image tag was not set correctly.

function Card(props) {
  return (<>
    <div>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.content}</p>
      <img>{props.image}</img>
    </div>
    </>
  );
}*/