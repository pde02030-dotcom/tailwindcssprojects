import { Title } from '../components'

export default function DisplayNoneTest() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p className="visible">visibility: visible text</p> 
        <p className="invisible">visibility: hidden text</p>
        <p className="hidden">display: none text</p>
      </div>
    </section>
  ) 
} // DisplayNoneTest 컴포넌트는 Tailwind CSS의 display 및 visibility 유틸리티 클래스를 사용하여 세 가지 다른 텍스트 표시 방식을 보여줍니다.
// visible 클래스는 텍스트를 정상적으로 표시하고,
// invisible 클래스는 텍스트를 숨기지만 공간은 차지하며,
// hidden 클래스는 텍스트를 완전히 제거하여 공간도 차지하지 않습니다.
// 이 컴포넌트는 각 클래스의 차이를 시각적으로 이해하는 데 도움이 됩니다.
// 각 <p> 요소는 서로 다른 클래스를 사용하여 텍스트의 표시 상태를 제어합니다.
// 결과적으로 사용자는 세 가지 다른 텍스트 표시 방식을 한눈에 비교할 수 있습니다. 
// 이 컴포넌트는 React 함수형 컴포넌트로 작성되었으며, JSX를 사용하여 UI를 정의합니다.
// Tailwind CSS의 유틸리티 클래스를 활용하여 간단하고 명확한 스타일링을 적용합니다.
// 최종적으로 DisplayNoneTest 컴포넌트는 웹 페이지의 특정 섹션에 포함되어 사용될 수 있습니다.
