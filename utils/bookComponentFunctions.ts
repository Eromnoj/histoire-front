export const categoryColor = (category:string): string => {
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
      colorTag = 'black'
      break
  }

  return colorTag
}

export const countStars = (rating:number): boolean[] => {

  let star:number
  if(rating < 0){
    star = 0
  }else if(rating > 5) {
    star = 5
  }else {
    star = rating
  }
  const halfStar = star % 1 === 0 ? false : true
  let stars: boolean[] = []
  
  for(let i= 0; i< Math.floor(star); i++){
    stars.push(true)
  }
  if(halfStar){
    stars.push(false)
  }
  if(star === 0){
    stars.push(false)
  }

  return stars

}