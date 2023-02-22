import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

function Contact (){
    return(
        <>
         <Navbar />
        <Hero
        cName="hero"
        heroImg="https://www.thefloridalawgroup.com/wp-content/uploads/2020/07/shutterstock_1158115840.jpg"
        title="Contact Us"
        text="Let's get to know you as you get to know us"
        buttonText="Back"
        url="/"
        btnClass="show"
        />
        < ContactForm/>

         <Footer/>

        </>
    )

}
export default Contact;