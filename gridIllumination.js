let N = 8
let lamps = [
  [4,3],
  [4,4]
]
let queries = [
  [3,4],
  [7,6]
]
function checkIllumination(N, lamps, queries) {
    if(lamps.length === 0) return ["Dark"]
    for(let k = 0; k < queries.length; k++){
      console.log(queries[k])
        for(let l = 0; l < queries[k].length; l++){
              console.log(queries[k][l]) 
        }
    }
}

function queries1 (queries) {
  let position = [];
  let row = [0, 1, 1, 1, 0, -1, -1, -1, 0];
  let column = [0, -1, 0, 1, 1, 1, 0, -1, -1];
  for(let k = 0; k < queries.length; k++){
      for(let i = 0; i < 9; i++){
        let x_value = queries[k][0] + row[i];
        let y_value = queries[k][1] + column[i];
        position.push([x_value, y_value]); 
      }
  }
  return position;
}

function background (N, lamps) {
  let grid = Array(N).fill().map(() => Array(N).fill(false));
  for(let i = 0; i < lamps.length; i++) {
    let lamp_in_row = lamps[i][0];
    let lamp_in_column = lamps[i][1];
    grid[lamp_in_row][lamp_in_column] = true;

    //all rows above will be true
    for(let r = 0; r < N; r ++) {
      if(r + lamp_in_row < N) {
        grid[r + lamp_in_row][lamp_in_column] = true;
      }
    }

    //all rows below will be true
    for(let r = 0; r < N; r ++) {
      if(lamp_in_row - r >= 0) {
        grid[lamp_in_row - r][lamp_in_column] = true;
      }
    }

    //all column right will be true
    for(let c = 0; c < N; c ++) {
      if(c + lamp_in_column < N) {
        grid[lamp_in_row][c + lamp_in_column] = true;
      }
    }

    //all column left will be true
    for(let c = 0; c < N; c ++) {
      if(lamp_in_column - c >= 0) {
        grid[lamp_in_row][lamp_in_column - c] = true;
      }
    }

    //diagonal right above
    for(let rc = 0; rc < N; rc ++) {
      if(lamp_in_row + rc < N && lamp_in_column + rc < N) {
        grid[lamp_in_row + rc][lamp_in_column + rc] = true;
      }
    }

    //diagonal left below
    for(let rc = 0; rc < N; rc ++) {
      if(lamp_in_row - rc >= 0 && lamp_in_column - rc >= 0) {
        grid[lamp_in_row - rc][lamp_in_column - rc] = true;
      }
    }

    //diagonal left above
    for(let rc = 0; rc < N; rc ++) {
      if(lamp_in_row + rc < N && lamp_in_column - rc >= 0) {
        grid[lamp_in_row + rc][lamp_in_column - rc] = true;
      }
    }

    //diagonal right below
    for(let rc = 0; rc < N; rc ++) {
      if(lamp_in_row - rc >= 0 && lamp_in_column + rc < N) {
        grid[lamp_in_row - rc][lamp_in_column + rc] = true;
      }
    }
  }
  //return grid;
}

// background(1000, [[0,0]])
//console.log(background(3, [[0,0]]))
//console.log(queries1(queries))
//console.log(checkIllumination(N, lamps, queries))