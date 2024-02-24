// =================================================================
// FETCH USER NAME INITIALS
const fetchUserName =()=>{

    const storedUserName = localStorage.getItem('userName');

    if(storedUserName){
        document.getElementById('userName').innerHTML = storedUserName.charAt(0).toUpperCase()
        document.getElementById('name').innerHTML = storedUserName
    }else{
        const userName = prompt('Enter User Name');

        localStorage.setItem('userName', userName);
        setTimeout(()=>{
            localStorage.removeItem('userName');
        },24*60*60*1000)

        document.getElementById('userName').innerHTML = storedUserName.charAt(0).toUpperCase()
        document.getElementById('name').innerHTML = storedUserName

    }
}
fetchUserName()
// =================================================================