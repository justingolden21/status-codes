// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

let installBtn;

async function installButtonClick() {
	console.log(deferredPrompt);

	// Show the install prompt
	deferredPrompt.prompt();

	// Wait for the user to respond to the prompt
	const { outcome } = await deferredPrompt.userChoice;

	// We've used the prompt, and can't use it again, throw it away
	deferredPrompt = null;

	console.log(`User response to the install prompt: ${outcome}`);
}

window.addEventListener('load', function () {
	installBtn = document.getElementById('install-btn');

	installBtn.style.display = 'none';

	window.addEventListener('beforeinstallprompt', (e) => {
		// Prevent the mini-infobar from appearing on mobile
		e.preventDefault();

		// Stash the event so it can be triggered later.
		deferredPrompt = e;

		// Update UI notify the user they can install the PWA
		installBtn.style.display = 'inline';

		console.log(`'beforeinstallprompt' event was fired.`);
	});

	window.addEventListener('appinstalled', () => {
		// Hide the app-provided install promotion
		installBtn.style.display = 'none';

		// Clear the deferredPrompt so it can be garbage collected
		deferredPrompt = null;

		console.log('PWA was installed');
	});

	installBtn.onclick = installButtonClick;
});
