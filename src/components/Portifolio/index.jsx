import './style.css'
import QuadroP1 from '../../assets/Quadro-port-1.svg'
import QuadroP2 from '../../assets/Quadro-port-2.svg'
import QuadroP3 from '../../assets/Quadro-port-3.svg'
import QuadroP4 from '../../assets/Quadro-port-4.svg'
import QuadroP5 from '../../assets/Quadro-port-5.svg'
import QuadroP6 from '../../assets/Quadro-port-6.svg'
import { useEffect } from 'react'



const Portifolio =(() =>{
    useEffect(() =>{
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const direction = entry.target.parentElement.classList.contains('quadro-column-left')
                        ? 'show-left'
                        : 'show-right';

                    entry.target.classList.add(direction);
                    entry.target.classList.remove('hiddenL', 'hiddenR');
                }
            });
        }, { threshold: 0.2, });

        const images = document.querySelectorAll('.quadro-column-left img, .quadro-column-right img')
        images.forEach((img) => observer.observe(img));

        return() =>{
            images.forEach((img) => observer.unobserve(img))
        };

    }, []);

    return(
        <section className="portifolio-container">
            <h2>Portifolio</h2>
            <div className="quadro-container">            
                <div className="quadro-column-left">
                    <img className='hiddenL' src={QuadroP1} alt=""/>
                    <img className='hiddenL' src={QuadroP3} alt=""/>
                    <img className='hiddenL' src={QuadroP5} alt=""/> 
                </div>
                <div className="quadro-column-right">
                    <img className='hiddenR' src={QuadroP2} alt=""/>
                    <img className='hiddenR' src={QuadroP4} alt=""/>
                    <img className='hiddenR' src={QuadroP6} alt=""/>
                </div>                    
            </div>
        </section>
    )
})

export default Portifolio