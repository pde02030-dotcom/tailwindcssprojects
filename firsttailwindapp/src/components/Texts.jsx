import { makeClassName } from './textUtil'

export const Title = ({ className: _className, numberOfLines, ...props }) => { 
  // whitespace-pre-line : jsx 코드안에 포함된 공백문자는 삭제하고 줄바꿈 문자는 유지
  const className = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export const Subtitle = ({ className: _className, numberOfLines, ...props }) => {
  const className = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export const Summary = ({ className: _className, numberOfLines, ...props }) => {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export const Paragraph = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'font-normal text-base whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}
