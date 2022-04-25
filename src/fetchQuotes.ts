export async function fetchQuotes () {
	return await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")
		.then((res) => res.json())
		.catch(error => error)
}