function isPrime(n){
    return n<=1? n : isPrime(n-2)+ isPrime(n-1)
 
}
console.log(isPrime(2));    
    // if(n==0 || n==1){
    //     return false
    // }
    // for(let i =2 ; i<n;i++){
    //     if(n % i==0){
    //         return false
    //     }
    // }
    // return true;
        
    // return n!=1?n* isPrime(n-1):n
    // let result=1;
    // for(let i=1; i<=n;i++){
    //     debugger;
    //     result*=i;
    // }
    // return result   
    
    
    // if(n!==1 & n!==2){
    //     let prev1=1;
    //     let prev2=1;
    //     let result;
    //     for(let i=3;i<=n;i++){
    //         result=prev1+prev2;
    //         prev1=prev2;
    //         prev2=result;
    //     }
    //     return result;
    // }
    // return 1;