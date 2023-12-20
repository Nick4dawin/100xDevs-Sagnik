const allUsersArray = [{
    firstName: "Sagnik",
    gender: "Male"
},{
    firstName: "Ankita",
    gender : "Female"
}]

for(let i=0;i<allUsersArray.length;i++){
    if(allUsersArray[i].gender == "Male"){
        console.log(allUsersArray[i].firstName)
    }
    else{
        console.log("Go wash dishes")
    }
}

