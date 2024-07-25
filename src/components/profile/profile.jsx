import React, { useState } from 'react'
import StyleCss from './profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import addPostAction from '../../redux/store/actions'



const Profile = () => {
    const ava = 'https://steamuserimages-a.akamaihd.net/ugc/832451549106448214/0C15FCBE28082B0A2043D1DEDE0E3C8228F1C1EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    const newPostElement = React.createRef()

    const posts = [
        { id: 1, image: ava, text: 'Привет всем!!!!!!' },
        { id: 2, image: ava, text: 'Мой второй пост, ура' },
    ]

    const [addPost, newAddPost] = useState(posts)

    const asd = useSelector(state => state.posts) 
    const dispatch = useDispatch()

    const ViewPosts = (props) => {
        return (
            props.posts.map((post) => (
                <div key={post.id}>
                    <img className={StyleCss.postImage} src={post.image} alt="" />
                    {post.text}
                </div>
            ))
        )
    }

    const addNewPost = () => {
        const newPost = {
            id: addPost.length + 1,
            image: ava,
            text: newPostElement.current.value
        }

        newAddPost((prevPost) => [...prevPost, newPost])
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        console.log(text)
    }

    return (
        <div>
            <div className={StyleCss.profile}>
                <div>
                    <img className={StyleCss.avatar} src={ava} alt="" />
                </div>
                <div className={StyleCss.info}>
                    <h1> Артур Пирожков </h1>
                    <p className={StyleCss.city}> Город: Москва </p>
                    <p className={StyleCss.age}> Возраст: 25 </p>
                    <p className={StyleCss.description}> О себе: Пишу треки, занимаюсь танцами, люблю камеди клаб </p>
                </div>
            </div>
            <div>
                <textarea 
                    ref={newPostElement}
                    className='add-post' 
                    defaultValue='Добавить пост' 
                    onChange={onPostChange}></textarea>
                <div className={StyleCss.containButton}>
                    <button className={StyleCss.custom_button}
                        onClick={addNewPost}> Добавить пост </button>
                </div>
                <div>
                    <button>
                        Тест
                    </button>
                </div>
            </div>
            <div>
                <ViewPosts posts={addPost} />
            </div>
        </div>
    )
}

export default Profile