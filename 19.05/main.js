function details(){
    window.location.assign('detail.html')
}
async function getAll() {
    return fetch('https://fakestoreapi.com/products?limit=6')
              .then(res=>res.json());       
  }

  async function fetchdata(){
    const bsRight = await getAll();

    console.log(bsRight);
    const products = document.getElementById("bsRight")
    bsRight.forEach(element => {
        products.innerHTML += 
        `
        <div class="plant" onclick="details(${element.id})">
        <img src="${element.image}" alt="">
          <h3>${element.title}</h3>
          <p>${element.price}</p>
        </div>
        `
    });
  }
  function details(id){
    window.location.assign(`detail.html?id=${id}`)
  }