import React, { Fragment, useState } from 'react'



function SignIn() {
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const signInUser = (e: any) => {
        e.preventDefault();
        
        console.log({email,password});
        
    /// implement login
  }

    return (
        <Fragment>
          
            <div className="container text-white signInForm">
                <form onSubmit={signInUser}>
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={ (e) => setEmail(e.target.value)} type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                </div>
                  
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="InputPassword1" />
                </div>
                          
                <button type="submit" className="btn btn-primary">Sign In</button>

            </form>

            <p>Join our awesome chat</p>
            </div>
  

        </Fragment>)

}



export default SignIn