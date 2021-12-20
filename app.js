const app = Vue.createApp({
   
    data(){
        return{
            loading: false,
            fname: "Shuvo",
            lname: "Dev",
            email: "shuvo@gmail.com",
            gender: "male",
            photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    },
    methods: {
      async  getUser(){
           this.loading = true
           const res = await fetch('https://randomuser.me/api');
           const {results} = await res.json()
           this.loading = false

           console.log(results);

           this.fname = results[0].name.first,
           this.lname = results[0].name.last,
           this.email = results[0].email,
           this.gender = results[0].gender,
           this.photo = results[0].picture.large
        }
    },
})

app.mount("#app")