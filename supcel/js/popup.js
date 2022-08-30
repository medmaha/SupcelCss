class BasePopup {
	init(element) {
		this.popup = document.querySelector('#popup')
		const exitBtn = this.popup.querySelector('.button [data-exit]')

		if (exitBtn) {
			exitBtn.addEventListener('click', () => this.closePopup)
		}
		this.openPopup()
		console.log(element)
		console.log(this.popup)

		return this
	}

	openPopup() {
		this.popup.classList.add('active')
	}

	closePopup() {
		this.popup.classList.add('remove')
	}
}

export default new BasePopup()
