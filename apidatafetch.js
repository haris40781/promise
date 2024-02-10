async function getAllUsers(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let jsonData = await response.json()
        // console.log(jsonData);
        document.write(JSON.stringify(jsonData))
    }
    catch(error){
        console.log("ERROR");
    }
}

getAllUsers()