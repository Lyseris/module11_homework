function int(a,b){
    let i = setInterval(() => {
      console.log(a++);
      if (a > b) clearInterval(i);
    }, 1100)
   }
   
   int(2,12);