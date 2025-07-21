import './style.css'
import QuadroP1 from '../../assets/Quadro-port-1.svg'
import QuadroP2 from '../../assets/Quadro-port-2.svg'
import QuadroP3 from '../../assets/Quadro-port-3.svg'
import QuadroP4 from '../../assets/Quadro-port-4.svg'
import QuadroP5 from '../../assets/Quadro-port-5.svg'
import QuadroP6 from '../../assets/Quadro-port-6.svg'


const Portifolio =(() =>{
    return(
        <section className="portifolio-container">
            <h2>Portifolio</h2>
            <div className="quadro-container">            
                <div className="quadro-column-left">
                <img src={QuadroP1} alt=""/>
                    <img src={QuadroP3} alt=""/>
                    <img src={QuadroP5} alt=""/> 
                </div>
                <div className="quadro-column-right">
                    <img src={QuadroP2} alt=""/>
                    <img src={QuadroP4} alt=""/>
                    <img src={QuadroP6} alt=""/>
                </div>                    
            </div>
        </section>
    )
})

export default Portifolio