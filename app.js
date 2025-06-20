// DOM variables

const body = document.querySelector('body')
const searchShowForm = document.querySelector('#headerSearchForm')
const searchShowBtn = document.querySelector('#searchBtn')
const searchInput = document.querySelector('#searchShowInput')
const mainContainer = document.querySelector('.main-container')
const featuredSection = document.querySelector('#featuredToday')
const featuredSectionShows = document.querySelector('#featuredTodayShows')
const searchResultSection = document.querySelector('#searchResults')
const searchResults = document.querySelector('#searchResultShows')
const searchResultsTitle = document.querySelector('.search-results h2')
const premiereSection = document.querySelector('#premieresAnnoucements')
const premiereSectionShows = document.querySelector('#premieresAnnoucementsShows')

// featured shows function

const displayFeaturedShows = async () => {
    try {
        const res = await axios.get('https://api.tvmaze.com/shows?page=2')
        const featuredShows = res.data
        for (let i = 0; i < 7; i++) {

            const newDiv = document.createElement('div')
            const ratingDiv = document.createElement('div')
            const newImg = document.createElement('img')
            const showTitle = document.createElement('a')
            const showRating = document.createElement('p')

            newDiv.classList.add('result-show')
            showTitle.classList.add('result-show-name')
            newImg.classList.add('result-show-image')
            ratingDiv.classList.add('result-show-rating')
            showRating.classList.add('result-show-rating-text')

            featuredSectionShows.append(newDiv)
            newDiv.append(newImg)
            newDiv.append(showTitle)
            newDiv.append(ratingDiv)
            ratingDiv.append(showRating)

            newImg.src = `${featuredShows[i].image.medium}`
            showTitle.innerText = featuredShows[i].name
            showTitle.href = featuredShows[i].officialSite
            showRating.innerHTML = `<p><i class = "fa-solid fa-star"></i>${featuredShows[i].rating.average}</p>`
        }
    } catch (error) {
        console.log(error)
    }
}

displayFeaturedShows()

const displayPremiereShows = async () => {
    try {
        const res = await axios.get('https://api.tvmaze.com/shows?page=4')
        const premiereShows = res.data
        for (let i = 0; i < 7; i++) {

            const newDiv = document.createElement('div')
            const ratingDiv = document.createElement('div')
            const newImg = document.createElement('img')
            const showTitle = document.createElement('a')
            const showRating = document.createElement('p')

            newDiv.classList.add('result-show')
            showTitle.classList.add('result-show-name')
            newImg.classList.add('result-show-image')
            ratingDiv.classList.add('result-show-rating')
            showRating.classList.add('result-show-rating-text')

            premiereSectionShows.append(newDiv)
            newDiv.append(newImg)
            newDiv.append(showTitle)
            newDiv.append(ratingDiv)
            ratingDiv.append(showRating)

            newImg.src = `${premiereShows[i].image.medium}`
            showTitle.innerText = premiereShows[i].name
            showTitle.href = premiereShows[i].officialSite
            showRating.innerHTML = `<p><i class = "fa-solid fa-star"></i>${premiereShows[i].rating.average}</p>`
        }
    } catch (error) {
        console.log(error)
    }
}

displayPremiereShows()

// Search shows functions

const searchTvShows = async (searhInput) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`)
        const shows = res.data
        searchResults.innerHTML = ''
        for (show of shows) {

            const newDiv = document.createElement('div')
            const ratingDiv = document.createElement('div')
            const newImg = document.createElement('img')
            const showTitle = document.createElement('a')
            const showRating = document.createElement('p')

            newDiv.classList.add('result-show')
            showTitle.classList.add('result-show-name')
            newImg.classList.add('result-show-image')
            ratingDiv.classList.add('result-show-rating')
            showRating.classList.add('result-show-rating-text')

            searchResults.append(newDiv)
            newDiv.append(newImg)
            newDiv.append(showTitle)
            newDiv.append(ratingDiv)
            ratingDiv.append(showRating)


            newImg.src = `${show.show.image.medium}`
            showTitle.innerText = show.show.name
            showTitle.href = show.show.officialSite
            showRating.innerHTML = `<p><i class = "fa-solid fa-star"></i>${show.show.rating.average}</p>`

        }
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
}

// Event listeners

searchShowForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchTvShows(searchInput.value)
    searchResultSection.classList.remove('hidden')
    searchResultsTitle.innerHTML = `Search: ${searchInput.value}`
    featuredSection.classList.add('hidden')
    premiereSection.classList.add('hidden')
})