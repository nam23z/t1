async function getAll() {
    return fetch('https://fakestoreapi.com/products')
              .then(res=>res.json());       
  }

  async function fetchdata(){
    const loaddata = await getAll();

    console.log(loaddata);
    const products = document.getElementById("loaddata")
    loaddata.forEach(element => {
        products.innerHTML += 
        `
        <div class="im">
            <h3>${element.title}</h3>
            <img src="${element.image}" alt="">
            <p>${element.rating.count} cái</p>
            <p>${element.rating.rate}<i class="fa-solid fa-star"></i></p>
            <p>${element.price}$</p>
            <p>${element.description}</p>
        </div>
        `
    });

  }
