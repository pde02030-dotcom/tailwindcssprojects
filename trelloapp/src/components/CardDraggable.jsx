import React from 'react'
import {Draggable} from '@hello-pangea/dnd'

export const CardDraggable = ({ draggableId, index, children }) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            // 1. Snapshot을 이용해 드래그 중일 때의 스타일을 제어할 수 있습니다.
            style={{
              ...provided.draggableProps.style,
              cursor: 'grab', // 마우스 커서를 잡기 모양으로 변경
              opacity: snapshot.isDragging ? 0.8 : 1 // 드래그 중일 때 살짝 투명하게
            }}
          >
            {children}
          </div>
        )
      }}
    </Draggable>
  )
}