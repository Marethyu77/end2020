(function () {
	function main() {
		let urls = document.getElementById('urls');
		let numberEl = document.getElementById('nb');
		document.getElementById('go').addEventListener('click', () => {
			const max = parseInt(numberEl.value);
			urls.value
				.split(/\s+/g)
				.map(l => l.trim())
				.filter(l => l.length)
				.forEach(u => {
					console.log('u:', u);
					for (let i = 0; i < max; i++) {
						let w = window.open(u);
						if (w) setTimeout(() => w.close(), 3000);
					}
				});
		});
	}
	document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', main, {
		once: true
	}) : main();
}());
