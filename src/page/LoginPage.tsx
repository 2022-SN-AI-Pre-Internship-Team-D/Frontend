import 'tailwindcss/tailwind.css';

function LoginPage() {
    return (
      <div className='h-screen bg-[#0E1733] flex justify-center flex-col items-center'>
      
    <div>
      <h4 className='text-[#9CA6C5] text-5xl font-press-start text-center pt-20 pb-'>LOGIN</h4>
      <img src="" alt="" />
      </div>
       
      <div className='w-2/4 h-2/3 m-50 items-center flex-col flex justify-center center p-20 bg-grey rounded-lg'>
        <div className=' justify-center flex flex-col w-80' >
          <label className=' text-background flex flex-col' htmlFor='email'>이메일
          <input  className=' placeholder-[#9CA6C5]  border-4 border-[#677DC6] text-sm font-light drop-shadow-lg mb-3 px-3 py-2.5 rounded-2xl' id='email' placeholder='email address'/></label>
          <label className='text-background flex flex-col mt-5 pb-1' htmlFor='password'>비밀번호
          <input className='placeholder-[#9CA6C5] border-4 border-[#677DC6] text-sm font-light drop-shadow-lg mb-3 px-3 py-2.5 rounded-2xl' id='password' placeholder='password'/></label>
        </div>

  
        <div className= 'flex-row flex mt-8  content-center'>
          <button type='button' className=' rounded-xl border-none bg-[#677DC6] w-32 mr-4 drop-shadow-lg px-12 pr-4 py-2  text-white font-semibold  bg-button-500'>Login</button> 
          <button type='button' className='rounded-xl border-none bg-[#677DC6]  w-32 ml-4 drop-shadow-lg px-14 pr-4 py-2 text-white font-semibold  bg-button-500'>Sign In</button> 
        </div>
      </div>
      </div>
)
}
export default LoginPage;