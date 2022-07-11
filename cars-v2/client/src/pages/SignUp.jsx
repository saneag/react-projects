import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function SignUp() {
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [passwordVisibility, setPasswordVisibility] = React.useState(false)
    const [passwordRepeatVisibility, setPasswordRepeatVisibility] = React.useState(false)

    return (
        <div className='sign_in_page sign_up_page'>
            <div className='form'>
                <div className='input_field'>
                    <label htmlFor='name_input'>Name</label>
                    <input
                        placeholder='Enter Email'
                        id='name_input'
                        type='text'
                        maxLength='20'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className='border'></span>
                </div>
                <div className='input_field'>
                    <label htmlFor='email_input'>Email</label>
                    <input
                        placeholder='Enter Email'
                        id='email_input'
                        type='email'
                        maxLength='20'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className='border'></span>
                </div>
                <div className='input_field'>
                    <label htmlFor='pass_input'>Password</label>
                    <input
                        placeholder='Enter Password'
                        id='pass_input'
                        type={passwordVisibility ? 'text' : 'password'}
                        maxLength='20'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FontAwesomeIcon icon={faEye}
                        className='show_pass'
                        onClick={() => setPasswordVisibility(!passwordVisibility)}
                    />
                    <span className='border'></span>
                </div>
                <div className='input_field'>
                    <label htmlFor='repeat_pass_input'>RepeatPassword</label>
                    <input
                        placeholder='Enter Password'
                        id='repeat_pass_input'
                        type={passwordRepeatVisibility ? 'text' : 'password'}
                        maxLength='20'
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                    />
                    <FontAwesomeIcon icon={faEye}
                        className='show_pass'
                        onClick={() => setPasswordRepeatVisibility(!passwordRepeatVisibility)}
                    />
                    <span className='border'></span>
                </div>
                <button
                    className='sign_in_btn'
                    onClick={() => { }}
                >
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default SignUp