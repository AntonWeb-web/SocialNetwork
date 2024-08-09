import React, { useState, useEffect } from 'react'
import StyleCss from './profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPostProfileAction } from '../../redux/store/addPostProfileAction'
import { fetchPosts } from '../../redux/asyncAction/profilePosts'
import { fetchProfileData } from '../../redux/asyncAction/profileData'
import { v4 as uuidv4 } from 'uuid'
import ProfilePosts from './profilePosts'
import { ProfileData } from './profileData'

const Profile = () => {
    const newPostElement = React.createRef()
    const dispatch = useDispatch();
    const stateProfileData = useSelector(state => state.rootReducer.profile.profile)
    const statePosts = useSelector(state => state.rootReducer.posts.posts)
    const currentDate = new Date(Date.now())
    const formattedDate = currentDate.toLocaleDateString()
    const formattedTime = currentDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: undefined })

    useEffect(() => {
        if (stateProfileData.length === 0) {
            dispatch(fetchProfileData())
        }
    }, [dispatch])

    useEffect(() => {
        if (statePosts.length === 0) {
            dispatch(fetchPosts())
        }
    }, [dispatch])

    const addPostProfile = () => {
        const newPost = {
            id: uuidv4(),
            ava: 'https://steamuserimages-a.akamaihd.net/ugc/832451549106448214/0C15FCBE28082B0A2043D1DEDE0E3C8228F1C1EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            username: 'Mops',
            date: formattedDate + ' в ' + formattedTime,
            text: newPostElement.current.value
        }

        dispatch(addPostProfileAction(newPost))
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
    }

    return (
        <div>
            <ProfileData data={stateProfileData} />
            <div className={StyleCss.createPost}>
                <textarea
                    ref={newPostElement}
                    className={StyleCss.textarea}
                    defaultValue='Расскажите, как прошёл ваш день...'
                    onChange={onPostChange}></textarea>
                <button className={StyleCss.customButton}
                    onClick={addPostProfile}> Опубликовать </button>
            </div>
            <div>
                <ProfilePosts posts={statePosts} />
            </div>
        </div>
    )
}

export default Profile