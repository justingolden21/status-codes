window.addEventListener('load', function () {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		document
			.getElementById('dark-stylesheet')
			.setAttribute('href', 'css/dark.css');
	}

	document.getElementById('dark-btn').onclick = function () {
		const isDark =
			document.getElementById('dark-stylesheet').getAttribute('href') !==
			'';

		document
			.getElementById('dark-stylesheet')
			.setAttribute('href', isDark ? '' : 'css/dark.css');
	};
});
