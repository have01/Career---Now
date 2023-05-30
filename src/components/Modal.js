import React, { memo, useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'
const Modal = ({ setShowModal, showModal }) => {
    const [form, setform] = useState(true)
    const handleChange = () => {
        setform(!form)
    }
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   bg-opacity-50"
                    >
                        <div className="relative w-auto my-1 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className={` border-0 rounded-lg shadow-lg w-[90vw] sm:w-[463px]  ${form ? 'h-[500px]' : 'h-[420px]'} relative flex flex-col  bg-[#27292D] outline-none focus:outline-none `}>
                                {/*header*/}
                                <div className="flex items-start justify-between p-1 rounded-t">
                                    <button
                                        className="rounded-full flex justify-center items-center ml-auto  border-0 text-white bg-[#131319] h-[32px] w-[32px]  float-right  leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowModal(false)

                                        }}
                                    >
                                        <span className="text-white text-xl block">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex flex-col items-center justify-center  ">
                                    {form ? <Signup handleChange={handleChange} /> : <Signin handleChange={handleChange} />}
                                </div>

                            </div>
                        </div>
                    </div>

                </>
            ) : null}
        </>
    )
}

export default memo(Modal)