const products = [
    {
      id: 1,
      title: "Anillo de plata",
      price: 9999,
      image: "./public/anillo.jpg",
      stock: 5,
    },
    {
        id: 1,
        title: "Anillo de plata",
        price: 9999,
        image: "./public/anillo.jpg",
        stock: 5,
    },
    {
        id: 1,
        title: "Anillo de plata",
        price: 9999,
        image: "./public/anillo.jpg",
        stock: 5,
    },
    {
        id: 1,
        title: "Anillo de plata",
        price: 9999,
        image: "./public/anillo.jpg",
        stock: 5,
    },
    {
        id: 1,
        title: "Anillo de plata",
        price: 9999,
        image: "./public/anillo.jpg",
        stock: 5,
    },
    {
        id: 1,
        title: "Anillo de plata",
        price: 9999,
        image: "./public/anillo.jpg",
        stock: 5,
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };