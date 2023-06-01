import React from 'react'
import Signin from '../components/Signin'

const Login = () => {
    return (
        <div className='bg-[#131319] w-[100vw] h-screen flex items-center justify-center'>
            <section >
                <div class="flex flex-col items-center justify-center px-6 py-1 mx-auto lg:py-0 w-[463px] h-[420px] bg-[#27292D]">
                    <div class="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div class="">
                            <p className='text-[#6B6C70] text-center  font-inter font-medium text-base' >Welcome back</p>
                            <p class="text-white text-center  font-inter font-medium text-base">
                                Login in to your account
                            </p>
                            <form class="" action="#">
                                <div className='mt-[22px]'>
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#C5C7CA] dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class=" bg-[#27292D] border  border-1.5 border-solid px-2 border-gray-700 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-[413px] h-[43px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required="" />
                                </div>
                                <div className='mt-3'>
                                    <label for="password" class="block mb-2 text-sm font-medium text-[#C5C7CA] dark:text-white">Password</label>
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            aria-label="enter Password" placeholder="Enter your password" className='bg-[#27292D] border  border-1.5 border-solid px-2 border-gray-700 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-[413px] h-[43px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                        <div className="absolute right-0 mt-2 mr-3 cursor-pointer">

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="white"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>



                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="w-[413px] h-[43px] bg-[#4A96FF] rounded-sm text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 mt-5 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login Now</button>
                                <p class="text-sm text-[#7F8084] mt-2">
                                    Don’t have an account yet? <span class="font-medium text-white hover:underline dark:text-primary-500" >Register</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div>

    )
}

export default Login