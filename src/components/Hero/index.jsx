import './style.css'
import Quadro1 from "../../assets/Quadro-main-1.svg"
import Quadro2 from "../../assets/Quadro-main-2.svg"

const Hero = (() => {
    return(
        <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>        
            <div className="main-container">
                <img className="img-main-1" src={Quadro1} alt=""/>
                <img className="img-main-2" src={Quadro2} alt=""/>
                <h1>Creative Design</h1>
            </div>
            <button>Get a Quote</button>
        </main>
    )
})

export default Hero