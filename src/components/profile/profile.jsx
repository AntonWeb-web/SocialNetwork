import React, { useState } from 'react'
import StyleCss from './profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPostProfileAction } from '../../redux/store/addPostProfileAction'



const Profile = () => {
    const ava = 'https://steamuserimages-a.akamaihd.net/ugc/832451549106448214/0C15FCBE28082B0A2043D1DEDE0E3C8228F1C1EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    const newPostElement = React.createRef()
    const dispatch = useDispatch();
    const statePosts = useSelector(state => state.rootReducer.posts.posts)

    const addPostProfile = () => {
        const newPost = {
            id: Date.now(),
            image: ava,
            text: newPostElement.current.value
        }

        dispatch(addPostProfileAction(newPost))
    }

    const ViewPosts = (props) => {
        return (
            <div>
                {props.posts.map((post) =>
                        <div key={post.id}>
                            <img className={StyleCss.postImage} src={post.image} alt="" />
                            {post.text}
                        </div>
                    )}
            </div>
        )
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
                        //onClick={addNewPost}> Добавить пост </button>
                        onClick={addPostProfile}> Добавить пост </button>
                </div>
                <div>
                    <button>
                        Тест
                    </button>
                </div>
            </div>
            <div>
                <ViewPosts posts={statePosts}/>
            </div>
        </div>
    )
}

export default Profile


// {posts.map((post) =>
//     <div key={post.id}>
//         <img className={StyleCss.postImage} src={post.image} alt="" />
//         {post.text}
//     </div>
// )}