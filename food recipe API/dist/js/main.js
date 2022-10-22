const form = document.querySelector('.form')
let searchQuery = ''

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    searchResults.innerHTML = ''
    searchQuery = e.target.querySelector('input').value
    fetchApi()
})

const searchResults = document.querySelector('.search-results')
const appId = '72cf676f'
const appKey = '159da15f9d564ab7034f71437b189793'


async function fetchApi(){
    fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}&to=20`).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        genarateHtml(data.hits)
    })
}

const genarateHtml = (res) =>{
    let template = ''
    res.map(result=>{
        template += 
        `
        <div class="result-items">
                <div class="tag">
                    <p>${result.recipe.cuisineType}</p>
                </div>
                <div class="result-items-img">
                    <img src="${result.recipe.image}"
                        alt="${result.recipe.label}">
                </div>
                <div class="result-items-text">
                    <div class="heading">
                        <h2>${result.recipe.label}</h2>
                        </div>
                        <ul class="info">
                        <li>
                        Calories : <span>${Math.floor(result.recipe.calories)}</span> calories
                        </li>
                        </ul>
                        </div>
                        <a href="${result.recipe.url}" target="_blank" class="btn-recipe">View Recipe</a>
            </div>
        `
    })
    searchResults.innerHTML += template
}