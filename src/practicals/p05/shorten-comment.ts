
let result : string = "";
export function shortenComment(comment: string): string {
  const spit = comment.split(" ");
  for(let i = 0;i < spit.length; i ++){
    if(spit[i].length >= 5 && spit[i].length <= 10){
      result += spit[i]
      result += " "
    }
  }
  return(result);

}