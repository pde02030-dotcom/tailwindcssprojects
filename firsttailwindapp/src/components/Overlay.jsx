import { Div } from './Div'

export const Overlay = ({
  className: _className,
  opacityClass,
  children,
  ...props
}) => {
  const className = [
    _className,
    // absolute : 부모 내부 좌표계 안에서, 레이아웃과 분리된 요소를 정확히 겹쳐 배치해야 할 때만 사용
    'absolute z-50 w-screen h-screen',
    opacityClass ?? 'bg-black/70',
    'flex items-center justify-center'
  ].join(' ')

  return (
    <Div {...props} className={className} top="0" left="0">
      {children}
    </Div>
  )
}
