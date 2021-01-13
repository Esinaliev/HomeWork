const url="http://localhost:3000/users";

const register=new Vue({
    el: "#register",
    data:{
        newUser: {
            first_name: null,
            last_name: null,
            password: null,
            avatar: null,
        }
    },
    methods:{
        async createNewUser() {
            alert("aAAAa");
            console.log(this.user);
            await axios.post(url,this.newUser).then(res => {
                console.log(res.body);
            })
        }
    }
});