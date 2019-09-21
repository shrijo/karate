import React from "react"
import Header from "../components/header"
import ScrollerHorizontal from "../components/scrollerHorizontal"
import Text from "../components/text"
import Footer from "../components/footer"
import styles from "./index.module.css"




function scrollin(){

  let posHorizontalScroller;
  let posHorizontalSectionWrapper;

  posHorizontalScroller = document.querySelector(".horizontalScroller").offsetTop
  posHorizontalSectionWrapper = document.querySelector(".horizontalSectionWrapper").offsetTop

  if (posHorizontalSectionWrapper >= posHorizontalScroller) {
    //alert("now")
    console.log(posHorizontalSectionWrapper - posHorizontalScroller);
    document.querySelector('.horizontalSectionWrapper').scrollTo((posHorizontalSectionWrapper - posHorizontalScroller), 0);
  }
  else{
    document.querySelector('.horizontalSectionWrapper').scrollTo(0, 0);
  }
}


export default () => (
  <div className={styles.wrapper} onScroll={scrollin}>
    <Header />
    <ScrollerHorizontal/>
    <Text />
    <Footer />
  </div>
)

/*
let posHorizontalScroller;
let posHorizontalSectionWrapper;


function window.(
  alert("test")
);

function scrollin(){
  posHorizontalScroller = document.querySelector(".horizontalScroller").offsetTop
  posHorizontalSectionWrapper = document.querySelector(".horizontalSectionWrapper").offsetTop

  if (posHorizontalSectionWrapper > posHorizontalScroller) {
    document.querySelector('.horizontalSectionWrapper').scrollTo((posHorizontalSectionWrapper - posHorizontalScroller), 0);
  }
  else{
    document.querySelector('.horizontalSectionWrapper').scrollTo(0, 0);
  }
}

export default () => (
  <div className={styles.wrapper} onScroll={scrollin}>
    <Header />
    <ScrollerHorizontal />
    <Text />
    <Footer />
  </div>
)*/
