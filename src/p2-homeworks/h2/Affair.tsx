import React from 'react'
import {AffairType, deleteAffair} from "./HW2";
import {FilterType} from "./HW2";
import Affairs from "./Affairs";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            {props.affair.name} ----
            {props.affair.priority}
            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
