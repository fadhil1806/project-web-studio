async function getDataApiClassVideo() {
    const response = await fetch('/assets/json/data.json')
    const data = await response.json()

    // console.log(data)

    //mengambil url search
    const getUrl = window.location.search
    console.log(getUrl)

    //variabel menampung search manipulation //sehingga kita bisa mengubah dan mendapatkan
    const urlParams = new URLSearchParams(getUrl)

    //variabel untuk mendapatkan query
    const getQuery = urlParams.get('query')


    //filter untuk title sesuai dengan query 
    const classVideoFilter = data.classVideo.filter((coba) => coba.title === getQuery)

    //sehinga hasil output nya sesuai dengan query yang kita punya
    console.log(classVideoFilter)
    classVideoFilter.forEach(index => {
        document.getElementById('textTitle').textContent = index.title
        document.getElementById('textDescription').textContent = index.description
        document.getElementById('textLevel').textContent = index.level
        document.getElementById('textDuration').textContent = index.duration
        document.getElementById('textMember').textContent = index.member



        document.getElementById('videoClass').src = index.image[3]

        
        
    })
    

}

getDataApiClassVideo()



