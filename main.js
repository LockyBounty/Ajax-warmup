let blockquote = document.getElementById("quote");
let spiritData; //<--- variable qui va recueillir les donnees

// Create the XHR Object
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/api', true)
//call the onload 
xhr.onload = function () {
    //check if the status is 200(means everything is okay)
    if (this.status === 200) {
        //return server response as an object with JSON.parse
        console.log(JSON.parse(this.responseText));
        spiritData = JSON.parse(this.responseText); //<--recueille les donnees

    }
    loadtext(); //<--- Si on le fait en dehors de la fonction, on ne va pas pouvoir utiliser les donnees 
}
//call send
xhr.send();

let loadtext=()=> {
    blockquote.innerHTML = `"${spiritData.quote}" <br /> ${spiritData.author} `;
}


// Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN
//----------------------------------------------// Method 2
// call the fetch function
// fetch('https://thatsthespir.it/api')
//     .then(res => res.json()) //response type
//     .then(data => console.log(data)); //log the data;
//    
    
// //-------------------------------------------// Method 3

// async function getData() {
//     //await the response of the fetch call
//     let response = await fetch('https://thatsthespir.it/api');
//     //proceed once the first promise is resolved.
//     let data = await response.json()
//     //proceed only when the second promise is resolved
//     return data;
// }
// //call getData function
// getData()
//     .then(data => console.log(data)); //log the data
    
    
   