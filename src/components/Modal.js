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
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  border-2 border-yellow-900  bg-opacity-50"
                    >
                        <div className="relative w-auto my-1 mx-auto max-w-3xl border-2 border-yellow-900 ">
                            {/*content*/}
                            <div className={`  rounded-lg shadow-lg w-[90vw] sm:w-[463px]  border-t-2 ${form ? 'h-[500px]' : 'h-[420px]'} relative flex flex-col  bg-[#27292D]  `} style={{
                                borderTop: "1px solid #C5C7CA", borderLeft: "1px solid #C5C7CA", borderBottom: "1px solid #C5C7CA", borderBottomWidth: "50%"
                            }}>
                                {/*header*/}
                                <div className="flex items-start justify-between p-1 rounded-t">
                                    <button
                                        className="rounded-full flex justify-center items-center ml-auto  mt-2 mr-3 border-0 text-white bg-[#131319] h-[24px] w-[24px]  float-right  leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowModal(false)

                                        }}
                                    >
                                        x

                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative  flex flex-col items-center justify-center  ">
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