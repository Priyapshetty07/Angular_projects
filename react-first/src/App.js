import logo from './logo.svg';
import './App.css';
import Contact from './Contact'
import image1 from './images/image1.png'



function App() {

 

  let myTitle = "Welcome to react js learning camp";

 

  return (

    <>

      <header>

        <img src={image1} width="100%" height="200" ></img>

        {/* this is calling of function component of react js  */}

        <Contact></Contact>

      </header>

      <div className="thbs-text">

        <h2>{myTitle}</h2>

        <Contact></Contact> 

      </div>

    </>

  );

}

export default App;
