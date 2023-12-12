window.onload = function() {
    let request = 'https://swapi.dev/api/films/'

    fetch(request)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let p = document.getElementById('director');
        console.log(data);
        p.innerHTML = JSON.stringify(data.results[3].director);
    })
    
    fetch(request)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let d = document.getElementById('producer');
        d.innerHTML = JSON.stringify(data.results[3].producer);
    })

    fetch(request)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let date = document.getElementById('release');
        date.innerHTML = JSON.stringify(data.results[3].release_date);
    })
    
    
}

