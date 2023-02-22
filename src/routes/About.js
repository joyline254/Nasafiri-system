import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../Projectpics/twoway.jpg"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs";

function About(){
    return(
        
        <>
         <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Get to know us"
        buttonText="Back"
        url="/"
        btnClass="show"
        />

        <div className="purpose">
        
        
            <ol type="1">
                <li> Automate the process of public transport.</li>
                <li>Alleviate commuter strain.</li>
                <li>Minimize human errors.</li>


            </ol> 

            <ol>
                <p>Features</p>
                <li>Bla</li>
                <li>Bla</li>
                <li>Bla</li>
                <li>Bla</li>

            </ol>
        
        </div>

        <AboutUs/>

        <Footer/>
        
        </>
    )

}
export default About;