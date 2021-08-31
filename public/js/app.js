console.log('client side is up and running');
const searchForm = document.querySelector('form');
const search = document.querySelector('input');
const button = document.querySelector('button');
const results = document.getElementById('results');


button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(search.value);
    fetch(`http://localhost:3000/weather?address=${search.value}`)
        .then(res => {
            res.json().then(data => {
                if (data.error) {
                    results.innerHTML = data.error;
                } else {

                    results.innerHTML = data.forecastData;
                }
            })
        })
        .catch(error => console.log(error));

})

// searchForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     console.log('Ive been clicked',searchForm);
// })

