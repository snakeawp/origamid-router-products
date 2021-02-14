import React from 'react'
import styles from './contato.module.css'
import foto from '../../img/contato.jpg'
import Head from '../Head/Head'

const Contato = () => {
    return (
        <section className={`${styles.contato} + animeLeft`}>
            <Head title="Ranek | Contato" desctiption="Entre em contato" />
            <img src={foto} alt="Máquina de escrever" />
            <div>
                <h1>Entre em contato</h1>
                <ul className={styles.dados}>
                    <li>claudio-jr@live.com</li>
                    <li>(11)98405-6821</li>
                    <li>Av Casper Líbero, 623</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
