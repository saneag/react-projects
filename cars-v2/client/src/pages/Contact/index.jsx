import React from 'react'

function Contact() {
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    return (
        <main>
            <div className='contact_page'>
                <div className='form'>
                    <div className='input_field'>
                        <label htmlFor='email_input'>Email</label>
                        <input
                            placeholder='Enter Email'
                            id='email_input'
                            type='text'
                            maxLength='20'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <span className='border'></span>
                    </div>
                    <div className='input_field'>
                        <textarea
                            placeholder='Enter Message'
                            id='message_input'
                            type='text'
                            maxLength='200'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        className='sign_in_btn'
                        onClick={() => { }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Contact