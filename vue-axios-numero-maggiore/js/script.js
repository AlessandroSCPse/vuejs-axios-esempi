// Tramite due chiamate axios, generiamo 2 numeri 
// casuali: uno per l'utente e uno per il pc. 
// Stampiamo in pagina i due numeri e il vincitore, 
// ossia chi ha il numero più grande.
var app = new Vue(
    {
        el: '#root',
        data: {
            userNumber: null,
            computerNumber: null
        },
        methods: {
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                this.userNumber = response.data.response;
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                this.computerNumber = response.data.response;
            });
        }
    }
);