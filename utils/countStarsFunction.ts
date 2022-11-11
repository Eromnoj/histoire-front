export default (rating:number): boolean[] => {

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
