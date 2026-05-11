let feast = (beast, dish) => {
  if(beast.charAt(beast.length-1) === dish.charAt(dish.length-1) && (beast.charAt(0) === dish.charAt(0))){
    return true;
   } else {
     return false
   }
}
​
​