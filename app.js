const body = document.querySelector('body')
const searchShowBtn = document.querySelector('#searchBtn')
const searchInput = document.querySelector('#searchShowInput')
const mainContainer = document.querySelector('.main-container')
const featuredSection = document.querySelector('.featured-today')
const premiereSection = document.querySelector('.premieres-annoucements')

// New elements

const newP = document.createElement('p')
const newImg = document.createElement('img')

// TV API 

const url = 'https://api.tvmaze.com/search/shows'

const fetchTv = async () => {
    try {
        const res = await axios.get(url)
        console.log(res)
    }
    catch (error) {
        console.log(error)
    }

}

fetchTv()