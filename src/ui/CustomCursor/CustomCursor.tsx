import React, { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.scss'

const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement>(null)
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event

      const mouseX = clientX
      const mouseY = clientY
      if (mainCursor.current) {
        positionRef.current.mouseX = mouseX - mainCursor.current.clientWidth / 2
        positionRef.current.mouseY =
          mouseY - mainCursor.current.clientHeight / 2
      }
    })
  }, [])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
      }
    }
    followMouse()
  }, [])
  return (
    <>
      <div className={styles['customCursor']} ref={mainCursor}></div>
    </>
  )
}

export default CustomCursor
