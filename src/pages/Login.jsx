import React from 'react'

function Login() {
  return (
    <div className='login'>

      <div className='login-container'>
        <form action="">
          <label className='login-input'>
            <input type="text" placeholder='아이디'/>
          </label>
          <label className='login-input'>
            <input type="password" placeholder='비밀번호'/>
          </label>
          <button type="submit">로그인</button>
        </form>
      </div>

    </div>
  )
}

export default Login