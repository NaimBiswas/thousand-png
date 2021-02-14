import React from 'react'
import createHistroy, { useHistory } from 'react-router-dom'

const Login = ({ setUser }) => {
   const histroy = useHistory()
   const submit = (e) => {
      e.preventDefault();
      setUser('Nam Biswas')
      histroy.push('/')

   }
   return (
      <>
         <div className="col-md-6 m-auto pt-5  ">
            <form>
               <div className="form-group">
                  <label className='float-left' htmlFor="email">Email address</label>
                  <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />

               </div>
               <div className="form-group">
                  <label className='float-left' htmlFor="password">Password</label>
                  <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
               </div>

               <button onClick={submit} type="submit" className="btn btn-info float-right">
                  Login
             </button>
            </form>
         </div>
      </>
   )
}

export default Login
