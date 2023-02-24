import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    console.log()
    const json = await response.json();
    console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    }
    else {
      alert("invalid credencitals")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" h-full mt-24 flex flex-col">
          <div className="container sm:max-w-md  mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-violet-500 px-6 py-8 rounded-2xl  shadow-xl  w-full">
              <h1 className="mb-8 md:text-3xl text-center text-white">Login to your account</h1>

              <input
                value={credentials.email}
                onChange={onChange}
                type="text"
                className="block border  w-full p-3 rounded mb-10"
                name="email"
                placeholder="Enter your email" />

              <input
                value={credentials.password}
                onChange={onChange}
                type="password"
                className="block border  w-full p-3 rounded mb-10"
                name="password"
                placeholder="Enter your password" />


              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-violet-800 text-white my-1 md:text-xl"
              >Login</button>
            </div>

            <div className="text-grey-dark mt-6">
              Don't have an account yet?
              <Link className="no-underline border-b border-blue mx-2 text-violet-900" to="/signup">
                SignUp
              </Link>.
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
