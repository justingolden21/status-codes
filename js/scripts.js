// todo: url params and searching/linking codes

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