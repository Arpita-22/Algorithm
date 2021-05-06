class HashTable{
    constructor(size=4){
      this.keyMap = new Array(size);
    }
  
    _hash(key){
      let total = 0;
      let weirdPrime = 31;
      for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        // console.log(char, char.charCodeAt(0))
        let value = char.charCodeAt(0) - 96;
        // console.log(value)
        total = (total * weirdPrime + value) % this.keyMap.length;
      }
      // console.log(total)
      return total;
    }
  
    set(key, value){
      let index = this._hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
      // return hashIndex;
    }
    values(){
        let valArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!valArr.includes(this.keyMap[i][j][1])){
                valArr.push(this.keyMap[i][j][1]);
              }
            }
          }
        }
        return valArr;
      }
    
        keys(){
        let keyArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!keyArr.includes(this.keyMap[i][j][0])){
                keyArr.push(this.keyMap[i][j][0]);
              }
            }
          }
        }
        return keyArr;
      }
    }
    
    let ht = new HashTable(4);
    console.log(ht.set("hello world", "Goodbye!!"))
    console.log(ht.set("pink", "passion!!"))
    console.log(ht.set("blue", "ocean!!"))
    console.log(ht.set("yellow", "sun!!"))
    console.log(ht.set("red", "blood!!"))
    console.log(ht.set("white", "pure!!"))
    console.log(ht.set("green", "grass"))
    // console.log(ht)
    // console.log(ht.keyMap)
    console.log(ht.get("green"))
    console.log(ht.values())
    console.log(ht.keys())
    ht.keys().forEach(key => console.log(ht.get(key)))
    ht.keys().forEach(key => console.log(key))
    ht.keys().forEach(function(key){
      console.log(ht.get(key))
    })