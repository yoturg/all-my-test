

function Matrix (list, row, col) {
  if(!this instanceof Matrix) {
    return new Matrix(list, row, col);
  }

  this.list = list;
  this.row = row;
  this.col = col;
}

Matrix.prototype.pow = function (times) {
  let cur = [...this.list]
 

  // while(times--) {
  //   let res = new Array(this.row * this.col).fill(0)
  //   for(let i = 0; i < this.row; i++) {
  //     for(let j = 0; j < this.col; j++) {
  //       for (let z = 0; z < this.row; z++) {
  //         res[i* this.col + j] += this.list[z * this.col + j] *  cur[i * this.col + z];
  //       }
  //     }
  //   }
  //   cur = [...res]
  // }

  
  
  return cur
}



const m = new Matrix([1, 1, 1, 0], 2, 2)
console.log(m.pow(4))
