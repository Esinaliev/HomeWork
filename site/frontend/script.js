const url1="https://reqres.in/api/users?page=2";
const url="http://localhost:3000/users";

const vm=new Vue({
    el: "#app",
    data:{
        results: [],
        newUser: {
            first_name: null,
            last_name: null,
            password: null,
            avatar: null,
        }
    },
    mounted(){
        axios.get(url).then(res => { this.results=res.data; });
    },
    methods:{
        
        async deleteById(index) {
            let id = this.results[index].id
            if(confirm('deleted ' + id)){
                this.results.splice(index,1)
                await axios.delete("http://localhost:3000/users/" + id)
            }
        },
        async editById(index) {
            alert('not work')
        },
        async createNewUser() {
            if(this.newUser.first_name === null || this.newUser.last_name === null || this.newUser.password === null || this.newUser.avatar === null){
                alert("заполните все данные")
            }
            else{
                console.log(this.user);
                await axios.post(url,this.newUser).then(res => {
                    console.log(res.body);
                })
                
            }
        },
        async getUserById(){
            alert("work?")
            //await axios.get("http://localhost:3000/users/"+ViewUsers.getElementById("indexid").value)
            alert("work?")
        }
    }
});
