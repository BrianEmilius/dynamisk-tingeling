(function etNavn() {
	const aTags = document.querySelectorAll("nav menu a")

	aTags.forEach(function(tag) {
		tag.addEventListener("click", clickHandler)
	})

	function clickHandler(event) {
		const articles = document.querySelectorAll("main article")

		articles.forEach(function(article) {
			article.style.display = "none"
		})

		document
			.querySelector("." + event.target.hash.replace("#", ""))
			.style.display = "block"
	}
})()
