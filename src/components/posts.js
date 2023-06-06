import React, { useState } from 'react'
import Dp1 from "../assests/dp1.png"
import Dp2 from "../assests/dp2.png"
const Posts = () => {
    const [posts, setPosts] = useState([{
        name: "Theresea Web",
        time: "5 min ago",
        emoji: "👋",
        message: "Lorem ipsupisicing elit. Velit suntur repellat tdit, soluta culpa qui laboriosam reiciendis consequatur a illo beatae et quos. Magnam, ipsum. Nobis, culpa?",
        dp: Dp1
    }, {
        name: "Marvin Mckney",
        time: "5 min ago",
        emoji: "😞",
        message: "Lorem ipsupisicing elit. Velit suntur repellat tdit, soluta culpa qui laboriosam reiciendis consequatur a illo beatae et quos. Magnam, ipsum. Nobis, culpa?",
        dp: Dp2
    }])
    return (
        <>
            {posts.map((val, index) => {
                return (
                    <div className='create_post_container' key={index}>
                        <div className='profile_info'>
                            <img src={val.dp} alt="" srcset="" />
                            <div className='profile_username'>
                                <p>{val.name}</p>
                                <p>{val.time}</p>
                            </div>
                        </div>
                        <div className="create_post ">
                            <p className="post_status_emoji">{val.emoji}</p>
                            <p className='posts'> Lorem ipsupisicing elit. Velit suntur repellat tdit, soluta culpa qui laboriosam reiciendis consequatur a illo beatae et quos. Magnam, ipsum. Nobis, culpa?</p>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Posts