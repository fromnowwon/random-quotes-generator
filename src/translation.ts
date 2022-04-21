export async function translation (text: string) {
	let transData = {
		method: 'POST',
		headers: {
			'Authorization': `KakaoAK ${process.env.KAKAO_API_KEY}`
		}
	};
	
	return await fetch(
		`https://dapi.kakao.com/v2/translation/translate?src_lang=en&target_lang=kr&query=${text}`,
		transData
	)
		.then((res) => res.json())
		.catch((error) => error);
}
