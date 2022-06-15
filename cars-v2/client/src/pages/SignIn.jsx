import React from 'react'

function SignIn() {
    const [checked, setChecked] = React.useState(false);
    console.log(checked)
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
                <div className='input_field'>
                    <div className='checkbox_input'>
                        <input
                            id='checkbox_input'
                            type='checkbox'
                            defaultChecked={checked}
                            onClick={() => { setChecked(!checked) }}
                        />
                        <label htmlFor='checkbox_input'>Stay logged in</label>
                    </div>
                </div>
                <button className='sign_in_btn'>Sign in</button>
            </div>
        </div>
    )
}

export default SignIn