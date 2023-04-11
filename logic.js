function choose() {
	let i = getRandLessNot(sentences.length)
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
		
function splitSentence(sen, i = -1) {
	let words = sen.split(" ");
	let sliceAt = getRandLessNot(words.length, i);
			
	let left = words.slice(0, sliceAt).join(" ");
	if (left) {
		left = left + ' ';
	}
	let mid = words.slice(sliceAt)[0];
	let right = words.slice(sliceAt + 1).join(" ");
	if (right) {
		right = ' ' + right;
	}

	return [left, mid, right, sliceAt];
}

var sentenceQueue = [];

function update(previous) {
	let current = Alpine.store('current');

	let currentString = current.left + current.mid.toLowerCase() + current.right;
	let correct = sentences.includes(currentString);
	Alpine.store('previous').list.push({left: current.left, mid: current.mid, right: current.right, correct: correct});
	
	if (correct) {
		[l, m, r, p] = sentenceQueue.length ? sentenceQueue.shift() : splitSentence(choose());
		current.correct++;
	} else {
		let difficulty = Math.max(4 - sentenceQueue.length, 0);
		for (i = 1; i <= getRandLessNot(difficulty); i++) {
			sentenceQueue.push(splitSentence(choose()));
		};
		sentenceQueue.push(splitSentence(current.last, current.position));
		[l, m, r, p] = sentenceQueue.shift();
	}
	
	current.last = l + m + r;
	current.left = l;
	current.mid = '';
	current.right = r;
	current.position = p;
	
	current.total++;
	
	isCorrect();
}