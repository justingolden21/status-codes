// todo: url params and searching/linking codes
// expand all / collapse all btn
// print friendly table and btn
// input onchange: validate from list of options), then open correct details, then scroll to element with id
// make input dropdown?
// dark mode, fullscreen, contact btns on bottom?
// update descriptions with <code></code> and more links like in source

const codes = [
	100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300,
	301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406,
	407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423,
	424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507,
	508, 510, 511,
];

window.onload = () => {
	const statusInput = document.getElementById('status-input');
	statusInput.select();

	statusInput.onchange = () => {
		const val = parseInt(statusInput.value);
		if (codes.includes(val)) {
			const location = window.location.toString().split('#')[0];
			history.replaceState(null, null, location + '#' + val);
			openCode(val);
		}
	};

	// one details open at a time
	// https://stackoverflow.com/a/36994802/4907950
	const details = document.querySelectorAll('details');
	details.forEach((targetDetail) => {
		targetDetail.addEventListener('click', () => {
			// close details that aren't the target
			details.forEach((detail) => {
				if (detail !== targetDetail) {
					detail.removeAttribute('open');
				}
			});
		});
	});

	let hash = parseInt(window.location.hash.substring(1));
	if (hash) {
		openCode(hash);
		statusInput.value = hash;
	}
};

function openCode(hash) {
	if (!codes.includes(hash)) return;
	const idx = hash.toString()[0] - 1;
	const details = document.querySelectorAll('details');
	details.forEach((targetDetail) => targetDetail.removeAttribute('open'));
	details[idx].setAttribute('open', true);
	setTimeout(() => {
		const elm = document.getElementById(hash.toString());
		elm.scrollIntoView();
		for (let code of codes) {
			document
				.getElementById(code.toString())
				.classList.remove('highlight');
		}
		elm.classList.add('highlight');
	}, 100);
}
