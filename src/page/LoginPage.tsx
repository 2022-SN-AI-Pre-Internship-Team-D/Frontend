function LoginPage() {
    return (
    <header >
    <div>
      <h4 className='text-2xl font-press-start text-center pt-20'>LOGIN</h4>
      <img></img>
      </div>
       
      <div className='w-200 h- items-center flex-col flex justify-center center p-20 bg-grey rounded-lg'>
        <div className='justify-center flex flex-col w-80' >
          <label className=' pb-1' htmlFor='email'>이메일</label>
          <input  className='border-4 border-[#CAD6FF] drop-shadow-lg mb-3 px-2 py-2 rounded-md' id='email' placeholder='email address'></input>
          <label className='mt-5 pb-1' htmlFor='password'>비밀번호</label>
          <input className=' border-4 border-[#CAD6FF] drop-shadow-lg mb-3 px-2 py-2 rounded-md' id='password' placeholder='password'></input>
        </div>
  
        <div className= ' content-center'>
          <button className='border-2 bg-button-500'>Login</button> 
          <button className='bg-button-500'>Sign In</button> 
        </div>
      </div>
</header>
)
}