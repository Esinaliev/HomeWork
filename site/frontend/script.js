const url1="https://reqres.in/api/users?page=2";
const url="http://localhost:3000/users";

const vm=new Vue({
    el: "#app",
    data:{
        results: []
    },
    mounted(){
        axios.get(url).then(res => { this.results=res.data; });
    },
    methods:{
        async deleteById(index) {
            let id = this.results[index].id
            //if(confirm('deleted ' + id)){
                this.results.splice(index,1)
                await axios.delete("http://localhost:3000/users/" + id)
            //}
        },
        async editById(index) {
            alert('not work')
            //await axios.delete("http://localhost:3000/users/" + id)
        }
    }
});
