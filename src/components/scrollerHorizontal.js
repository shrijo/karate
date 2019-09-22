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

      if(window.scrollY >= offsetTop && window.scrollY <= (offsetTop + scrollerRef.current.getBoundingClientRect().height - window.innerHeight)) {
        wrapperRef.current.style.transform = `translate(${left}px, ${top}px)`
      } else if (window.scrollY > (offsetTop + scrollerRef.current.getBoundingClientRect().height - window.innerHeight)) {
        wrapperRef.current.style.transform = `translate(${targetWidth-window.innerWidth}px, ${targetWidth-window.innerHeight}px)`
      } else if(window.scrollY < offsetTop && window.scrollY){
        wrapperRef.current.style.transform = `translate(0px, 0px)`
      }
    }

    const resizeHandler = () => {
      targetWidth = (wrapperRef.current.getBoundingClientRect().width) - window.innerWidth + window.innerHeight + `px`;
      scrollerRef.current.style.height = targetWidth
    }

    useEffect(() => {
      targetWidth = (wrapperRef.current.getBoundingClientRect().width) - window.innerWidth + window.innerHeight + `px`;
      scrollerRef.current.style.height = targetWidth
      wrapperRef.current.style.transform = `translate(${100}, ${100})`
      window.addEventListener('scroll', scrollHandler)
      window.addEventListener('resize', resizeHandler)
      return  () => {
        window.removeEventListener('scroll', scrollHandler)
        window.removeEventListener('resize', resizeHandler)
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
