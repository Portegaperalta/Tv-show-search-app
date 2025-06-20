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
const searchResultsTitle = document.querySelector('.search-results h2')
const premiereSection = document.querySelector('.premieres-annoucements')

// TV API functions

const GetTvShows = async (searhInput) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`)
        const shows = res.data
        searchResults.innerHTML = ''
        for (show of shows) {

            const newDiv = document.createElement('div')
            const ratingDiv = document.createElement('div')
            const newImg = document.createElement('img')
            const newTitle = document.createElement('a')
            const showRating = document.createElement('p')

            newDiv.classList.add('result-show')
            newTitle.classList.add('result-show-name')
            ratingDiv.classList.add('result-show-rating')
            showRating.classList.add('result-show-rating-text')

            searchResults.append(newDiv)
            newDiv.append(newImg)
            newDiv.append(newTitle)
            newDiv.append(ratingDiv)
            ratingDiv.append(showRating)


            newImg.src = `${show.show.image.medium}`
            newTitle.innerText = show.show.name
            newTitle.href = show.show.officialSite
            showRating.innerHTML = `<p><i class = "fa-solid fa-star"></i>${show.show.rating.average}</p>`

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
    searchResultsTitle.innerHTML = `Search: ${searchInput.value}`
    featuredSection.classList.add('hidden')
    premiereSection.classList.add('hidden')
})