

const ava = 'https://steamuserimages-a.akamaihd.net/ugc/832451549106448214/0C15FCBE28082B0A2043D1DEDE0E3C8228F1C1EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

const initialState = {
    posts: [
        { id: 1, image: ava, text: 'Привет всем!!!!!!' },
        { id: 2, image: ava, text: 'Мой второй пост, ура' },
    ]
}

const reducerPost = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.push({ id: 5, image: ava, text: 'Я новый СТЕЙТ' })
            }
        default: 
            return state
    }
}

export default reducerPost