const urlold1="https://reqres.in/api/users?page=2";
const urlold2="http://localhost:3000/users";
const url="http://first-appse.herokuapp.com/users";
const urldaleka="http://daleka.herokuapp.com/users";
const urlasi="http://firstmysait.herokuapp.com/users";

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
                await axios.delete(url+'/'+id)
            }
        },
        async editUser(index) {
            let id = this.results[index].id
            let newData = this.results[index]
            if(this.password === null) alert("введите пароль")

            newUser = {
                first_name: newData.first_name,
                last_name: newData.last_name,
                password: newData.password,
                avatar: newData.avatar,
            };
            await axios.put(url + "/" + id, newUser)
            alert("User edited id:" + id);
        },
        async createNewUser() {
            if(this.newUser.first_name === null || this.newUser.last_name === null || this.newUser.password === null || this.newUser.avatar === null){
                alert("заполните все данные")
            }
            else{
                alert("новый пользователь создан")
                console.log(this.user);
                await axios.post(url,this.newUser).then(res => {
                    console.log(res.body);
                })
                
            }
        },
        async getUserById(index){
            let id = this.results[index].id
            this.results.splice(index,1)
            await axios.get(url+'/'+id).then(res => newUser=res.data);
            //await axios.get("http://localhost:3000/users/"+ViewUsers.getElementById("indexid").value)
        }
    }
});
