async function elementNavbar() {
    const nav = document.getElementById('headerNav')
    nav.classList.add('d-flex', 'justify-content-between', 'align-items-center')
    
    //container memuat image
    const contentLogo = document.createElement('div')
    contentLogo.classList.add('mx-4')
    const headerLogo = document.createElement('img')
    headerLogo.src = '/assets/image/logo.png'
    headerLogo.style.height = '80px'
    headerLogo.style.cursor = 'pointer'
    
    const headerUl = document.createElement('ul')
    headerUl.classList.add('d-flex', 'mx-4', 'my-2', 'align-items-center')
    headerUl.style.gap = '30px'
    
    nav.appendChild(contentLogo)
    nav.appendChild(headerUl)
    contentLogo.appendChild(headerLogo)
    
    const menuBar = [`<i class='fa-solid fa-magnifying-glass'></i>`, `Home`, 'Class', 'Contact', 'Sign in', `<i class='fa-solid fa-bars'></i>`]

   
    
    menuBar.forEach(nameMenu => {
        
        const headerLi = document.createElement('li')
        headerLi.style.listStyle = 'none'
        headerLi.style.cursor = 'pointer'
    
        if(nameMenu === `<i class='fa-solid fa-magnifying-glass'></i>`) {
            headerLi.innerHTML = nameMenu
            headerLi.setAttribute('onclick', 'openMenu()')
    
        } else if(nameMenu === `<i class='fa-solid fa-bars'></i>`) {
            headerLi.innerHTML = nameMenu
            headerLi.style.fontSize = '30px'
            headerLi.classList.add( 'd-sm-block', 'd-lg-none', 'd-md-none') 
    
        } else if(nameMenu.toLowerCase() === 'sign in') {  
            headerLi.classList.add('btn', 'btn-outline-success', 'd-none', 'd-sm-none', 'd-md-block')
            headerLi.textContent = nameMenu
    
        } else {
            headerLi.classList.add('d-none', 'd-sm-none', 'd-md-block')
            headerLi.style.fontSize = '18px'
            headerLi.textContent += nameMenu
    
        }
    
        headerUl.appendChild(headerLi)
    })

    
    
createBoxSearch()
}
const containerInput = document.querySelector('#search')

containerInput.classList.add('container')


async function createBoxSearch() {
    const divInputgroup = document.createElement('div')
    divInputgroup.classList.add('input-group', 'mb-3')
    
    const inputSearch = document.createElement('input')
    inputSearch.classList.add('form-control')
    inputSearch.setAttribute('aria-describedby', 'button-addon2')
    inputSearch.setAttribute('placeholder', 'search...')
    inputSearch.id = 'searchInput'

    const btnSearch = document.createElement('button')
    btnSearch.classList.add('btn', 'btn-warning')
    btnSearch.id = 'button-addon2'
    btnSearch.textContent = 'search'
    btnSearch.setAttribute('onclick', 'updateURL()')

    containerInput.appendChild(divInputgroup)
    divInputgroup.appendChild(inputSearch)
    divInputgroup.appendChild(btnSearch)
}

//buka menu search
function openMenu() {
    if(containerInput.style.display === 'none') {
        containerInput.style.display = 'block'
    }else {
        containerInput.style.display = 'none'
    }
}