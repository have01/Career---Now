import React from 'react'

const posts = () => {
    return (
        <>
            <div className='create_post_container'>
                <div className='profile_info'>
                    <p></p>
                    <div className='profile_username'>
                        <p>Theresea Web</p>
                        <p>5 min ago</p>
                    </div>
                </div>
                <div className="create_post ">
                    <p style={{ color: "white", padding: "10px" }}>👋</p>
                    <p className='posts'> Lorem ipsupisicing elit. Velit suntur repellat tdit, soluta culpa qui laboriosam reiciendis consequatur a illo beatae et quos. Magnam, ipsum. Nobis, culpa?</p>
                </div>
            </div>
            <div className='create_post_container'>
                <div className='profile_info'>
                    <p></p>
                    <div className='profile_username'>
                        <p>Marvin Mckniey</p>
                        <p>5 min ago</p>
                    </div>
                </div>
                <div className="create_post ">
                    <p style={{ color: "white", padding: "10px" }}>😞</p>
                    <p className='posts'> Lorem ipsupisicing elit. Velit suntur repellat tdit, soluta culpa qui laboriosam reiciendis consequatur a illo beatae et quos. Magnam, ipsum. Nobis, culpa?</p>
                </div>
            </div>
        </>
    )
}

export default posts