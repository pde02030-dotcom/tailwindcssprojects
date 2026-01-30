import { Div, Title, Icon } from '../components'
import * as D from '../data'

const src = D.randomImage(1900, 500)

export default function PositionTest() {
  const icons = ['home', 'search', 'settings', 'favorite'].map((name) => ( 
    <Icon key={name} name={name} className="mr-2" />
  ))
  // map함수 key props는 리스트 렌더링 시 각 아이템을 구분하기 위해 사용됩니다.
  // 여기서는 아이콘 이름을 key로 사용하여 각 아이콘 컴포넌트를 고유하게 식별합니다.
  // 이렇게 하면 React가 각 아이콘을 효율적으로 업데이트하고 렌더링할 수 있습니다.
  // mr-2 클래스는 아이콘들 사이에 오른쪽 마진을 추가하여 아이콘들이 서로 붙지 않도록 합니다.
  // 이는 아이콘들 간의 간격을 시각적으로 향상시키는 역할을 합니다.
  // 최종적으로 icons 변수는 네 개의 아이콘 컴포넌트 배열을 포함하게 되며,
  // 이는 이후 JSX에서 사용되어 화면에 렌더링됩니다.
  // map 함수는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성합니다.
  // 여기서는 아이콘 이름 배열을 순회하며 각 이름에 대해 Icon 컴포넌트를 생성합니다.
  // 이 과정에서 key와 className 속성이 각각 설정됩니다.
  // 결과적으로 icons 변수는 네 개의 Icon 컴포넌트로 구성된 배열이 됩니다.
  // 이 배열은 JSX 내에서 사용되어 화면에 아이콘들을 렌더링하는 데 활용됩니다.

  return (
    <section className="mt-4">
      <Title>PositionTest</Title>

      <Div className="relative border-2 border-gray-500" src={src} height="10rem">
        <Div className="absolute p-2 text-white bg-red-500" left="1rem" top="1rem">
          {icons}
        </Div>

        <Div className="absolute p-2 text-white bg-red-500" right="1rem" top="1rem">
          {icons}
        </Div>

        <Div className="absolute p-2 text-white bg-red-500" left="1rem" bottom="1rem">
          {icons}
        </Div>

        <Div className="absolute p-2 text-white bg-red-500" right="1rem" bottom="1rem">
          {icons}
        </Div>
      </Div>
    </section>
  )
}
