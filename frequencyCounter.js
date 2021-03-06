//brute force approach
function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    for(let i = 0; i < arr1.length; i++){
      let index = arr2.indexOf(arr1[i]** 2)
        if(index === -1) return false
        arr2.splice(index,1)
        }     
    return true
}

//frequency counter approach

function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    let obj1 = {}
    let obj2 = {}
    arr1.forEach(element => {
      obj1[element] = ++obj1[element] || 1
    })
 
    arr2.forEach(element => {
       obj2[element] = ++obj2[element] || 1
    })

    for(key in obj1){
      if(obj2.hasOwnProperty(key**2) === false){
        return false
      }
      if(obj1[key] !== obj2[key ** 2]) return false
    }

    return true
}