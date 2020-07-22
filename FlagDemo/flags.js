var app = new Vue({
    el: '#app',
    data: {
        countries: [],
        selected: 0,
        flagfile: "",
    },
    mounted: function () {
        axios.get(
            'http://developer.kensnz.com/getcountrydata')
            .then(response => (this.countries = response.data))
            .catch((error) => {
                this.countries = "Data not available";
                console.log(error);
            })
    },
    methods: {
        altimage: function (e) {
            //alert("err");
            e.target.src = "flags/blank.gif";
        },

        index: function() {
            //console.log(this.selected);
            return this.countries.findIndex(country => country.Code == this.selected);
        },

        findImage: function(){
            this.flagfile = "flags/" + this.countries[this.index()].Code + ".gif";
            //console.log(this.flagfile);
        }


    },
    
});