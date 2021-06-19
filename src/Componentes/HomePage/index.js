import React from 'react'
import Card from '../Card/'

import './style.css'

export default function HomePage(){

    return(

        <div className='escalacao'>

                <Card nome='Bruno Henrique' imagem='assets/jogador.png' posicao='PONTA ESQUERDA'/>
                <Card nome='Gabriel Barbosa' imagem='assets/jogador.png' posicao='ATACANTE' />
                <Card nome='Everton Ribeiro' imagem='assets/jogador.png' posicao='PONTA DIREITA' />
                <Card nome='Arrascaeta' imagem='assets/jogador.png' posicao='MEIA ATACANTE' />
                <Card nome='Gerson' imagem='assets/jogador.png' posicao='SEGUNDO VOLANTE' />
                <Card nome='W.Arão' imagem='assets/jogador.png' posicao='PRIMEIRO VOLANTE' />
                <Card nome='Filipe L.' imagem='assets/jogador.png' posicao='LATERAL ESQUERDO' />
                <Card nome='Pablo Marí' imagem='assets/jogador.png' posicao='ZAGUEIRO' />
                <Card nome='Rodrigo Caio' imagem='assets/jogador.png' posicao='ZAGUEIRO' />
                <Card nome='Rafinha' imagem='assets/jogador.png' posicao='LATERAL DIREITO' />
                <Card nome='Diego Alves' imagem='assets/jogador.png' posicao='GOLEIRO' />

        </div>

    )

}