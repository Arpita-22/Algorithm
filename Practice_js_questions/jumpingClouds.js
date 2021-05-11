function jumpingOnClouds(c) {
    // Write your code here
    let jump = 0;
    for(let i = 0; i < c.length - 1;){
      if(i+2 < c.length  && c[i+2] === 0){
        i = i+ 2;
      }
      else{
          i = i + 1
        }
        jump++;
    }
    return jump;
}

//Much better solution

function jumpingOnClouds(c) {
    // Write your code here
    let jump = -1;
    for(let i = 0; i < c.length;){
      if(i+2 < c.length  && c[i+2] === 0){
        i = i+ 2;
      }
      else{
          i = i + 1
        }
        jump++;
    }
    return jump;
}


