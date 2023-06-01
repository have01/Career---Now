import React from 'react'

const Signin = ({ handleChange }) => {
    return (
        <>
            <section >
                <div class="flex flex-col items-center justify-center px-6 py-1 mx-auto lg:py-0">
                    <div class="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div class="">
                            <p className='text-[#6B6C70] text-center  font-inter font-medium text-base' >Welcome back</p>
                            <p class="text-white text-center  font-inter font-medium text-base">
                                Login in to your account
                            </p>
                            <form class="" action="#">
                                <div className='mt-[22px]'>
                                    <label for="email" class="block mb-2 text-sm font-medium text-[#6B6C70] dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class=" bg-[#27292D] border  border-1.5 border-solid px-2 border-gray-700 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-[413px] h-[43px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 mt-2 text-sm font-medium text-[#6B6C70] dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" class=" w-[413px] h-[43px] px-2 border  border-1.5 border-solid  border-gray-700 text-white bg-[#27292D] sm:text-sm  block " required="" />
                                </div>

                                <button type="submit" class="w-[413px] h-[43px] mt-4 bg-[#4A96FF] rounded-sm text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login Now</button>
                                <p class="text-sm text-[#7F8084] mt-2">
                                    Don’t have an account yet? <span class="font-medium text-white hover:underline dark:text-primary-500" onClick={handleChange}>Register</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Signin