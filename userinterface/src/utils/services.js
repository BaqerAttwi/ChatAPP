export const baseurl= "http://localhost:5000/api"
export const postrequest = async(url , body)=>{
   console.log("body", body);
   const response = await fetch(url, {
    method: "post",
    headers: {
        "Content-Type": "application/json",  // Correct key: "headers" not "header"
    },
    body,
});

       const data = await response.json();

    if(!response.ok){
        let message; 
        if(data?.message){
            message = data.message;
        }else {
            message = data;
        }
        return {error : true, message}
    }

       return data;
}