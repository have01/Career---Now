import React, { useState } from 'react'
import "../style/createpost.css"
import Modal from './Modal'
const CreatePost = () => {
    const [showModal, setShowModal] = useState(false); //toggle modal 
    return (
        <>
            <div className='create_post_container'>
                <p className='create_post_heding'>Create Post</p>
                <div className="create_post">
                    <p style={{ color: "white" }}>🗯</p>
                    <input type="text" className='create_post_input' placeholder='How are you feeling today?' />
                </div>
                <div className='create_post_btn'>
                    <button className='post_btn' onClick={() => setShowModal(true)}>Post</button>
                </div>

            </div>
            <div className='create_post_container'>
                <p className='create_post_heding'>Create Post</p>
                <div className="create_post">
                    <p style={{ color: "white" }}>🗯</p>
                    <p className='posts'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt consequuntur repellat tempora veritatis, odit, soluta culpa qui laboriosam reiciendis consequatur a illo beatae et quos. Magnam, ipsum. Nobis, culpa?</p>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>

    )
}

export default CreatePost