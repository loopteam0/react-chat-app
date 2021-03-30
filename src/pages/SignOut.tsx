
import React from 'react'


function SignOut() {
    /// implement auth
const auth:any = {currentUser:null} ;
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default SignOut
