import React from 'react'

const MeesageForm = () => {
    return (
        <form>
            <div className="input_group">
                <label htmlFor="email" >Email:</label>
                <input type="text" id="email" maxLength="25" />
            </div>
            <div className="input_group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" maxLength="400" />
            </div>
            <div className="submit_btn">
                <button className="send_btn">Send Message</button>
            </div>
        </form>
    )
}

export default MeesageForm