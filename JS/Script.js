
const quote = document.querySelector('.quote');
const character = document.querySelector('.character');
const nextBtn = document.querySelector('.next');
/*Creating a Function*/
/**async & await- to handle the promises easily*/
const getQuote = async () => {
	/**Fetches the API to Get All the Codes */
	/**Stores the Respose in the res Variable */
	const res = await fetch('https://friends-quotes-api.herokuapp.com/quotes')
	/**After Getting the Response Change it to json*/
	const quotes = await res.json();
	//To Access a Particular Quote from the Array
	const num = Math.floor(Math.random()*quotes.length);
	const item = quotes[num];
	const text = item.quote;
	const author = item.character;
	quote.innerText = text;
	character.innerText = author;
	//console.log(item);
}
//Makes the Button to Generate Random Quote When Clicked
nextBtn.addEventListener('click', getQuote)
getQuote()