import React, { useRef, useEffect, useState } from "react"
import s from "./Scroller.module.css"

export default ({ children }) => {
  const wrapperRef = useRef(null)
  const innerRef = useRef(null)
  const scrollerRef = useRef(null)

  const [height, setHeight] = useState(0)

  const scrollListener = [
    "scroll",
    () => {
      const { top } = wrapperRef.current.getBoundingClientRect()
      if (top <= 0) {
        innerRef.current.scrollTo(-1 * top, 0)
      } else {
        innerRef.current.scrollTo(0, 0)
      }
    },
  ]

  const resizeListener = [
    "resize",
    () => {
      setHeight(
        scrollerRef.current.getBoundingClientRect().width -
          wrapperRef.current.getBoundingClientRect().width +
          window.innerHeight
      )
    },
  ]

  useEffect(() => {
    setHeight(
      scrollerRef.current.getBoundingClientRect().width -
        wrapperRef.current.getBoundingClientRect().width +
        window.innerHeight
    )
    wrapperRef.current.style.height = `${height}px`
    window.addEventListener(...scrollListener)
    return () => {
      window.removeEventListener(...scrollListener)
    }
  }, [])

  useEffect(() => {
    window.addEventListener(...resizeListener)
    wrapperRef.current.style.height = `${height}px`
    return () => {
      window.removeEventListener(...resizeListener)
    }
  }, [height])

  return (
    <section className={s.wrapper} ref={wrapperRef}>
      <div className={s.inner} ref={innerRef}>
        <div className={s.scroller} ref={scrollerRef}>
          {children}
        </div>
      </div>
    </section>
  )
}
