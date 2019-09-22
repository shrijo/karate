import React, { useRef, useEffect } from "react"
import s from "./Scroller.module.css"

export default ({ children }) => {
  const wrapperRef = useRef(null)
  const innerRef = useRef(null)
  const scrollerRef = useRef(null)
  const scrollListener = [
    "scroll",
    () => {
      const { top } = wrapperRef.current.getBoundingClientRect()
      if (top < 0) {
        innerRef.current.scrollTo(-1 * top, 0)
      }
    },
  ]

  useEffect(() => {
    wrapperRef.current.style.height =
      scrollerRef.current.getBoundingClientRect().width -
      wrapperRef.current.getBoundingClientRect().width +
      window.innerHeight +
      "px"
    window.addEventListener(...scrollListener)
    return () => {
      window.removeEventListener(...scrollListener)
    }
  }, [])

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
