import React from 'react'
import styles from "./scrollerHorizontal.module.css"

//let posHorizontalScroller;

/*function scrollingHorizontalScroller(){
  alert("posHorizontalScroller");
};*/

function scrollingHorizontalScroller() {
  //console.log(window.scrollY - posHorizontalScroller);
};

export default () => (

<div className={styles.horizontalScroller} onWheel={scrollingHorizontalScroller}>
  <div className={styles.horizontalSectionWrapper}>
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
