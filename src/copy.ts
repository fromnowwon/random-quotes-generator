export function copy_to_clipboard(ele: HTMLElement) {
	// 임시 텍스트 입력란
	const aux = document.createElement('input');
	// 임시 텍스트 입력란 value 값을 복사할 요소의 innerHTML로 지정
	aux.setAttribute('value', ele.innerHTML);
	// body의 자식 요소로 붙여넣기
	document.body.appendChild(aux);
	// 해당 내용 강조
	aux.select();

	// 텍스트 복사 변수 생성
	document.execCommand('copy');
	// body의 자식요소 aux 삭제
	document.body.removeChild(aux);

  alert('복사되었다!');
}