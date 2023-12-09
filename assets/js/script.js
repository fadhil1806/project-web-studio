async function getDataApi() {
    const response = await fetch('assets/json/data.json')
    const dataApi = await response.json()

    getDataApiImageHero(dataApi.heroImage)

    dataApi.course.forEach(dataIndex => {
        getDataApiCourse(dataIndex.image, dataIndex.title, dataIndex.description, dataIndex.kelas, dataIndex.icon)
    })
}
getDataApi()

//hero-image 

async function getDataApiImageHero(image) {
    const containerHeroImage = document.getElementById('hero-img')

    const createImgHero = document.createElement('img')
    createImgHero.src = image
    createImgHero.classList.add('img-fluid','rounded')

    containerHeroImage.appendChild(createImgHero)
}

getDataApiCourse = (image, title, description, kelas) => {
    
    const row_card = document.querySelector('#row_card')

    
    const col_content_card = document.createElement('div')
    col_content_card.classList.add('col-sm-6', 'col-md-6', 'col-lg-4', 'col-xxl-3')

    //div card
    const card = document.createElement('div')
    card.classList.add('card')

    //div card image
    const cardImage = document.createElement('img')
    cardImage.src = image
    cardImage.classList.add('card-img-top')

    //container first card
    const card_body_first = document.createElement('div')
    card_body_first.classList.add('card-body')

    const content_title_card_h5 = document.createElement('h5')
    content_title_card_h5.textContent = title

    const content_title_card_p = document.createElement('p')
    content_title_card_p.textContent = description

    //container second card

    const card_body_second = document.createElement('div')
    card_body_second.classList.add('card-body')

    //container second card first
    const container_card_second_first = document.createElement('div')
    container_card_second_first.classList.add('d-flex', 'justify-content-between')

    const content_class_first = document.createElement('a')
    content_class_first.textContent = kelas[0]

    const content_class_second = document.createElement('a')
    content_class_second.textContent = kelas[1]

    
    //container second card second
    const container_card_second_second = document.createElement('div')
    container_card_second_second.classList.add('my-2')

    const content_card_btn = document.createElement('a')
    content_card_btn.textContent = 'Lihat kelas'
    content_card_btn.classList.add('btn', 'btn-outline-warning', 'd-block')

    container_card_second_second.appendChild(content_card_btn)

    row_card.appendChild(col_content_card)
    col_content_card.appendChild(card)

    card.appendChild(cardImage)
    card.appendChild(card_body_first)
    card.appendChild(card_body_second)

    card_body_first.appendChild(content_title_card_h5)
    card_body_first.appendChild(content_title_card_p)

    card_body_second.appendChild(container_card_second_first)
    card_body_second.appendChild(container_card_second_second)

    container_card_second_first.appendChild(content_class_first)
    container_card_second_first.appendChild(content_class_second)

}

