import React, { Component } from 'react'

import styles from "./WorkedWith.module.css"


export default () => (
  <div className={styles.workedWithSection}>
    <ul className={styles.filterBar}>
      <li>All</li>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
      <li>Last Filter</li>
    </ul>
  </div>
)
