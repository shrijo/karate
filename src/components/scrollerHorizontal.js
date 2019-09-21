import React, { useRef,  useEffect } from 'react'
import styles from "./scrollerHorizontal.module.css"



window.onresize = resize

function resize(){
  // document.querySelector(".horizontalScroller").style.height = this.wrapperRef.current.offsetWidth;
}




export default props => {
    const scrollerRef = useRef(null);
    const wrapperRef = useRef(null);
    
    let targetWidth;

    const scrollHandler = () => {
      const top = window.scrollY - wrapperRef.current.offsetTop;
      const left = -1 * top;
      const offsetTop = wrapperRef.current.offsetTop;
      // const offsetBottom = wrapperRef.current.getBoundingClientRect().left + window.innerWidth;
      
      if(window.scrollY >= offsetTop ) {
        console.log('OHAI', {
          left: -1 * wrapperRef.current.getBoundingClientRect().left + window.innerWidth,
          width: wrapperRef.current.getBoundingClientRect().width
        });
        
        wrapperRef.current.style.transform = `translate(${left}px, ${top}px)`
      }
    }

    useEffect(() => {
      targetWidth = (wrapperRef.current.getBoundingClientRect().width) - window.innerWidth + window.innerHeight + `px`;
      console.log(targetWidth)
      scrollerRef.current.style.height = targetWidth
      wrapperRef.current.style.transform = `translate(${100}, ${100})`
      window.addEventListener('scroll', scrollHandler)
      return  () => {
        window.removeEventListener('scroll', scrollHandler)
      }
    })

    return (
      <div className={styles.horizontalScroller} ref={scrollerRef}>
        <div className={styles.horizontalSectionWrapper} ref={wrapperRef}>
          { props.children }
        </div>
      </div>
    )
}

