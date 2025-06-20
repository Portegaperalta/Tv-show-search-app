// DOM variables

const body = document.querySelector('body')
const searchShowForm = document.querySelector('#headerSearchForm')
const searchShowBtn = document.querySelector('#searchBtn')
const searchInput = document.querySelector('#searchShowInput')
const mainContainer = document.querySelector('.main-container')
const featuredSection = document.querySelector('.featured-today')
const featuredSectionShows = document.querySelector('featured-today-shows')
const searchResultSection = document.querySelector('search-results')
const searchResults = document.querySelector('#searchResultShows')
const premiereSection = document.querySelector('.premieres-annoucements')

// TV API functions

const GetTvShows = async (searhInput) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`)
        const shows = res.data
        searchResults.innerHTML = ''
        for (show of shows) {
            const newImg = document.createElement('img')
            searchResults.append(newImg)
            newImg.src = `${show.show.image.medium}`
        }
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
}

//DOM Event listeners

searchShowForm.addEventListener('submit', (e) => {
    e.preventDefault()
    GetTvShows(searchInput.value)

    featuredSection.classList.add('hidden')
    premiereSection.classList.add('hidden')
})