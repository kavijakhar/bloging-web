import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email,
        password: credentials.password,
        name: credentials.name,
      cpassword: credentials.cpassword})

    });
    const json =  await response.json();
      console.log(json)
    
    if ( json.success ) {
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
    <form onSubmit={handleSubmit}>
      <div className=" h-full m-11 flex flex-col">
        <div className="container sm:max-w-md w-full  mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-violet-500 px-6 py-8 rounded-2xl shadow-xl   w-full">
            <h1 className="mb-8 md:text-3xl text-center text-white">Create your account</h1>
            <input
              onChange={onChange}
              type="name"
              className="block border w-full p-3 rounded mb-4"
              name="name"
              placeholder="Enter your name" />  

            <input
              onChange={onChange}
              type="email"  
              className="block border w-full p-3 rounded mb-4"
              name="email"
              placeholder="Enter your email" />

            <input
              onChange={onChange}
              type="password"
              className="block border w-full p-3 rounded mb-4"
              name="password"
              placeholder="Enter your Password" />
            <input
              onChange={onChange}
              type="password"
              className="block border w-full p-3 rounded mb-4"
              name="cpassword"
              placeholder="Confirm Password" />

            <button
              type="submit"
              className="w-full md:text-xl text-center py-3 rounded bg-violet-800 text-white  my-1"
            >Create Account</button>

            <div className="text-center text-sm  mt-4">
              By signing up, you agree to the
              <Link className="no-underline  border-b mx-1 text-black" href="#">
                Terms of Service
              </Link> and
              <Link className="no-underline border-b  mx-1 text-black" href="#">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link className="no-underline border-b border-blue mx-2 text-violet-900" to="/login">
              Log in
            </Link>.
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignUp
