// todo: url params and searching/linking codes
// expand all / collapse all btn
// print friendly table and btn
// input onchange: validate from list of options), then open correct details, then scroll to element with id
// make input dropdown?
// dark mode, fullscreen, contact btns on bottom?
// update descriptions with <code></code> and more links like in source

window.onload = ()=> {
	document.getElementById('status-input').select();

	// one details open at a time
	// https://stackoverflow.com/a/36994802/4907950
	const details = document.querySelectorAll('details');
	details.forEach(targetDetail=> {
		targetDetail.addEventListener('click', ()=> {
			// close details that aren't the target
			details.forEach(detail => {
				if(detail !== targetDetail) {
					detail.removeAttribute('open');
				}
			});
		});
	});
};