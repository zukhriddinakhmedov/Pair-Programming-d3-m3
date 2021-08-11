function hideBtn(event) {
    event.target.parentNode.parentNode.parentNode.parentNode.classList.add(
        "d-none"
    );
}

fetch("https://api.pexels.com/v1/search?query=[tiger]", {
    "method": "GET",
    "headers":
        { "Authorization": "563492ad6f917000010000019f190e58d35d4f0d9160a296ac83ba10" }
})
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(body => { insertImgs(body) })
    .catch(error => { console.log(error) })

function insertImgs(photo) {
    let cards = document.querySelectorAll('div.row > div.col-md-4')
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML = `
        <div class="card mb-4 shadow-sm">
                <div class="card-body">
                <img src="${photo.photos[i].src.tiny}" alt="">
                  <p class="card-text">
                  ${photo.photos[i].id}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button onclick="hideBtn(event)"
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
        `
    }
}
const loadImgs = function () {
    fetch("https://api.pexels.com/v1/search?query=[horse]", {
        "method": "GET",
        "headers":
            { "Authorization": "563492ad6f917000010000019f190e58d35d4f0d9160a296ac83ba10" }
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(body => { insertImgs(body) })
        .catch(error => { console.log(error) })
}

const loadImgs2 = function () {
    fetch("https://api.pexels.com/v1/search?query=[mouse]", {
        "method": "GET",
        "headers":
            { "Authorization": "563492ad6f917000010000019f190e58d35d4f0d9160a296ac83ba10" }
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(body => { insertImgs(body) })
        .catch(error => { console.log(error) })
}

