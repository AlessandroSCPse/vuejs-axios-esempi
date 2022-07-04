// Tramite una chiamata axios
// prendere un array di 7 numeri compresi tra 1 e 20
// e stamparli in pagina
var app = new Vue(
    {
        el: '#root',
        data: {
            numbersArray: []
        },
        methods: {
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=20&items=7')
            .then((response) => {
                this.numbersArray = response.data.response;
            });

            // axios.get('https://flynn.boolean.careers/exercises/api/array/integers',
            //     {
            //         params: {
            //             min: 1,
            //             max: 20,
            //             items: 7
            //         }
            //     }
            // )
            // .then((response) => {
            //     this.numbersArray = response.data.response;
            // });
        }
    }
);