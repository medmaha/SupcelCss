class NavigationAndDrawer {
	constructor() {
		this.nav = document.querySelector('nav')
		this.drawerToggler = document.querySelector('nav .nav-drawer-toggler')
		this.drawerContainer = document.querySelector('.nav-drawer-container')
		if (!this.drawerToggler || !this.drawerContainer) return

		this.drawer = this.drawerContainer.querySelector('.nav-drawer')
		this.drawerExitButton = document.createElement('span')
		this.drawerExitButton.classList.add('nav-drawer-exit')
		this.drawerExitButton.innerHTML = '&times;'
		this.drawer.appendChild(this.drawerExitButton)
		this.init()
		this.drawerToggler.addEventListener('click', () => this.openDrawer())
	}

	init(options = {}) {}

	openDrawer() {
		this.toggleNavDrawer(true)
		this.awaitExitEvent()
	}

	closeDrawer() {
		this.toggleNavDrawer()
	}

	toggleNavDrawer(add) {
		if (add) {
			this.drawerContainer.classList.add('active')
			this.drawer.classList.add('opened')
			return
		}
		this.drawerContainer.classList.remove('active')
		this.drawer.classList.remove('opened')
	}

	awaitExitEvent() {
		this.drawerContainer.addEventListener('click', ({ target, currentTarget }) => {
			if (target === currentTarget) {
				this.closeDrawer()
			}
		})
		this.drawerExitButton.addEventListener('click', () => {
			this.closeDrawer()
		})
	}
}

class BaseDropdown {
	constructor() {
		this.dropdownTriggers = document.querySelectorAll('.dropdown-trigger')

		this.dropdownTriggers.forEach((trigger) => {
			trigger.addEventListener('click', ({ currentTarget }) => {
				this.init()
				this.appendChild(currentTarget)
				this.activate(currentTarget)
			})
		})
	}

	init() {}

	activate(instance) {
		const dropdownContent = document.querySelector(`#${instance.getAttribute('data-target')}`)
		dropdownContent.classList.toggle('active')
	}

	deactivate() {}

	appendChild(instance) {
		const dropdownContent = document.querySelector(`#${instance.getAttribute('data-target')}`)
		dropdownContent.remove()
		instance.appendChild(dropdownContent)
	}
}

class BaseDialog {
	'Dialog Initializer'

	init(element = Node, options = {}) {
		this.dialog = element
		this.open()
		return this
	}

	open() {
		this.dialog.style.display = 'flex'
		this.awaitExitEvent()
		return this
	}

	close() {
		this.dialog.style.display = 'none'
		this.isOpen = false
		return this
	}

	awaitExitEvent() {
		this.dialog.addEventListener('click', ({ target, currentTarget }) => {
			if (target === currentTarget) return this.close()
		})
	}
}

class BasePopup {
	init(element = Node, options = {}) {
		this.popup = element
		this.open()
		return this
	}

	open() {
		this.popup.classList.add('active')
		this.awaitExitEvent()
		return this
	}

	close() {
		this.popup.classList.remove('active')
		return this
	}

	awaitExitEvent() {
		const exitBtn = this.popup.querySelector('[data-exit]')

		if (exitBtn) {
			exitBtn.addEventListener('click', () => this.close())
		} else {
			throw new Error(
				'Creating popup window without a element/button with data-exit attribute is prohibited! \n\nSee docs for more info http://supcelcss.io ...',
			)
		}
		return this
	}
}

const NavigationBar = new NavigationAndDrawer()
const Dropdown = new BaseDropdown()
const DialogBox = new BaseDialog()
const PopupWindow = new BasePopup()
