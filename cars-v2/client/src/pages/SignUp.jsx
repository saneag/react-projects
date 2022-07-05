import React from 'react'

function SignUp() {
    const [checked, setChecked] = React.useState(false);
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
                    />
                    <span className='border'></span>
                </div>
                <div className='input_field'>
                    <label htmlFor='pass_input'>Password</label>
                    <input
                        placeholder='Enter Password'
                        id='pass_input'
                        type='password'
                        maxLength='20'
                    />
                    <span className='border'></span>
                </div>
                <button className='sign_in_btn'>Sign up</button>
            </div>
        </div>
    )
}

export default SignUp