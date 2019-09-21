import React, { Component } from 'react'
import styles from "./Card.module.css"

export default (props) => (
    <div className={styles.wrapper}>
        <div className={styles.card}>
            <h2>{ props.children }</h2>
        </div>
    </div>
)