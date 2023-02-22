import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import ServiceImg from "../Projectpics/images.jpeg"
import Footer from "../components/Footer"


function Service (){
    return(
        <>
         <Navbar />
        <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Safari Salama Kila Wakati"
        text="Travel Safe Always"
        buttonText="Get started"
        url="/"
        btnClass="show"
        />
        <Footer/>
        
    
        </>
    )

}
export default Service;