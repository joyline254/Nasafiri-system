import Hero from "../components/Hero";
import Navbar from "../components/Navbar"; 
import HomeImg from "../Projectpics/heroo.jpg";
import Footer from "../components/Footer";
import GetStarted from "../components/Allsignings/GetStarted";

//import { Login } from "../components/Login";

function Home () {

    return(

        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Safari Salama Kila Wakati"
        text="Travel Safe Always"
        buttonText= "GetStarted"
        url="/"
        btnClass="show"
        />
        <GetStarted/>
        <Footer/>
        
        
        

        </>
    )

}
export default Home;