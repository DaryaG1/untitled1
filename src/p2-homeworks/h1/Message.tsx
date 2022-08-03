import React from 'react'
import s from './Message.module.css'


type PropsType = {
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:PropsType) {

    return (
        <div>

            <div className={s.massage}>

                <img className={s.avatar} alt={'avatar'} src={props.avatar}/>

                <div className={s.angle}/>

                <div className={s.text}>
                    <p>{props.name} {s.name}</p>
                    <p>{props.message} {s.text1}</p>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}
export default Message
