import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdEyeOff } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showErr, setShowErr] = useState(false)
    const [inputValues, setInputValues] = useState({
        fullName: '',
        email: '',
        gender: '',
        password: '',
        confirm_password: '',
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('values', inputValues);

        setShowErr(true)
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ maxWidth: '450px', width: '100%' }}>
                <h2 className="text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="username" className="form-label">Full Name</label>
                        <input type="text" className={`form-control ${(!inputValues.fullName && showErr) && "is-invalid"}`} name="fullName" id="fullName" value={inputValues.fullName} placeholder="Enter your FullName" onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Email</label>
                        <input type="email" className={`form-control ${(!inputValues.email && showErr) && "is-invalid"}`} name="email" id="email" value={inputValues.email} placeholder="Enter your Email" onChange={handleChange} />
                    </div>
                    <label className="form-label">Gender</label>
                    <div className='d-flex align-items-center mb-2'>
                        <div className="custom-control custom-radio custom-control-inline me-5">
                            <input type="radio" id="male" name="gender" className="custom-control-input me-1" value="male" onChange={handleChange} />
                            <label className="custom-control-label" htmlFor="male">Male</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="female" name="gender" className="custom-control-input me-1" value="female" onChange={handleChange} />
                            <label className="custom-control-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input type={`${showPassword ? "text" : "password"}`} className={`form-control ${(!inputValues.password && showErr) && "is-invalid"}`} name="password" id="password" value={inputValues.password} autoComplete='off' placeholder="Enter your password" onChange={handleChange} />
                            <div className="input-group-prepend" onClick={handleShowPassword}>
                                <span className="input-group-text h-100" id="validationTooltipUsernamePrepend"> {showPassword ? <IoMdEyeOff /> : <IoEye />}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <div className="input-group">
                            <input type={`${showPassword ? "text" : "password"}`} className={`form-control ${(!inputValues.confirm_password && showErr) && "is-invalid"}`} name="confirm_password" id="confirm_password" value={inputValues.confirm_password} autoComplete='off' placeholder="Enter your password" onChange={handleChange} />
                            <div className="input-group-prepend" onClick={handleShowPassword}>
                                <span className="input-group-text h-100" id="validationTooltipUsernamePrepend"> {showPassword ? <IoMdEyeOff /> : <IoEye />}
                                </span>
                            </div>
                        </div>
                    </div>
                    {
                        (inputValues.password !== inputValues.confirm_password) &&
                        <div className="text-danger">
                            Password not match
                        </div>
                    }

                    <p>
                        already have an account? <Link href="/">Login</Link>
                    </p>
                    <button type="submit" className="btn btn-primary w-100">Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
