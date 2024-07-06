function delayedCall(fn:()=>void):void {
    setTimeout(fn,4000);
}

console.log(delayedCall(()=>{console.log("i ran after 1 second")}))