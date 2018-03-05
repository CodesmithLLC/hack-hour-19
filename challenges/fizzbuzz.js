// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {   
 var count = 0;
 var array = [];
 for (var i = 1; i <= num; i++) {
   array.push(i);   
 }
  return array.map(ele => filterAndChange(ele));
}

function filterAndChange (num) {
  return num % 3 === 0 && num % 5 === 0 ? 'fizzbuzz':num % 3 === 0 ? 'fizz': num % 5 === 0 ? 'buzz':num;
}




const fizzbuzz = (num) => {
	// input : number to count to
	// output: array of values up to num with check for divisibility by 3 &/or 5
	const arr = [];
	for(let count = 1; count <= num; count++){
		if(count % 15 === 0){
			arr.push('fizzbuzz');
		}else if (count % 3 === 0){
			arr.push('fizz');
		}else if (count % 5 === 0){
			arr.push('buzz');
		}else{
			arr.push(count);
		}
	}

	return arr;
}

module.exports = fizzbuzz;
