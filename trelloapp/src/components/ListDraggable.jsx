import React, {useRef, useEffect} from 'react'
import {useDrag, useDrop} from 'react-dnd'

export const ListDraggable = ({
  id,
  index,
  onMove,
  style,
  className,
  ...props
}) => {
  const ref = useRef(null)

  const [{handlerId}, drop] = useDrop({
    accept: 'list',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item) {
      if (!ref.current) return
      
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      onMove(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  const [{isDragging}, drag] = useDrag({
    type: 'list',
    item: () => ({id, index}),
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0 : 1

  // [수정 포인트] 렌더링 중 실행 대신, 
  // DOM이 생성된 후 drag와 drop 기능을 연결합니다.
  useEffect(() => {
    if (ref.current) {
      drag(drop(ref.current))
    }
  }, [drag, drop])

  return (
    <div
      ref={ref}
      {...props}
      className={[className, 'cursor-move'].join(' ')}
      style={{...style, opacity}}
      data-handler-id={handlerId}
    />
  )
}