import './Footer.css';

function Footer(props) {
  return (<>
    <footer>
      <p>{props.message}</p>
      <p>Copyright © 2025 My Website. All rights reserved.</p>
    </footer>
    </>
  );
}

export default Footer;