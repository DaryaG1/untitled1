import React from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import sb from '../h4/common/c1-SuperInputText/SuperInputText.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: any) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    return (
        <div className={s.greeting}>
            <div>
                <SuperInputText value={name} onChange={setNameCallback} error={error}></SuperInputText>
                <span>{error}</span>
                <SuperButton onClick={addUser}>Add</SuperButton>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
