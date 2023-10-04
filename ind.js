const product = [
    {
        id: 1,
        image: 'images/aa- 1.jpg.jpg,'
    title: 'Headphones',
    price: '$20',

  },

{
    id: 2,
        image = 'images/bb-1.jpg.jpg',
        title: 'Rode NT1 microphone',
            price: '$45',
  },


{
    id: 3,
        image: 'images/cc-1.jpg',
            title: 'smart watch',
                price: '$30',
  },

{
    id: 4,
        image: 'images/dd-1.jpg',
            itle: 'HP Laptop Next Genration',
                price: '$70',
},

{
    id: 5,
        image: 'images/ee-1.jpg',
            itle: '250D DSLR camera'
    price: '$60'
    },

    {

    id: 6,
        image: 'images/ff-1-jpg',
        itle: 'Metal Dask Lamp'
        price: '$35'
    },

    {

    id: 7,
        image: 'images/gg-1.jpg',
        itle: 'Z Flip Folder Mobile',
        price: '$55'
    },

    {

    id: 8
    image: 'images/hh-1.jpg',

        itle: 'Air pro',
        rice: '$50'
    },

    ]

    const categories[...new set(product.map((item)=> { return item }))]
    let cart = document.getElementById('root')
    cart.innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
          <div class="img-box">
            <img src= ${image}></img>

          </div>
          <div class="left">  
            <p>${title}</p> 
            <h2>${price}</h2> 
            <button>Add to cart</button>
            </div>
        </div>`
        )
    }).join("")
