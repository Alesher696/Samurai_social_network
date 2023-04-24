import React, {useEffect, useMemo} from "react";
import h from './Header.module.css'
import burger from './icons/mozy (1).png'
import burgerActive from './icons/share (1).png'
import {NavLink} from "react-router-dom";


type HeaderPropsType={
    isAuth: boolean
    login: string
    setActiveButton:(activeButton:boolean)=>void
    activeButton:boolean
}
export const Header = React.memo((props:HeaderPropsType)=> {

    const [timerID, setTimerId] = React.useState<any>(null)
    const [timer, setTimer] = React.useState<Date>(new Date())

    const onClickHandler = () => {
        props.setActiveButton(!props.activeButton)
    }


    useEffect(() => {
            setTimerId(setInterval(() => {
                setTimer(new Date())
            }, 1000))

            if (timerID) {
                return () => clearInterval(timerID)
            }
        }, []
    )

    const PresentTime = (`${timer.getHours()} :
    ${(timer.getMinutes()) > 9 ? timer.getMinutes() : `0${timer.getMinutes()}`} :
    ${(timer.getSeconds()) > 9 ? timer.getSeconds() : `0${timer.getSeconds()}`}`)

    return (

        <div className={h.Header}>
            {props.activeButton ? <div onClick={onClickHandler} >
                <img src={burgerActive} className={h.btn}/>
            </div> : <div onClick={onClickHandler}>
                <img src={burger} className={h.btn}/>
            </div>
            }
            {PresentTime}
            <div className={h.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
                </div>
        </div>

    )
})














