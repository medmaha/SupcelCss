class NavSearchBarToggling {
	constructor() {
		this.navSearch = document.querySelector('nav .nav-search')
		this.searchBar = document.querySelector('nav .nav-search input')
		this.searchIcon = document.querySelector('nav .nav-search .search-bar-toggler')
	}

 	init(icon){
		if (!this.searchIcon) return
		this.searchIcon.addEventListener('click', this.toggleSearchBar)
	}

	toggleSearchBar() {
		const navBrand = document.querySelector('nav .nav-brand')
		const searchBar = document.querySelector('nav .nav-search input')
		if (searchBar.style.display === 'none') {
			navBrand.style.display = 'none'
			searchBar.style.display = 'inline'
			searchBar.style.width = "100%"
		} else{
			navBrand.style.display = 'block'
			searchBar.style.display = 'none'
			searchBar.style.width = "0%"
		}
	}
}
