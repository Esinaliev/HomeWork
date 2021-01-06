const url="https://reqres.in/api/users?page=2";
const vm=new Vue({
    el: "#app",
    data:{
        results: [],
        msg:"Hello"
    },
    mounted(){
        axios.get(url).then(res => {
            this.results=res.data.data;
        });
    }
});