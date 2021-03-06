import React, {useState} from "react"
import emailjs from "emailjs-com" //npm install emailjs

const Contact = () => {

    // Declaration of the state that will store data from the form inputs
    const [formData, setFormData] = useState (
        {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    )

    // Funtion that collects data from form inputs and instantly applies it to the state.
    const handleChange = (e : any) => {
        const {name, value} = e.target

        setFormData(prevFormData => {
            return {...prevFormData, [name]: value}
        })
    }

    //Function that handles the submit button and usess emailjs to format and send data via email.
    const handleSubmit = (e : any) => {
        e.preventDefault()
        emailjs.sendForm("service_sh5rr5e","template_i7nduro", e.target, "0gU9-7P7Fb0vD7eKY") // Arguments are: Service ID, Template ID, <input>, public key (the form onSubmit will specify the function that will run the emailjs)
    }

    return (
        <div className="main__container">
        <h1>Inquiries / Quotes</h1>
            <form  id='contact-form'  onSubmit={handleSubmit}>

                <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    required
                />

                <input
                    type='email'
                    className='form-control'
                    placeholder='Email address'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    required
                />

                <input
                    type='text'
                    className='form-control'
                    placeholder='Subject'
                    onChange={handleChange}
                    name="subject"
                    value={formData.subject}
                    required
                />

                <textarea
                    rows={10}
                    className='form-control'
                    placeholder='Message'
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                    required
                />

                <button className='submit-btn'>Submit</button>
            </form>
            <button id="call__btn"><a href="tel:+19053201693">(905) 320-1693</a></button>
        </div>        
    )
}

export default Contact