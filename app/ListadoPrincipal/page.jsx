const restaurantes = [
  {
    id: 1,
    nombre: "La Parrillada del Centro",
    imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    zona: "Montevideo Centro",
    tipo: "Parrilla",
    precio: "$$$",
    rating: 4.5,
  },
  {
    id: 2,
    nombre: "Café del Puerto",
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    zona: "Ciudad Vieja",
    tipo: "Cafetería",
    precio: "$$",
    rating: 4.2,
  },
]

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Restaurantes destacados
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurantes.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Imagen */}
            <img
              src={r.imagen}
              alt={r.nombre}
              className="w-full h-56 object-cover"
            />

            {/* Contenido */}
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-gray-800">
                  {r.nombre}
                </h2>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-semibold">
                  ⭐ {r.rating}
                </span>
              </div>

              <p className="text-gray-500 mt-2">
                {r.tipo} • {r.zona}
              </p>

              <p className="mt-2 text-gray-700 font-medium">
                Precio: {r.precio}
              </p>

              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 2,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
//     imageAlt: "Front of men's Basic Tee in white.",
//     price: '$35',
//     color: 'Aspen White',
//   },
//   {
//     id: 3,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
//     imageAlt: "Front of men's Basic Tee in dark gray.",
//     price: '$35',
//     color: 'Charcoal',
//   },
//   {
//     id: 4,
//     name: 'Artwork Tee',
//     href: '#',
//     imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
//     imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
//     price: '$35',
//     color: 'Iso Dots',
//   },
// ]

// export default function Example() {
//   return (
//     <div className="bg-white min-h-screen">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <img
//                 alt={product.imageAlt}
//                 src={product.imageSrc}
//                 className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//               />
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={product.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
