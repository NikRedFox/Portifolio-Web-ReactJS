import './style.css'
import People from '../../assets/People-working.svg'

const About = (() =>{
    return(
        <section class="about-container">
            <h2>About</h2>

            <div class="about-textbox">
                <div class="about-text">
                    <p>We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>After 10 years of experience Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <img src={People} alt=""/>
            </div>    
        </section>
    )
})

export default About