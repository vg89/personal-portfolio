
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
/* now we want to give the great vobes font to the above text, then we can simplly write "text-4xl font-bold font-signature" */
