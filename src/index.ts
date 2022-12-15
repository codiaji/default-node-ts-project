function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i);
	}
}

// If we uncomment the below code snippet, we'll get the following error: 'i' is possibly 'undefined'.
/* 
myForEach([1, 2, 3], (a, i) => {
	console.log(i.toFixed());
   }); 
*/
