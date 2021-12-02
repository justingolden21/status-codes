window.addEventListener('load', function () {
	document.getElementById('share-btn').onclick = function () {
		if (navigator.share) {
			navigator
				.share({
					title: 'Status Codes',
					url: window.location.href,
				})
				.then(() => {
					console.log('Share successful');
				})
				.catch(console.error);
		} else {
			console.log('Share not supported');
		}
	};
});
