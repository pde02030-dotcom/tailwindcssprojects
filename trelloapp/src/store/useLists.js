import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as LO from '../store/listidOrders'
import * as L from '../store/listEntities'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardids' 
import * as U from '../utils'

/**
 * 보드 전체의 리스트와 드래그 앤 드롭 로직을 관리하는 훅
 */
export const useLists = () => {
  const dispatch = useDispatch()

  // 1. 데이터 조립 (리스트 엔티티 + 순서)
  const lists = useSelector(({listidOrders, listEntities}) =>
    listidOrders.map(uuid => listEntities[uuid])
  )
  
  const listidCardids = useSelector(({listidCardids}) => listidCardids)
  const listidOrders = useSelector(({listidOrders}) => listidOrders)

  // 2. 리스트 생성: 순서, 엔티티, 관계(빈 배열)를 동시에 생성
  const onCreateList = useCallback(
    (uuid, title) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
      dispatch(LC.setListidCardids({listid: uuid, cardids: []}))
    },
    [dispatch]
  )

  // 3. 리스트 삭제: 하위 카드들까지 모두 찾아 지우는 Cascading Delete 구현
  const onRemoveList = useCallback(
    (listid) => () => {
      // 리스트에 속한 모든 카드 엔티티 먼저 제거
      listidCardids[listid]?.forEach(cardid => {
        dispatch(C.removeCard(cardid))
      })
      dispatch(LC.removeListid(listid))
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch, listidCardids]
  )

  // 4. 리스트 순서 변경 (Swap)
  const onMoveList = useCallback(
    (dragIndex, hoverIndex) => {
      const newOrders = listidOrders.map((item, index) =>
        index === dragIndex ? listidOrders[hoverIndex] :
        index === hoverIndex ? listidOrders[dragIndex] : item
      )
      dispatch(LO.setListidOrders(newOrders))
    },
    [dispatch, listidOrders]
  )

  // 5. 드래그 앤 드롭 핵심 로직 (카드 이동)
  const onDragEnd = useCallback(
    (result) => {
      const { source, destination, draggableId } = result;
      if (!destination) return;

      const sourceListid = source.droppableId;
      const destinationListid = destination.droppableId;
      const sourceCardIndex = source.index;
      const destinationCardIndex = destination.index;

      // 케이스 A: 같은 리스트 내에서 순서만 바뀔 때
      if (destinationListid === sourceListid) {
        const cardidOrders = listidCardids[destinationListid];
        dispatch(LC.setListidCardids({
          listid: destinationListid,
          cardids: U.swapItemsInArray(cardidOrders, sourceCardIndex, destinationCardIndex)
        }));
      } 
      // 케이스 B: 다른 리스트로 카드가 이동할 때
      else {
        // 1. 소스 리스트에서 카드 ID 제거
        const sourceCardids = listidCardids[sourceListid];
        dispatch(LC.setListidCardids({
          listid: sourceListid,
          cardids: U.removeItemAtIndexInArray(sourceCardids, sourceCardIndex)
        }));
        
        // 2. 타겟 리스트의 특정 위치에 카드 ID 삽입
        const destinationCardids = listidCardids[destinationListid];
        dispatch(LC.setListidCardids({
          listid: destinationListid,
          cardids: U.insertItemAtIndexInArray(destinationCardids, destinationCardIndex, draggableId)
        }));
      }
    },
    [dispatch, listidCardids]
  )

  return {lists, onCreateList, onRemoveList, onMoveList, onDragEnd}
}