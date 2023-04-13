import React from 'react'
import emailjs from '@emailjs/browser'; 
const Input = () => {

    const form = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_qxuqe3e', 'template_fw5huha', this);
    }
    return (
        <div>
            <form enctype="multipart/form-data" method="post" onsubmit={form}>
                <label>Attach file:</label>
                <input type="file" name="my_file" />
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Input