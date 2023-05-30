import React from 'react'
import CreatePost from '../components/CreatePost'
import "../style/home.css"
const Home = () => {
    return (
        <>
            <div className='container'>
                <CreatePost />
            </div>
        </>
    )
}

export default Home