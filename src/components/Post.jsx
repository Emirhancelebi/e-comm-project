import React from 'react'
import post from "../assets/image/post.png"

function Post({ tags, title, descrip, date, comment }) {
    return (
        <div>
            <img src={post} alt="post" />
            <section>
                <p>{tags}</p>
                <h4>{title} </h4>
                <p>{descrip} </p>
                <dir>
                    <p>{date} </p>
                    <p>{comment} </p>
                </dir>
                <button>Learn More</button>
            </section>
        </div>
    )
}

export default Post