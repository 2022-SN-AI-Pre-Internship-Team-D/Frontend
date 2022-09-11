import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';

function SigninPage() {
  return (
    <div className="h-screen" style={{ backgroundColor: ColorSystem.MainColor.Primary }}>
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center mt-3 mb-20 text-white text-4xl" > 
                회원가입 
            </div>

            <div className="my-5">
                <div className="flex flex-row">             
                    <div className="flex justify-center basis-2/5 items-center mx-6 pb-28">
                        <label htmlFor="dropzone-file" className="cursor-pointer flex flex-col justify-center items-center w-72 h-72 
                        rounded-full border-4 border-[#677DC6] bg-white hover:bg-[#677DC6]">
                            <div>
                                <span className="flex justify-center text-5xl text-[#677DC6]">+</span>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>

                    <div className="basis-3/5 mx-6">
                        <div className="flex flex-col justify-end">
                            <div>
                                <label className='m-1.5 text-white' htmlFor='nickname'>                    
                                        <span className='ml-12 my-4 text-lg'>닉네임</span>
                                        <input className='border-4 border-[#677DC6] w-3/4 mx-5 my-1.5 px-2.5 py-2.5 rounded-2xl text-background' id='nickname'/>
                                </label>
                            </div>
                            <div>
                                <label className='m-1.5 text-white' htmlFor='email'>
                                    <span className='ml-12 my-4 text-lg'>이메일</span>
                                    <input className='border-4 border-[#677DC6] w-3/4 mx-5 my-1.5 px-2.5 py-2.5 rounded-2xl text-background' id='email'/>
                                </label>
                            </div>
                            <div>
                                <label className='m-1.5 text-white' htmlFor='password'>
                                    <span className='ml-9 my-4 text-lg'>비밀번호</span>
                                    <input className='border-4 border-[#677DC6] w-3/4 mx-5 my-1.5 px-2.5 py-2.5 rounded-2xl text-background' id='password'/>
                                </label>
                            </div>
                            <div>
                                <label className='m-1.5 text-white' htmlFor='passwordcheck'>
                                    <span className='ml-0.5 my-4 text-lg'>비밀번호 확인</span>
                                    <input className='border-4 border-[#677DC6] w-3/4 mx-5 my-1.5 px-2.5 py-2.5 rounded-2xl text-background' id='passwordcheck'/>
                                </label>
                            </div>
                            <div>
                                <label className='m-1.5 text-white' htmlFor='birthday'>
                                    <span className='ml-16 my-4 text-lg'>생일</span>
                                    <input className='border-4 border-[#677DC6] w-3/4 mx-5 my-1.5 px-2.5 py-2.5 rounded-2xl text-background' 
                                    type="date" id='birthday'/>
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end my-10">
                            <button type='button' className="mr-10">
                                <p className="text-white text-xl p-2">다음 &#62;</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
                       
        </div>

    </div>

  );
}
export default SigninPage;