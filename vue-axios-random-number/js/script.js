// Tramite una chiamata ad una API, 
// stampiamo a schermo un numero casuale.
var app = new Vue(
    {
        el: '#root',
        data: {
            randomNumber: null
        },
        methods: {
            getRandomNumberFromApi() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then((response) => {
                    this.randomNumber = response.data.response;
                });
            }
        },
        mounted() {
            this.getRandomNumberFromApi();
        }
    }
);