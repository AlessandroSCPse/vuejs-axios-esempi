// axios.get('https://flynn.boolean.careers/exercises/api/random/int')
// .then(function(response) {
//     const randomNumber = response.data.response;
//     console.log(randomNumber);
// });

// Sintassi breve axios parametri
// axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=50&items=5')
// .then(function(response) {
//     numbersArray = response.data.response;
//     // console.log(response.data.response);
// });

// Sintassi axios parametri tramite oggetto params
const myNumber = 1;
axios.get('https://flynn.boolean.careers/exercises/api/array/integers',
    {
        params: {
            min: 1,
            max: 1000,
            items: 15
        }
    }
)
.then(function(response) {
    numbersArray = response.data.response;
    console.log(response.data.response);
});
