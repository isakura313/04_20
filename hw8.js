function task1(data){
	for(let i = 1; i < data.length - 1; i++){
		data[i] = 0;
	}
	data[0] = data[data.length - 1] = 1;
	return data;
}

function task2(data){
	for(let i = 0; i < data.length; i++){
		if(i % 2 == 0){
			data[i] = 0;
		} else {
			data[i] = 1;
		}
	}
}

function task3(data){
	let triple = [];
	for(let elem of data){
		for(let i=0; i < 3; i++){
			triple.push(elem);
		}
	}
	return triple;
}

function task4(data){
	let polymorf = data;
	for(let i = data.length - 1; i >= 0; i--){
		polymorf.push(data[i]);
	}
	return polymorf;
}

function task5(length){
	if(length < 2){
		alert('incorrect length (length < 2)');
		return null;
	}
	let array = [];
	let firstOne = Math.floor(Math.random() * length);
	let secondOne = Math.floor(Math.random() * length);
	while(secondOne == firstOne){
		secondOne = Math.floor(Math.random() * length);
	}
	
	for(let i = 0; i < length; i++){
		if(i != firstOne && i != secondOne){
			array[i] = Math.floor(Math.random() * length);			
			while(array[i] == 1){
				array[i] = Math.floor(Math.random() * length);
			}
		} else {
			array[i] = 1;
		}
	}
	return array;
}

function task6(data){
	let evenSum = 0;
	for(let i = 0; i < data.length; i++){
		if(i % 2 == 0){
			evenSum+= +data[i];
		}
	}
	return evenSum;
}

function task7(data){
	let max = Math.max.apply(null, data);
	let countDifferMax = 0;
	for(let elem of data){
		if(elem >= 0.9 * max){
			countDifferMax++;
		}
	}
	return countDifferMax;
}

function task8(data){
	let decreasing = true;
	let increasing = true;
	let oneNumber = true;
	
	for(let i = 1; i < data.length; i++){
		if(+data[i] < +data[i-1]){
			increasing = false;
			oneNumber = false;
		} else if(+data[i] > +data[i-1]){
			decreasing = false;
			oneNumber = false;
		} else if(+data[i] == +data[i-1]){
			increasing = false;
			decreasing = false;
		}
		else {
			increasing = false;
			decreasing = false;
			oneNumber = false;
		}
		
	}
	
	if(data.length <= 1 || (oneNumber == true)){
		return 'underfined';
	}
	
	if(decreasing){
		return 'decreasing';
	} else if(increasing){
		return 'increasing';
	} else {
		return 'not decreasing, not increasing';
	}
}


function task9(data){
	let counts = [];
	for(let i = 0; i < data.length; i++){
		for(let j = 0; j < data.length; j++){
			if(data[i] == data[j]){
				if(counts[i] == undefined){
					counts[i] = 0;
				} else counts[i]++;
			}
		}
	}
	let maxCount = Math.max.apply(null, counts);
	for(let i = 0; i < data.length; i++){
		if(counts[i] == maxCount){
			return data[i];
		}
	}
}

function task10(){
	let count = +prompt('количество элементов', 0);
	let countLocalMax = 0;
	let array = [];
	for(let i = 0; i < count; i++){
		array[i] = +prompt(`введите ${i + 1} элемент`);
	}
	for(let i = 1; i < count - 1; i++){
		if((array[i - 1] < array[i]) && (array[i] > array[i + 1])){
			countLocalMax++;
		}
	}
	return countLocalMax;
}

function task11(data){
	let increasing = 1;
	for(let i = 0; i < data.length; i++){
		if(+data[i] < +data[i-1]){
			increasing--;
		}
		if(increasing < 0){
			return false;
		}
	}
	return true;
}

function task12(data){
	let reverseMinMax = data;
	let max = Math.max.apply(null, data);
	let min = Math.min.apply(null, data);
	for(let i = 0; i < data.length; i++){
		if(reverseMinMax[i] == min){
			reverseMinMax[i] = max;
		} else if(reverseMinMax[i] == max){
			reverseMinMax[i] = min;
		}
	}
	return reverseMinMax;
}

function task13(data){
	let psevdoSet = [];
	for(let i = 0; i < data.length; i++){
		if(psevdoSet.indexOf(data[i]) == -1){
			psevdoSet.push(data[i]);
		}
	}
	return psevdoSet;
}

function task14(n, data){
	//data in format:
	//[{start_1, stop_1}, ..., {start_n, stop_n}]
	//start_i <= stop_i
	//f.e. task14(3, [{start: 1, stop: 2},{start: 1.5, stop: 6},{start: 4, stop: 18}])
	if(data.length !== n){
		alert('incorrect arguments in task14');
		return null;
	}
	let interval = data[0];
	let count = n;
	for(let j = 0; j < n; j++){
		for(let i = 1; i < n; i++){
			if(data[i].start > interval.start && data[i].start < interval.stop){
				interval.stop = (interval.stop < data[i].stop) ? data[i].stop : interval.stop;
				count--;
			} else if(data[i].stop > interval.start && data[i].stop < interval.stop){
				interval.start = data[i];
				count--;
			}
		}
	}
	if(count > 0){
		return false;
	} else {
		return true;
	}
}