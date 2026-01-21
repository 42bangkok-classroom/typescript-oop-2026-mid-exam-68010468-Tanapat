export
const comment = "TypeScript is a strongly typed programming language"
const spit = comment.split(" ");
console.log(spit.length)
let result : string = "";
export function shortenComment(comment: string): string {
  for(let i = 0;i < spit.length; i ++){
    if(spit[i].length >= 5 && spit[i].length <= 10){
      result += spit[i]
    }
  }
  return(result);

}