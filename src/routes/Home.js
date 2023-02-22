import Hero from "../components/Hero";
import Navbar from "../components/Navbar"; 
import HomeImg from "../Projectpics/heroo.jpg";
import Footer from "../components/Footer";

function Home () {

    return(

        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Safari Salama Kila Wakati"
        text="Travel Safe Always"
        buttonText="Get Started"
        url="/"
        btnClass="show"
        />
        
        <Footer/>
        

        </>
    )

}
export default Home;