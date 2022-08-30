class NavigationDrawer {
	constructor() {
		self.nav = document.querySelector('nav')
		self.drawer = navDrawerContainer.querySelector('.nav-drawer')
		self.drawerToggler = document.querySelector('nav .nav-drawer-toggler')
		self.drawerContainer = document.querySelector('.nav-drawer-container')
	}

	init(options = {}) {
		if (self.drawerToggler && self.drawerContainer) {
			self.drawerToggler.addEventListener('click', () => self.openDrawer())
		}
	}

	openDrawer() {
		this.drawerExitButton = document.createElement('span')
		this.drawerExitButton.classList.add('nav-drawer-exit')
		this.drawer.appendChild(navDrawerExitButton)
		this.drawerExitButton.innerHTML = '&times;'

		toggleNavDrawer()
		this.awaitExitEvent()

		if (navDrawerContainer.classList.contains('active')) {
			navDrawerContainer.addEventListener('click', closeNavDrawer)
		}
	}

	closeDrawer({ target, currentTarget }) {
		if (target === currentTarget) {
			this.drawer.removeChild(navDrawerExitButton)
			this.toggleNavDrawer()
		}
		// navDrawer.addEventListener('click', ({ target, currentTarget }) => {})
	}
	toggleNavDrawer() {
		this.drawerContainer.classList.toggle('active')
		this.drawer.classList.toggle('opened')
	}

	awaitExitEvent() {
		this.drawerExitButton.onclick = () => {
			navDrawer.removeChild(navDrawerExitButton)
			toggleNavDrawer()
		}
	}
}

// document.body.addEventListener('click', closeNavDrawer)
