import './reset.scss'
import './style.scss'

import { fetchAdvice } from './fetchAdvice'
import { translation } from './translation';

const $loader = <HTMLElement>document.querySelector('.loader');
const $en = <HTMLElement>document.querySelector('.en');
const $ko = <HTMLElement>document.querySelector('.ko');
const $btn = <HTMLButtonElement>document.querySelector('.btn');

let bull = true;

// 버튼 클릭
$btn.addEventListener("click", () => {
	if (!bull) return
	
	bull = false;
	$btn.disabled = true; // 버튼 연속 클릭 방지 비활성화

	$en.innerHTML = '';
	$ko.innerHTML = '';

	$loader.classList.add('active');

	// 명언 가져오기
	fetchAdvice()
		.then(res => {
			$loader.classList.remove('active');
			$loader.classList.add('inactive');

			$en.innerHTML = res.slip.advice
			
			translation(res.slip.advice)
				.then(res => {
					let [ list ] = res.translated_text;
					let [ sentences ] = list;
					$ko.innerHTML = sentences;

					bull = true;
					$btn.disabled = false; // 버튼 활성화

					if (!$btn.classList.contains('again')) {
						$btn.innerHTML = "다시 생성!";
					}
				})
		})
})
