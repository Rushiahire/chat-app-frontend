import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { loginAPI } from "@/services/api/auth-api";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";


const Login = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<any>(false)
  const [showErr, setShowErr] = useState<any>(false)
  const [inputValues, setInputValues] = useState<any>({})

  const handleShowPassword: any = () => {
    setShowPassword(!showPassword)
  }

  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const handleSubmit: any = async (e: any) => {
    e.preventDefault();
    setShowErr(true)
    let loginApi: any = await loginAPI(inputValues)
    console.log(loginApi)
    if (loginApi?.data?.status === "success") {

      setCookie("AuthToken", loginApi?.data?.token, {
        maxAge: 24 * 60 * 60,
      });
      localStorage.setItem("AuthToken", loginApi?.data?.token)

      toast.success("Login Successfully")
      router.push('/chat')
    } else {
      toast.error("Invalid Credentials")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ maxWidth: '450px', width: '100%' }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className={`form-control ${(!inputValues.username && showErr) && "is-invalid"}`} name="username" id="username" value={inputValues.username} placeholder="Enter your username" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input type={`${showPassword ? "text" : "password"}`} className={`form-control ${(!inputValues.password && showErr) && "is-invalid"}`} name="password" id="password" value={inputValues.password} placeholder="Enter your password" autoComplete='off' onChange={handleChange} required />
                <div className="input-group-prepend" onClick={handleShowPassword}>
                  <span className="input-group-text h-100" id="validationTooltipUsernamePrepend"> {showPassword ? <IoMdEyeOff /> : <IoEye />}
                  </span>
                </div>

              </div>
            </div>
            <p>
              Don&apos;t have an account? <Link href="/sign-up">Register
              </Link></p>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default Login;
