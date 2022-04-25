import './reset.scss'
import './style.scss'

import { fetchQuotes } from './fetchQuotes'
import { translation } from './translation';
import { copy_to_clipboard } from './copy';

const $loader = <HTMLElement>document.querySelector('.loader');
const $text = <HTMLElement>document.querySelector('.text');
const $btn = <HTMLButtonElement>document.querySelector('.gen-btn');
const $copyBtnBox = <HTMLButtonElement>document.querySelector('.copy-btn-box');
const $copyBtn = <HTMLButtonElement>document.querySelector('.copy-btn');

let bull = true;

// 생성 버튼 클릭
$btn.addEventListener("click", () => {
	if (!bull) return
	
	bull = false;
	$btn.disabled = true; // 버튼 연속 클릭 방지 비활성화

	$text.innerHTML = '';

	$loader.classList.add('active');
	$copyBtnBox.classList.remove('active');
	$copyBtnBox.classList.add('inactive');
	
	// 명언 가져오기
	fetchQuotes()
		.then(res => {
			let { result } = res[0];
			let { respond } = res[1];

			if (result != "success") {
				alert(result);
			}

			$loader.classList.remove('active');
			$loader.classList.add('inactive');
			
			$text.innerHTML = respond;
		
			bull = true;
			$btn.disabled = false; // 버튼 활성화

			$copyBtnBox.classList.remove('inactive');
			$copyBtnBox.classList.add('active');

			if (!$btn.classList.contains('again')) {
				$btn.innerHTML = "다시 생성!";
			}
		})
})

// 복사 버튼
$copyBtn.addEventListener("click", () => {
	copy_to_clipboard($text);
})
