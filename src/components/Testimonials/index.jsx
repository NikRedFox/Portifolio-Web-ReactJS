import './style.css'
import ArrowR from '../../assets/Arrow-right.svg'
import Curly from '../../assets/Curly-hair-man.svg'
import Beard from '../../assets/Beard-man.svg'
import Smiley from '../../assets/Smiley-man.svg'
import { useEffect } from 'react'

const Testimonials = (() =>{
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const el = entry.target
                    const animClass = el.getAttribute('data-anim')
                    if(animClass){
                        el.classList.remove('testimonial-hidden')
                        el.classList.add(animClass)
                        observer.unobserve(el)
                    }                   
                }                
            })
        }, {threshold: 0.2})

        const elements = document.querySelectorAll('.testimonial-hidden')
        elements.forEach(el => observer.observe(el))

        return() => {
            elements.forEach(el => observer.unobserve(el))
        }
    })

    return(
        <section class="testimonials-container">
            <div class="testimonials-text">
                <h2>Testimonials</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="testimonials-cards-container">
                <div class="testimonials-cards-horizontal">
                    <div class="testimonial-card-H testimonial-hidden" data-anim='fade-left'>
                        <img src={Curly} alt=""/>
                        <div class="card-text-H">
                            <h3>“Amazing Team with Lorem Ipsum”</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                            <button className='button-card'>
                                See full review
                                <img src={ArrowR} alt=""/>
                            </button>
                        </div>
                    </div>

                    <div class="testimonial-card-H testimonial-hidden" data-anim='fade-right'>
                        <div class="card-text-H">
                            <h3>“Big Dreams for lorem ipsum”</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                            <button className='button-card'>
                                See full review
                                <img src={ArrowR} alt=""/>
                            </button>                        
                        </div>
                        <img src={Beard} alt=""/>
                    </div>
                </div>

                <div class="testimonials-card-vertical testimonial-hidden" data-anim='fade-bottom'>
                    <img  src={Smiley} alt=""/>
                    <div class="card-text-V">
                        <h3>“Good Dreams for lorem ipsum”</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                        <button className='button-card'>
                            See full review
                            <img src={ArrowR} alt=""/>
                        </button>
                    </div>                
                </div>
            </div>

            <button class="testimonial-button">See All Reviews</button>
        </section>
    )
})

export default Testimonials