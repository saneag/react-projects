import React from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
    const [passwordVisibility, setPasswordVisibility] = React.useState(false)

    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='sign_in_page'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form'>
                    <div className='input_field'>
                        <label htmlFor='email_input'>Email</label>
                        <input
                            placeholder='Enter Email'
                            id='email_input'
                            type='text'
                            maxLength='20'
                            {...register('email', { required: "Input email" })}
                        />
                        <span className='border'></span>
                    </div>
                    <p className='error_message'>{errors.email?.message}</p>
                    <div className='input_field'>
                        <label htmlFor='pass_input'>Password</label>
                        <input
                            placeholder='Enter Password'
                            id='pass_input'
                            type={passwordVisibility ? 'text' : 'password'}
                            maxLength='20'
                            {...register('password', { required: "Input password" })}
                        />
                        <FontAwesomeIcon icon={faEye}
                            className='show_pass'
                            onClick={() => setPasswordVisibility(!passwordVisibility)}
                        />
                        <span className='border'></span>
                    </div>
                    <p className='error_message'>{errors.password?.message}</p>
                    <div className='input_field'>
                        <div className='checkbox_input'>
                            <input
                                id='checkbox_input'
                                type='checkbox'
                            />
                            <label htmlFor='checkbox_input'>Stay logged in</label>
                        </div>
                    </div>
                    <button
                        className='sign_in_btn'
                        type='submit'
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div >
    )
}

export default SignIn