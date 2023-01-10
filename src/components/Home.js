import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./Banner";
import { Projects } from "./Projects";
import { Contact } from "./Contact";


function Home() {
  return (
    <div className="App"> 
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
