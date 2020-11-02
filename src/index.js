class ApiClient {

    logWorld() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            })
    }

}