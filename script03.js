function parseF(s) {
	//     const number = parseFloat(s);
	//   return isNaN(number) ? null : number;
	  if(isNaN(parseFloat(s))) {
		return null
	  } 
	  return parseFloat(s)
	}