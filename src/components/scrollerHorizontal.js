import React from 'react'
import styles from "./scrollerHorizontal.module.css"

export default () => (

<div className="horizontalScroller">
  <div className="horizontalSectionWrapper">
    <div className={styles.horizontalSection}>
      <div className={styles.card}>
        <h2>test</h2>
      </div>
    </div>
    <div className={styles.horizontalSection}>
      <div className={styles.card}>
        <h2>test</h2>
      </div>
    </div>
    <div className={styles.horizontalSection}>
      <div className={styles.card}>
        <h2>test</h2>
      </div>
    </div>
  </div>
</div>
)
