//LOS CELULARES QUE HAY A LA VENTA

const motorola= [
  {id: 5,nombre:"Motorola Edge 30 Pro",precio:120000, img:"https://authogar.vtexassets.com/arquivos/ids/183519/moto-edge-30-pro-3.png?v=638008368851200000"},
  {id: 6,nombre:"Motorola E20",precio:37000, img:"https://microhardazul.com.ar/wp-content/uploads/2022/03/motorola-moto-e20-2gb-32gb-dual-sim-gris.jpg"},
  {id: 7, nombre:"Motorola E32",precio:50000, img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2878_e32_plata.png?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"},
  {id: 8,nombre:"Motorola G32",precio:63000, img:"https://http2.mlstatic.com/D_NQ_NP_822151-MLA52595222144_112022-O.jpg"},
  {id: 9,nombre:"Motorola Edge 30",precio:105000, img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/170/953/products/405828-11-1c494144b451776d5716657531537875-640-0.jpg"},
  {id: 10,nombre:"Motorola G52" ,precio:70000, img:"https://www.mgmstore.com.ar/1363-large_default/Motorola-Moto-G52-128GB.jpg"},
  {id: 11,nombre:"Motorola E7 Plus" ,precio:25000, img:"https://http2.mlstatic.com/D_NQ_NP_712792-MLA44001849091_112020-O.webp"},
  {id: 12,nombre:"Motrola G82" ,precio:90000, img:"https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000054000/31923_3.webp"},
];

const samsung=[
{id: 13, nombre: "Samsung Galaxy S20 Fe 5G", precio: 90000, img:"https://offlinetecnologia.com.ar/3647-large_default/8806094338683.jpg"},
{id: 14, nombre:"Samsung Galaxy M13", precio: 59000, img:"https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-m135_galaxy-m13_light-blue_front_raw_rgb-lte.png?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"},
{id: 15, nombre:"Samsung Galaxy A32", precio:41000, img:"https://http2.mlstatic.com/D_NQ_NP_793841-MLA45658507914_042021-O.jpg"},
{id: 16, nombre:"Samsung Galaxy A03", precio: 50000,img:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/celular-samsung-galaxy-a03-2gb32gb-blue-0.jpg"},
{id: 17, nombre:"Samsung Galaxy A53 5G", precio:148000,img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/664/621/products/screenshot_1-removebg-preview21-1440bb616925b0e4c416531744453348-640-0.png"},
{id: 18, nombre:"Samsung Galaxy S22", precio:200000,img:"https://images.samsung.com/is/image/samsung/p6pim/es/2202/gallery/es-galaxy-s22-s901-sm-s901bzkdeub-530861557?$650_519_PNG$"},
{id: 19, nombre:"Samsung Galaxy S21 Fe", precio:180000,img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990elvaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990elvaaro-thumb-530831998"},
{id: 20, nombre:"Samsung Galaxy A71", precio:62000,img:"https://www.estilonet.com.ar/wp-content/uploads/samsung-galaxy-a71-a715-6gb-ram-128gb-dual-sim-azul.jpg"},
];

const xiaomi=[
{id: 21, nombre: "Xiaomi Redmi Note 11", precio: 80000,img:"https://cdn-xiaomi.waugi.com.ar/1012-thickbox_default/redmi-note-11-4gb-ram-128gb-rom.jpg"},
{id: 22, nombre: "Xiaomi Redmi 9C", precio: 43500,img:"https://http2.mlstatic.com/D_NQ_NP_747983-MLA43684142871_102020-O.jpg"},
{id: 23, nombre: "Xiaomi Pocophone X4 Pro 5G", precio: 154000,img:"https://http2.mlstatic.com/D_NQ_NP_782725-MLA49423195235_032022-O.jpg"},
{id: 24, nombre: "Xiaomi Mi 11T", precio: 280000,img:"https://cdn-xiaomi.waugi.com.ar/1655-thickbox_default/xiaomi-11t-8gb-ram-256gb-rom.jpg"},
{id: 25, nombre: "Xiaomi Redmi 9A", precio: 40500,img:"https://www.qloud.ar/SITES/ryr/fotos/19455-0.jpg"},
{id: 26, nombre: "Xiaomi Redmi 10", precio: 78000,img:"https://images.fravega.com/f500/2f50e4d013d6b97ba1e0aaafbd9b3bc1.jpg"},
{id: 27, nombre: "Xiaomi Redmi 10C", precio: 69000,img:"https://http2.mlstatic.com/D_NQ_NP_854668-MLA50342489684_062022-O.jpg"},
{id: 28, nombre: "Xiaomi Pocophone M4 Pro 5G", precio: 150000,img:"https://http2.mlstatic.com/D_NQ_NP_822782-MLA50131180858_052022-O.jpg"},
{id: 29, nombre: "Xiaomi 12 Pro", precio: 340000, img:"https://http2.mlstatic.com/D_NQ_NP_726939-MLA52514423471_112022-V.jpg"},
]

const iphone=[
{id: 30, nombre:"iphone 13", precio:368000,img:"https://cuyodigital.com/cuyo/wp-content/uploads/2021/11/iphone-13-pink-select-2021.png"},
{id: 31, nombre:"iphone 11", precio:276000,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-black-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169026000"},
{id: 32, nombre:"iphone 7 Plus", precio:98500,img:"https://macpower.com.ar/wp-content/uploads/7-plus.jpg"},
{id: 33, nombre:"iphone 14 Pro", precio:600000,img:"https://www.mgmstore.com.ar/1389-large_default/apple-iPhone-14-Pro-128GB.jpg"},
{id: 34, nombre:"iphone 8 Plus", precio:380000,img:"https://media.game.es/COVERV2/3D_L/149/149503.png"},
{id: 35, nombre:"iphone XS", precio:190000,img:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61LQEYVExpL._AC_SL1200_.jpg"},
{id: 36, nombre:"iphone 14", precio:500000, img:"https://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_14/Midnight/carousel/1.jpg"},
];

//LOS CELULARES EN NOVEDADES

const novedades =[
  {id: 21, nombre: "Xiaomi Redmi Note 11", precio: 80000,img:"https://cdn-xiaomi.waugi.com.ar/1012-thickbox_default/redmi-note-11-4gb-ram-128gb-rom.jpg"},
  { nombre: "Samsung Galaxy S20 Fe 5G", precio: 90000, id:1, img: "https://offlinetecnologia.com.ar/3647-large_default/8806094338683.jpg" },
  { nombre: "Iphone 14 ", precio: 300000, id: 2, img:"https://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_14/Midnight/carousel/1.jpg"},
  { nombre:"Xiaomi 12 Pro", precio: 90000,id: 3, img:"https://http2.mlstatic.com/D_NQ_NP_726939-MLA52514423471_112022-V.jpg"},
  {id: 35, nombre:"iphone XS", precio:190000,img:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61LQEYVExpL._AC_SL1200_.jpg"},
  { nombre:"Motorola Edge 30 Pro", precio: 120000, id: 4, img: "https://authogar.vtexassets.com/arquivos/ids/183519/moto-edge-30-pro-3.png?v=638008368851200000"},
  ]
  
  

novedades.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <img src=${item.img} alt="">
    <p>${item.nombre}</p>
    <p>$${item.precio}</p>
    <button>comprar</button>
    
   `;

  Novedades.append(div);
});


const celulares=[
  {id: 5,nombre:"Motorola Edge 30 Pro",precio:120000, img:"https://authogar.vtexassets.com/arquivos/ids/183519/moto-edge-30-pro-3.png?v=638008368851200000"},
  {id: 6,nombre:"Motorola E20",precio:37000, img:"https://microhardazul.com.ar/wp-content/uploads/2022/03/motorola-moto-e20-2gb-32gb-dual-sim-gris.jpg"},
  {id: 7, nombre:"Motorola E32",precio:50000, img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2878_e32_plata.png?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"},
  {id: 8,nombre:"Motorola G32",precio:63000, img:"https://http2.mlstatic.com/D_NQ_NP_822151-MLA52595222144_112022-O.jpg"},
  {id: 9,nombre:"Motorola Edge 30",precio:105000, img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/170/953/products/405828-11-1c494144b451776d5716657531537875-640-0.jpg"},
  {id: 10,nombre:"Motorola G52" ,precio:70000, img:"https://www.mgmstore.com.ar/1363-large_default/Motorola-Moto-G52-128GB.jpg"},
  {id: 11,nombre:"Motorola E7 Plus" ,precio:25000, img:"https://http2.mlstatic.com/D_NQ_NP_712792-MLA44001849091_112020-O.webp"},
  {id: 12,nombre:"Motrola G82" ,precio:90000, img:"https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000054000/31923_3.webp"},
  {id: 13, nombre: "Samsung Galaxy S20 Fe 5G", precio: 60000, img:"https://offlinetecnologia.com.ar/3647-large_default/8806094338683.jpg"},
  {id: 14, nombre:"Samsung Galaxy M13", precio: 59000, img:"https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-m135_galaxy-m13_light-blue_front_raw_rgb-lte.png?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"},
  {id: 15, nombre:"Samsung Galaxy A32", precio:41000, img:"https://http2.mlstatic.com/D_NQ_NP_793841-MLA45658507914_042021-O.jpg"},
  {id: 16, nombre:"Samsung Galaxy A03", precio: 50000,img:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/celular-samsung-galaxy-a03-2gb32gb-blue-0.jpg"},
  {id: 17, nombre:"Samsung Galaxy A53 5G", precio:148000,img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/664/621/products/screenshot_1-removebg-preview21-1440bb616925b0e4c416531744453348-640-0.png"},
  {id: 18, nombre:"Samsung Galaxy S22", precio:200000,img:"https://images.samsung.com/is/image/samsung/p6pim/es/2202/gallery/es-galaxy-s22-s901-sm-s901bzkdeub-530861557?$650_519_PNG$"},
  {id: 19, nombre:"Samsung Galaxy S21 Fe", precio:180000,img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990elvaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990elvaaro-thumb-530831998"},
  {id: 21, nombre: "Xiaomi Redmi Note 11", precio: 80000,img:"https://cdn-xiaomi.waugi.com.ar/1012-thickbox_default/redmi-note-11-4gb-ram-128gb-rom.jpg"},
  {id: 22, nombre: "Xiaomi Redmi 9C", precio: 43500,img:"https://http2.mlstatic.com/D_NQ_NP_747983-MLA43684142871_102020-O.jpg"},
  {id: 23, nombre: "Xiaomi Pocophone X4 Pro 5G", precio: 154000,img:"https://http2.mlstatic.com/D_NQ_NP_782725-MLA49423195235_032022-O.jpg"},
  {id: 24, nombre: "Xiaomi Mi 11T", precio: 280000,img:"https://cdn-xiaomi.waugi.com.ar/1655-thickbox_default/xiaomi-11t-8gb-ram-256gb-rom.jpg"},
  {id: 25, nombre: "Xiaomi Redmi 9A", precio: 40500,img:"https://www.qloud.ar/SITES/ryr/fotos/19455-0.jpg"},
  {id: 26, nombre: "Xiaomi Redmi 10", precio: 78000,img:"https://images.fravega.com/f500/2f50e4d013d6b97ba1e0aaafbd9b3bc1.jpg"},
  {id: 27, nombre: "Xiaomi Redmi 10C", precio: 69000,img:"https://http2.mlstatic.com/D_NQ_NP_854668-MLA50342489684_062022-O.jpg"},
  {id: 28, nombre: "Xiaomi Pocophone M4 Pro 5G", precio: 150000,img:"https://http2.mlstatic.com/D_NQ_NP_822782-MLA50131180858_052022-O.jpg"},
  {id: 29, nombre: "Xiaomi 12 Pro", precio: 340000, img:"https://http2.mlstatic.com/D_NQ_NP_726939-MLA52514423471_112022-V.jpg"},{id: 20, nombre:"Samsung Galaxy A71", precio:62000,img:"https://www.estilonet.com.ar/wp-content/uploads/samsung-galaxy-a71-a715-6gb-ram-128gb-dual-sim-azul.jpg"},
  {id: 30, nombre:"iphone 13", precio:368000,img:"https://cuyodigital.com/cuyo/wp-content/uploads/2021/11/iphone-13-pink-select-2021.png"},
  {id: 31, nombre:"iphone 11", precio:276000,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-black-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169026000"},
  {id: 32, nombre:"iphone 7 Plus", precio:98500,img:"https://macpower.com.ar/wp-content/uploads/7-plus.jpg"},
  {id: 33, nombre:"iphone 14 Pro", precio:600000,img:"https://www.mgmstore.com.ar/1389-large_default/apple-iPhone-14-Pro-128GB.jpg"},
  {id: 34, nombre:"iphone 8 Plus", precio:380000,img:"https://media.game.es/COVERV2/3D_L/149/149503.png"},
  {id: 35, nombre:"iphone XS", precio:190000,img:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61LQEYVExpL._AC_SL1200_.jpg"},
  {id: 36, nombre:"iphone 14", precio:500000, img:"https://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_14/Midnight/carousel/1.jpg"},
];

const carrito=[];


celulares.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <img src=${producto.img} alt="">
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    <button id="agregar${producto.id}">comprar</button>
    `

  todoCelulares.append(div);
  
  

  const boton = document.getElementById('agregar${producto.id}')  

  console.log(boton)

    boton.addEventListener('click',() => {
      agregarAlCarrito(producto.id)
    })
})


const agregarAlCarrito = (proId) => {
  const item = celulares.find((prod) => prod.id === prodId)
  carrito.push(item)
  console.log(carrito)
};












