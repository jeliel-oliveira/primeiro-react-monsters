import React from 'react'
import './card-list.style.css';
import {Card} from '../card/card.component'
//O papel deste component é apenas mostrar
export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.monsters.map((monster) => (
                  <Card monster={monster} key={monster.id}/>
                ))
            }
        </div>
    )
}