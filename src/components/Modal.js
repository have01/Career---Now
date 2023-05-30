import React, { memo } from 'react'

const Modal = ({ setShowModal, showModal }) => {

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   bg-opacity-50"
                    >
                        <div className="relative w-auto my-1 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg w-[90vw] sm:w-[310px] h-[200px] relative flex flex-col  bg-white outline-none focus:outline-none  ">
                                {/*header*/}
                                <div className="flex items-start justify-between p-1 rounded-t">
                                    <button
                                        className="p-1 ml-auto  border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setShowModal(false)

                                        }}
                                    >
                                        <span className=" text-black  h-6 w-6 text-xl block">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex flex-col items-center justify-center  ">


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