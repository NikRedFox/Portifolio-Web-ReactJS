import './style.css'
import { useState } from 'react'

const Contact =(()=>{
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Form enviado:", form)
    }

    return(
        <section class="contact-container">
            <h2>Contact</h2>

            <div class="contact-form-container">
                <form class="form-box" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        className="input-underline"
                        placeholder="Jhon Doe"
                    />

                    <label htmlFor="name">Email</label>
                    <input 
                        type="text" 
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        className="input-underline" 
                        placeholder="jhon@email.com"
                    />

                    <label htmlFor="name">Message</label>
                    <textarea 
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        className="input-underline-message" 
                        placeholder="Enter your message here..."
                    ></textarea>

                    <button type='submit'>Send</button>
                </form> 
            </div>
        </section>
    )
})

export default Contact