import { useState } from 'react'
import StyleCss from './profilePosts.module.css'

const ProfilePosts = (props) => {
    const [count, setCount] = useState(1)

    return (
        <div>
            {props.posts.map((post) =>
                <div className={StyleCss.post} key={post.id}>
                    <div className={StyleCss.postHeader}>
                        <img className={StyleCss.avatar} src={post.ava} alt='' />
                        <div className={StyleCss.postInfo}>
                            <div className={StyleCss.username}> {post.username} </div>
                            <div className={StyleCss.date}> {post.date}</div>
                        </div>
                    </div>
                    <div className={StyleCss.postContent}>
                        <p> {post.text} </p>
                    </div>
                    <div className={StyleCss.postActions}>
                        <button className={StyleCss.buttonLike} onClick={() => setCount(count + 1)}> ❤️ {count} </button>
                        <input type="text" placeholder='Поделитесь своим мнением в комментариях...' className={StyleCss.commentInput} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfilePosts