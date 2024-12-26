import React, { useEffect, useState } from 'react'

export default function Login_Signup(props) {

  const [isLogin, setIsLogin] = useState(true);
  
  useEffect(() => {
    document.title = isLogin ? 'Login' : 'Sign Up';
  }, [isLogin]);
  
  return (
    <div className="container">
      <div className="title">
        {isLogin ? <h1>Login</h1> : <h1>Sign up</h1>}
      </div>

      <div className="btn">
        <button className={isLogin ? "active" : "inactive"} onClick={() => setIsLogin(true)}>Login</button>
        <button className={!isLogin ? "active" : "inactive"} onClick={() => setIsLogin(false)}>Signup</button>
      </div>

      <div className="inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!isLogin && <input type="password" placeholder="Confirm password" />}
      </div>

      {isLogin && <div className="forgot-password"><a href="#">Forgot password?</a></div>}

      <div className="login">
        <button>Login</button>
      </div>

      <div className="signup">
        {isLogin ? <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Signup</a></p> : <p>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a></p>}
      </div>
    </div>
  )
}
