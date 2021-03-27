import React from 'react'
import css from './HelpCard.module.css'

export const HelpCard = ({bg, title}) => {
    return <div style={{background: bg}}
    className={css.helpCard}>
        <h3>
            <ul><li>{title}</li></ul>
        </h3>
    </div>
}
export const HelpCardTwo = ({title,bg}) => {
    return <div style={{background: bg}} className={css.helpCardTwo}>
        <h3>
            <ul><li>{title}</li></ul>
        </h3>
    </div>
}
export const HelpCardTree = ({h3, title}) => {
    return <div className={css.helpCardThree}>
        <h3>{h3}</h3>
        <p>{title}</p>
    </div>
}
export const HelpCardFour = ({h2, title,title2}) => {
    return <div className={css.HelpCardFour}>
        <h2>{h2}</h2>
        <p>{title}</p>
        <a>{title2}</a>
    </div>
}