class BaseDialog {
	' Dialog Initializer';

	init() {
		this.dialog = document.querySelector('#dialog');
		this.openDialog();
	}

	openDialog() {
		this.dialog.style.display = 'flex';
		this.isOpen = true;
		this.awaitEvent();
	}

	closeDialog() {
		this.dialog.style.display = 'none';
		this.isOpen = false;
	}

	awaitEvent() {
		this.dialog.addEventListener('click', ({ target, currentTarget }) => {
			if (target === currentTarget) return this.closeDialog();
		});
	}
}
