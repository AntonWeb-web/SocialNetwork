import StyleCss from './profile.module.css'

const image = 'https://steamuserimages-a.akamaihd.net/ugc/832451549106448214/0C15FCBE28082B0A2043D1DEDE0E3C8228F1C1EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

export const ProfileData = (props) => {
    return (
        <div className={StyleCss.profile}>
            <img className={StyleCss.avatar} src={image} alt="" />
            <div className={StyleCss.info}>
                <h1> {props.data.surname} {props.data.username} </h1>
                <p className={StyleCss.description}> О себе: {props.data.description} </p>
                <p className={StyleCss.city}> Город: {props.data.city} </p>
                <p className={StyleCss.age}> Возраст: {props.data.age} </p>
            </div>
        </div>
    )
}