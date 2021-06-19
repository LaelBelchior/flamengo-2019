import React from 'react'
import './style.css'

export default function Card(props){

    return(

        <div className='card-container'>

            <p> {props.nome} </p>
            <img src={props.imagem} alt={props.nome}></img>
            <p> {props.posicao} </p>

        </div>

    )

}