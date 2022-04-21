export async function fetchQuotes () {
	return await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
		.then((res) => res.json())
		.catch(error => error)
}