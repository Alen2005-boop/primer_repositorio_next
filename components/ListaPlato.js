'use client'

import { useEffect , useState } from "react";
import { getPlato } from "../api/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ListadoPlatosComponent = () => {

    const [platos , setPlatos] = useState([]);

    const [name , setName] = useState("");
    const [category , setCategory] = useState("");
    const [localId , setLocalId] = useState("");
    const [city , setCity] = useState("");
    const [price , setPrice] = useState("");


    //     useEffect(() => {

    //     const user = localStorage.getItem("user");

    //     if(user){
    //       setUser(JSON.parse(user));
    //     const token = localStorage.getItem("token");
    //     console.log("Usuario en Listado Platos" , user);
    //     console.log("Token en Listado Platos" , token);
    //     setToken(token);
    //     }else{
    //       router.push("/");
    //     }
      
    // }, [])

    useEffect(() => {

        const fetchPlatos = async () => {

            const data = await getPlato(name, category, localId, city, price);

            setPlatos(data.items);
        }

        fetchPlatos();

    },[name, category, localId, city, price]);



  return(
   <div className="bg-white">
    {/* {user &&  */}
    
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 mb-7 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm/6 font-semibold text-gray-900">
              category
            </label>
            <div className="mt-2.5">
              <input
                id="category"
                name="category"
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="localId" className="block text-sm/6 font-semibold text-gray-900">
              Local
            </label>
            <div className="mt-2.5">
              <input
                id="localId"
                name="localId"
                type="text"
                autoComplete="given-localId"
                onChange={(e) => setLocalId(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm/6 font-semibold text-gray-900">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="city"
                name="city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
           <div>
            <label htmlFor="price" className="block text-sm/6 font-semibold text-gray-900">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="price"
                name="price"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
                
          </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado Platos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {platos.map((plato) => (
            <div key={plato.id} className="group relative">
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/DetallePlato/${plato.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {plato.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{plato.city}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{plato.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* } */}
    </div>
    );

}

export default ListadoPlatosComponent;