import React from "react"

import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Text from "../components/Text"
import WorkedWith from "../components/WorkedWith"
import Footer from "../components/Footer"
import Card  from "../components/Card"
import Scroller  from "../components/Scroller"

import styles from "./index.module.css"


// function scrollin(){

//   let posHorizontalScroller;
//   let posHorizontalSectionWrapper;

//   posHorizontalScroller = document.querySelector(".horizontalScroller").offsetTop
//   posHorizontalSectionWrapper = document.querySelector(".horizontalSectionWrapper").offsetTop

//   if (posHorizontalSectionWrapper >= posHorizontalScroller) {
//     //alert("now")
//     console.log(posHorizontalSectionWrapper - posHorizontalScroller);
//     document.querySelector('.horizontalSectionWrapper').scrollTo((posHorizontalSectionWrapper - posHorizontalScroller), 0);
//   }
//   else{
//     document.querySelector('.horizontalSectionWrapper').scrollTo(0, 0);
//   }
// }


export default () => (
  <div>
    <Navigation />
    <Header />
    <Scroller>
      <Card>
        <img src="https://images-na.ssl-images-amazon.com/images/I/714kuatiVFL._SL1000_.jpg" />
      </Card>
      <Card>
        <img src="https://i.ytimg.com/vi/ZArOxKkFGII/maxresdefault.jpg" />
      </Card>
      <Card>
        <img src="https://i.pinimg.com/originals/82/16/97/82169723f888302a9d1d4156359567f0.jpg" />
      </Card>
      <Card>
        <img src="https://images.askmen.com/720x540/entertainment/better_look/movie-fathers/9-mr-miyagi-the-karate-kid-1465834048.jpg" />
      </Card>
      <Card>
        <img src="http://content.artofmanliness.com/uploads//2012/02/chucknorris.jpg" />
      </Card>
    </Scroller>
    <WorkedWith />
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
