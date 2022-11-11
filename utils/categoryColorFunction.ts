export default (category:string): string => {
  let colorTag

  switch (category) {
    case 'novel':
      colorTag = 'hsla(190, 58%, 24%, 1)'
      break
    case 'short_story':
      colorTag = 'hsla(356, 63%, 54%, 1)'
      break
    case 'poetry':
      colorTag = 'hsla(159, 53%, 28%, 1)'
      break
    default:
      colorTag = 'none'
      break
  }

  return colorTag
}

