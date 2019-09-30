import React from 'react'

import styles from "./WorkedWith.module.css"


export default () => (

  <div className={styles.workedWithSection}>

    <div className={styles.filterBar}>
      <button>All</button>
      <button>First</button>
      <button>Second</button>
      <button>Third</button>
      <button>Last Filter</button>
    </div>

    <ul className={styles.references}>
      <li class="one">Reference</li>
      <li class="four">determiners</li>
      <li class="one">Language</li>
      <li class="three" className={styles.inactive}>randomizer</li>
      <li class="five">BKW</li>
      <li class="one">Mirko Leuenberger</li>
      <li class="two">Reference</li>
      <li class="two">Reference</li>
      <li class="four">Supposedly</li>
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
