export const cn = function() {
  const classNames = []
  for (let i = 0; i < arguments.length; i++) {
      if ( typeof arguments[i] === 'string' ) {
            classNames.push(arguments[i])
      }
  }
    return classNames.join(' ')
}
