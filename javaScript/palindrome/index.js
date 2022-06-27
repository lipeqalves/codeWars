function isPalindrome(x) {
   // your code here
   let arr = x.toUpperCase();
   let arr1 ="";
   for(let i = arr.length-1; i>=0; i--){
     arr1 = arr1 + arr[i];
   }
   console.log(arr1);
   if(arr1 == arr){
     return true
   }else{
     return false
   }
}