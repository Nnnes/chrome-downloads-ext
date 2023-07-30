window.onload = () => {
	const css_url = chrome.runtime.getURL('downloads-item.css');
	const dl = document.querySelector('downloads-manager').shadowRoot
		.querySelector('#downloadsList');

	function style() {
		dl.querySelectorAll('downloads-item')
			.forEach((node) => {
				if (!node.shadowRoot.querySelector(`link[href="${css_url}"]`)) {
					let link = document.createElement('link');
					link.rel = 'stylesheet';
					link.href = css_url;
					node.shadowRoot.appendChild(link);
				}
			});

	}

	style();

	const ob = new MutationObserver(style);
	ob.observe(dl, { childList: true });
}
