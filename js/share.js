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

	document.getElementById('print-btn').onclick = function () {
		window.print();
	};
});

// open details before print
// https://stackoverflow.com/a/34158303/4907950

function beforePrint() {
	document
		.querySelectorAll('details')
		.forEach((elm) => elm.setAttribute('open', true));
}
function afterPrint() {
	document
		.querySelectorAll('details')
		.forEach((elm) => elm.removeAttribute('open'));
}

// webkit
if (window.matchMedia) {
	window.matchMedia('print').addListener(function (mql) {
		if (mql.matches) {
			beforePrint();
		} else {
			afterPrint();
		}
	});
}

// IE and FF
window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;
