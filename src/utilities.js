export const cn = function(...args) {
  const classNames = []
  for (let i = 0; i < args.length; i++) {
      if ( typeof args[i] === 'string' ) {
            classNames.push(args[i])
      }
  }
    return classNames.join(' ')
}
