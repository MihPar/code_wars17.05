function noSpace(x){
    let arr = x.split("")
      let newArr = []
      for(let char of arr) {
          if(char !== " ") {
              newArr.push(char)
          }
      }
      return newArr.join('')
  }
  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))