async function getDataApiFilter() {
  const response = await fetch('assets/json/data.json')
  const dataApi = await response.json()

    filterDataApi(dataApi.course)

}
getDataApiFilter()


function updateURL() {
    //ambil data input_user
    
    let searchTerm = document.getElementById('searchInput').value;
    window.open(`search.html?query=${searchTerm}`, '_self')
   
    
}


filterDataApi = (data) => {
  // console.log(data)
}

// const queryString = window.location.search
// console.log(queryString)

// const urlParams = new URLSearchParams(queryString)

// const cobaDapatkanQuery = urlParams.get('query')
// console.log(cobaDapatkanQuery)

// const text = 'hallo, saya menggunakan javascript'

// const findText = text.indexOf('menggunakan')

// console.log(findText)




const text = 'hallo, saya menggunakan javascript';
const lengthText = text.length
const startIndex = text.indexOf('saya'); // Mengambil indeks awal dari kata 'saya'
const slicedText = text.slice(startIndex, startIndex + 12); // Mengambil 'saya' (4 karakter)
// console.log(slicedText); // Output: 'saya'

// console.log(lengthText)


var substring = text.substring()
