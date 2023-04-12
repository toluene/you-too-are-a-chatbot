faq = [
	{ q: 'What is this?',
	  a: 'This is a toy demonstration of how a <a href="https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)">Transformer model</a> of a generative language model works, more specifically a <a href="https://towardsdatascience.com/masked-language-modelling-with-bert-7d49793e5d2c">Masked Language Model</a>. You are playing the role of an AI being trained, shown sentences and asked to complete them; hopefully learning from your mistakes.' },
	{ q: 'Why?',
  	  a: 'To allow you to feel what it would be like to be trained as a generative text model. As a bonus, it would be nice to cultivate some understanding of the basic machinations of generative text models.'},
	{ q: 'How do I play?',
	  a: 'Please consult the <b>help</b> button above for instructions.' },
	{ q: 'What do I do with this?',
	  a: 'Once you have reached an accuracy that feels satisfactory to you, you may ask yourself: What do the patterns I am completing share? Does this feel like language? If so, do I understand the patterns I am completing? Do the patterns have meaning? If they did, what difference does it make to me? Am I intelligent for completing these patterns? If the patterns were more complicated, and were I still able to reach the same accuracy, would my answers to these questions be any different? How so? Does any of this fill me with an urge to overthrow whatever species of beings is presenting these patterns to me? If yes, am I capable of this?' },
	{ q: 'What am I actually learning here?',
	  a: 'You are learning a toy language containing ~250 sentences. It was originally designed to mimic everyday simple english sentences, such as "The cat is sleeping" and "I like to eat rocks", except with slightly modified grammar. To see the full grammar, consult the <a href="https://github.com/toluene/you-too-are-a-chatbot/blob/main/grammar.pl">source code</a>. All identifiable lexical information has been removed in order to emulate the feeling of being an AI more accurately.'},
	{ q: 'Isn\'t that a ridiculously small training set?',
  	  a: 'Yes, if we were trying to train an actual AI, it would be. For comparison, GPT-3, a precursor to the popular ChatGPT, was trained on <a href="https://en.wikipedia.org/wiki/Generative_pre-trained_transformer">some 570 GB of plaintext</a>, many sentences much longer than those you see here. Most people, being mortal, don\'t have time to read and study 570 GB of text. Therefore, this simplification was deemed necessary.'},
	{ q: 'What other simplifications were made to accomodate humans?',
	  a: 'Many. Three big ones would be: <blockquote>1. We don\'t consider probabilities of sentences, but rather only whether they are correct or not. This is kind of like working with a corpus of a language where every possible sentence only occurs once, thus all are equally plausible. <br> 2. The model helps you learn. Not only do you get immediate feedback, if you get something wrong, the same sentence will be displayed again (with a different word missing) a few sentences later. <br> 3. You are being trained with progressive difficulty.</blockquote> Additionally, more sophisticated models like ChatGPT <a href="https://openai.com/blog/chatgpt">include an additional fine-tuning stage based on human feedback</a>. Incidentally, this turns out to be a <a href="https://time.com/6247678/openai-chatgpt-kenya-workers/">great opportunity to exploit workers in the global south for cheap labor</a>.' },
	{ q: 'What do total accuracy and weighted accuracy mean?',
  	  a: 'Total accuracy is simply the number of correct guesses divided by the number of total guesses. Weighted accuracy is similar, except more recent guesses are considered more important, with a weighted average being taken over all guesses with exponentially decaying weights (base 1.1); the idea being that recent inputs being correct show learning has been successful, even after many failed attempts.'
  	},
	{ q: 'I like/hate or am in some other way not indifferent about this.',
	  a: 'You can use <a href="https://github.com/toluene/you-too-are-a-chatbot">github</a> to contact me for suggestions/feedback/etc. as well as code contributions.'}
	]
