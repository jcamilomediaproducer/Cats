const URI = "https://api.thecatapi.com/v1/breeds";

const fetchBreeds = async () => {

const response = await fetch(URI);

const data =await  response.json();

return data;





};


const viewBreeds = async ()=>{

    const response = await fetchBreeds();
    console.log (response);
    const selectorBreeds= document.querySelector(".List-breeds");
    const filterBreeds = response.filter(
    (cat)=>
     cat.name ==="Bengal"||
     cat.name ==="Savannah"||
     cat.name ==="Norwegian Forest Cat"||
     cat.name ==="Selkirk Rex"
     );


filterBreeds.map(
(cat)=>(selectorBreeds.innerHTML += `
<li>
<img width="200px" src="${cat.image.url}" />
<p>${cat.name}</p>
</li>`)
   );

};


viewBreeds();


