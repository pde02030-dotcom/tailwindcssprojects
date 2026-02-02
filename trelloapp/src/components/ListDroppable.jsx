import React, {useRef, useEffect} from 'react'
import {useDrop} from 'react-dnd'

export const ListDroppable = ({...props}) => {
  const divRef = useRef(null)

  // drop 연결을 위한 훅 설정
  const [, drop] = useDrop({
    accept: 'list'
  })

  // [수정 포인트] 렌더링 도중 ref를 함수에 전달하지 않고,
  // 컴포넌트가 마운트된 후에 DOM 요소와 drop 기능을 연결합니다.
  useEffect(() => {
    if (divRef.current) {
      drop(divRef)
    }
  }, [drop])

  return <div ref={divRef} {...props} />
}