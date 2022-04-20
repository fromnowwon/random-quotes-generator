export async function fetchAdvice () {
	return await fetch("https://api.adviceslip.com/advice")
		.then((res) => res.json())
		.catch(error => error)
}