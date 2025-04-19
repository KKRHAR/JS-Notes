
async function fetchData(){
try {
    
    const response = await fetch('htt://jsonplaceholder.typicode.com/users');
    if(response.ok){
        console.log("Hurray");
        
  
    }  const data = await response.json();
    console.log(data);
    

    
} catch (error) {
    console.error("There is a error",error);
}


}
fetchData();





  

