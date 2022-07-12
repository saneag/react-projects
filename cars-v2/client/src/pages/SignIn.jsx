import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [stayLogged, setStayLogged] = React.useState(false)
    const [passwordVisibility, setPasswordVisibility] = React.useState(false)

    return (
        <div className='sign_in_page'>
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
                    <div className='checkbox_input'>
                        <input
                            id='checkbox_input'
                            type='checkbox'
                            defaultChecked={stayLogged}
                            onClick={() => setStayLogged(!stayLogged)}
                        />
                        <label htmlFor='checkbox_input'>Stay logged in</label>
                    </div>
                </div>
                <button
                    className='sign_in_btn'
                    onClick={() => { }}
                >
                    Sign in
                </button>
            </div>
        </div >
    )
}

export default SignIn