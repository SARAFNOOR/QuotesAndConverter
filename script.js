// Collection Of Quote
const quotes = [{
		quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
		author: `â€• Kent Beck`
	},
	{
		quote: `Talk is cheap. Show me the code.`,
		author: `â€• Linus Torvalds`
	},
	{
		quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
		author: `â€• Harold Abelson`
	},
	{
		quote: `Truth can only be found in one place: the code.`,
		author: `â€• Robert C`
	},
	{
		quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
		author: `â€• Muhammad Waseem`
	}, {
		quote: `How you look at it is pretty much how you'll see it`,
		author: `â€• Steve Jobs`
	}, {
		quote: `The most disastrous thing that you can ever learn is your first programming language.`,
		author: `â€• Alan Kay`
	}, {
		quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
		author: `â€• C.A.R. Hoare`
	}, {
		quote: `i am committed to push my branch to the master.`,
		author: `â€• Halgurd Hussein`
	}, {
		quote: `Coding is not just code, that is a live thing to serve everyone!`,
		author: `â€• Ming Song`
	},
]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', function () {
	let random = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = quotes[random].quote;
	author.innerHTML = quotes[random].author;
})
/* When the input field receives input, convert the value from pounds to kilograms */
let kgbtn = document.getElementById('kg');
let poundbtn = document.getElementById('pound');
let capitalizebtn = document.getElementById('capitalize');
let sortbtn = document.getElementById('sort');
let reversebtn = document.getElementById('reverse');
let clearbtn = document.getElementById('clear');
let shufflebtn = document.getElementById('shuffle');
let stripbtn = document.getElementById('strip');
let addbtn = document.getElementById('add');
kgbtn.addEventListener('click', function () {
	let input = document.getElementById('input').value;
	document.getElementById('output').value = input / 2.205 + "kg"
})

poundbtn.addEventListener('click', function () {
	let input = document.getElementById('input').value;
	document.getElementById('output').value = input * 2.205 + "pound"
})

capitalizebtn.addEventListener('click', function () {
	let input = document.getElementById('input1').value;
	document.getElementById('output1').value = String(input).toUpperCase();
})

sortbtn.addEventListener('click', function () {
	let input = document.getElementById('input2').value.split(' ');
	document.getElementById('output2').value = input.sort();
})

reversebtn.addEventListener('click', function () {
	let input = document.getElementById('input3').value.split(' ');
	document.getElementById('output3').value = input.reverse();
})

clearbtn.addEventListener('click', function () {
	let input = document.getElementById('input4').value;
	document.getElementById('output4').value = "";
})

shufflebtn.addEventListener('click', function () {
	let input = document.getElementById('input5').value;
	document.getElementById('output5').value = input.map((value)=>({value,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(({value})=> value);
})
stripbtn.addEventListener('click', function () {
	let input = document.getElementById('input6').value;
	document.getElementById('output6').value = String(input).trim();
})

addbtn.addEventListener('click', function () {
	let input = document.getElementById('input7').value;
	document.getElementById('output7').value = Math.random()+" "+ String(input);
})
const colorItems = document.querySelectorAll('.color-item');
    colorItems.forEach( item => {
        item.addEventListener('click', function() {
            const idSelected = this.id;
            document.body.className = idSelected;
        })
    })

let minbtn = document.getElementById('min');

minbtn.addEventListener('click', function () {
	let input = document.getElementById('inp').value.split(',').map(i => Number(i));
	document.getElementById('output_x').value = input.sort(function(a, b) {
  return a - b;
})[0];
})

let maxbtn = document.getElementById('max');

maxbtn.addEventListener('click', function () {
	let input = document.getElementById('inp').value.split(',').map(i => Number(i));
	document.getElementById('output_x').value = input.sort(function(a, b) {
  return a - b;
})[input.length - 1];
})
let calbtn = document.getElementById('bn');

calbtn.addEventListener('click', function () {
	let input = document.getElementById('inp').value.split(',').map(i => Number(i));
	document.getElementById('output_x').value = input.reduce(function(a, b) { return a + b; }, 0);
})

let avbtn = document.getElementById('av');

avbtn.addEventListener('click', function () {
	let input = document.getElementById('inp').value.split(',').map(i => Number(i));
	document.getElementById('output_x').value = input.reduce(function(a, b) {return a + b;},0) / input.length;
})


let robtn = document.getElementById('ro');

robtn.addEventListener('click', function () {
	let input = document.getElementById('inp').value.split(',');
	document.getElementById('output_x').value = input.reverse();
})

