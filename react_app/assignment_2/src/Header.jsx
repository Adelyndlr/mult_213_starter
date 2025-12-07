import './Header.css';

function Header(props) {
  return (<>
    <header>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </header>
    </>
  );
}

//forgot this part 
export default Header;
