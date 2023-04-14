function choose() {
	let i = getRandLessNot(sentences.length);
	return sentences[i];
}
		
function getRandLessNot(max, i = -1) {
	let j = Math.floor(Math.random() * max);
	if (i != j) {
		return j;
	} else {
		return getRandLessNot(max, i);
	}
}
		
function splitSentence(sen, level, i = -1) {
	let words = sen.split(" ");
	
	let takeX = Math.min(words.length - 1, getRandLessNot(level) + 1);
	
	let sliceAt = getRandLessNot(words.length - takeX + 1, i);
			
	let left = words.slice(0, sliceAt).join(" ");
	if (left) {
		left = left + ' ';
	}
	
	let mid = words.slice(sliceAt).slice(0, takeX).join(" ");
	let right = words.slice(sliceAt + takeX).join(" ");
	if (right) {
		right = ' ' + right;
	}
	// console.log([left, mid, right]);
	return [left, mid, right, sliceAt];
}

var sentenceQueue = [];

function update(previous) {
	let current = Alpine.store('current');
	
	let level = 1;
	let accuracy = weightedAccuracy();
	if (current.total.length >= 7 && accuracy >= 80) {
		level = 2;
	}
	if (current.total.length >= 15 && accuracy >= 85) {
		level = 3;
	}
	if (current.total.length >= 23 && accuracy >= 90) {
		level = 4;
	}

	let currentString = current.left + current.mid.toLowerCase() + current.right;
	let correct = sentences.includes(currentString);
	Alpine.store('previous').list.push({left: current.left, mid: current.mid, right: current.right, correct: correct});
	
	if (correct) {
		[l, m, r, p] = sentenceQueue.length ? sentenceQueue.shift() : splitSentence(choose(), level);
		current.total.unshift(1);
	} else {
		let difficulty = Math.max(4 - sentenceQueue.length, 0);
		for (i = 1; i <= getRandLessNot(difficulty); i++) {
			sentenceQueue.push(splitSentence(choose(), level));
		};
		sentenceQueue.push(splitSentence(current.last, 1, current.position));
		// console.log(sentenceQueue.map((x) => x));
		[l, m, r, p] = sentenceQueue.shift();
		current.total.unshift(0);
	}
	
	current.last = l + m + r;
	current.left = l;
	current.mid = '';
	current.trueMid = m;
	current.right = r;
	current.position = p;
		
	isCorrect();
}