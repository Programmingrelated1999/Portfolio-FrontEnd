import './App.css';

import NavBar from './NavBar';
import Footer from "./Footer";
import AboutMe from './pages/AboutMe';

function App() {
  return (
      <>
      <header>        
        <NavBar />
      </header>
      <body>
        <AboutMe />
      </body>
      <footer>
        <Footer />
      </footer>
      </>
  );
}

export default App;
