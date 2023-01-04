let text = document.getElementById('changeText');
let start = document.getElementById('startButton');
let stop = document.getElementById('stopButton');
let reset = document.getElementById('resetButton');

let max = 500;
let count = 0;
reset.addEventListener('click', () => {
	count = 0;
	text.innerHTML = 0;
});


// must asign interval to variable e.g.(handle) in order to clear interval
start.addEventListener('click', () => {
	let handle = setInterval( () => {
	count ++;
	if(count >= max){
		count = max;
	}
	text.innerHTML = count;
	return count;
   }, 100);
  // stop function must be inside add function to access variable (handle);
	stop.addEventListener('click', () => {
		clearInterval(handle);
	});
});
