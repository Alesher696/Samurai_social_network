import React, {useEffect} from "react";
import h from './Header.module.css'
import burger from './icons/mozy (1).png'
import burgerActive from './icons/share (1).png'

export function Header() {

    const [activeButton, setActiveButton] = React.useState(false)
    const [timerID, setTimerId] = React.useState<any>(null)
    const [timer, setTimer] = React.useState<Date>(new Date())

    const onClickHandler = () => {
        setActiveButton(state => !state)
    }


    useEffect(() => {
        console.log('useEffect')
            setTimerId(setInterval(() => {
                setTimer(new Date())
            }, 1000))

            if (timerID) {
                return () => clearInterval(timerID)
            }
        }, []
    )


    const PresentTime = `${timer.getHours()} :
    ${(timer.getMinutes()) > 9 ? timer.getMinutes() : `0${timer.getMinutes()}`} :
    ${(timer.getSeconds()) > 9 ? timer.getSeconds() : `0${timer.getSeconds()}`}`

    return (

        <div className={h.Header}>
            {activeButton ? <div onClick={onClickHandler} >
                <img src={burgerActive} className={h.btn}/>
            </div> : <div onClick={onClickHandler}>
                <img src={burger} className={h.btn}/>
            </div>
            }
            {PresentTime}
        </div>

    )
}














