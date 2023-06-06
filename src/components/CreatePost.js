import React, { useState } from 'react'
import "../style/createpost.css"
import Modal from './Modal'
import Posts from './posts'
import MessageEmoji from "../assests/message.png"
const CreatePost = () => {
    const [showModal, setShowModal] = useState(false); //toggle modal 

    return (
        <>
            <div className='welcome_container'>
                <h1>Hello Jane</h1>
                <p > How are you doing today? Would you like to share something with the
                    <br /> community 🤗</p>
            </div>
            <div className='create_post_container'>
                <p className='create_post_heding'>Create Post</p>
                <div className="create_post">
                    <div className='message_emoji' >
                        <img src={MessageEmoji} alt="" srcset="" />

                    </div>
                    <input type="text" className='create_post_input' placeholder='How are you feeling today?' />
                </div>
                <div className='create_post_btn'>
                    <button className='post_btn' onClick={() => setShowModal(true)}>Post</button>
                </div>
            </div>
            <Posts />
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>

    )
}

export default CreatePost