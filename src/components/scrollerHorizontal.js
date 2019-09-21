import React, { Component } from 'react'
import styles from "./scrollerHorizontal.module.css"

let horizontalSectionWrapper = document.querySelector(".horizontalSectionWrapper");


window.onresize = resize

function resize(){
  document.querySelector(".horizontalScroller").style.height = document.querySelector(".horizontalSectionWrapper").offsetWidth;
}


class ScrollerHorizontal extends Component {
  componentDidMount() {
    document.querySelector(".horizontalSectionWrapper").style.width = (document.querySelector(".horizontalSectionWrapper").childElementCount) * window.innerWidth +"px";
    document.querySelector(".horizontalScroller").style.height  = (document.querySelector(".horizontalSectionWrapper").childElementCount - 1) * window.innerWidth + window.innerHeight +"px";
    console.log('OHAI', this.props);
    //horizontalSectionWrapper.css("background-color", "yellow");
  }

  render() {
    return (
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
  }
}

export default ScrollerHorizontal
