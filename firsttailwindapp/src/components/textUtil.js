// prettier-ignore
export const makeClassName = (setting, _className, numberOfLines) =>
  [setting, numberOfLines ? `line-clamp-${numberOfLines}` : '', _className].join(' ') 
// Join class names with spaces
// setting: base class name
// _className: additional class names
// numberOfLines: if provided, adds line-clamp class
// Example usage: makeClassName('text-base', 'font-bold', 3)
// returns 'text-base line-clamp-3 font-bold'


