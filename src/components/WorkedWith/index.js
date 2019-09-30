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

    <ul className={styles.references}>
      <li class="one">Reference</li>
      <li class="four">Reference</li>
      <li class="one">Reference</li>
      <li class="three" className={styles.inactive}>Reference</li>
      <li class="five">Reference</li>
      <li class="one">Reference</li>
      <li class="two">Reference</li>
      <li class="two">Reference</li>
      <li class="four">Reference</li>
      <li class="three">Reference</li>
      <li class="four">Reference</li>
      <li class="one">Reference</li>
      <li class="three">Reference</li>
      <li class="two">Reference</li>
      <li class="three">Reference</li>
      <li class="one">Reference</li>
      <li class="four">Reference</li>
      <li class="three">Reference</li>
      <li class="four">Reference</li>
    </ul>
    
  </div>
)
