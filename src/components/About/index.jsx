import './style.css'
import People from '../../assets/People-working.svg'
import { useEffect } from 'react'

const About = () =>{
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('about-show')
                }
            })
        }, {threshold: 0.2})

        const elements = document.querySelectorAll('.about-text, .about-img')
        elements.forEach(el => observer.observe(el))

        return () => elements.forEach(el => observer.unobserve(el))
    }, [])

    return(
        <section className="about-container">
            <h2>About</h2>

            <div className="about-textbox">
                <div className="about-text">
                    <p>We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>After 10 years of experience Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <img className='about-img' src={People} alt=""/>
            </div>    
        </section>
    )
}

export default About