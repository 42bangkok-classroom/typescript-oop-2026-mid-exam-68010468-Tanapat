// Write your code below
interface Product {
    price?: number;
}
function getPrice(p: Product){
    return p.price + 10;
}