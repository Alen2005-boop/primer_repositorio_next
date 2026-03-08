'use client'

import { useEffect , useState } from "react";
import {getLocals} from "../api/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ListadoPrincipalComponent = () => {
    const router = useRouter();
    const [token, setToken] = useState("");
    const [user , setUser] = useState({});
    const [locals , setLocals] = useState([]);
    const [query , setQuery] = useState(""); 
    const [type , setType] = useState("");
    const [priceRange , setPriceRange] = useState("");
    const [rating , setRating] = useState("");
    const [city , setCity] = useState("");
    const [zone , setZone] = useState("");
 





    useEffect(() => {

        const user = localStorage.getItem("user");

        if(user){
          setUser(JSON.parse(user));
        const token = localStorage.getItem("token");
        console.log("Usuario en Listado Principal" , user);
        console.log("Token en Listado Principal" , token);
        setToken(token);
        }else{
          router.push("/");
        }
      
    }, [])

    useEffect(() => {
        const fetchLocals = async () => {
            const data = await getLocals(query, type , priceRange, rating, city, zone);
            setLocals(data.items);
        }

        fetchLocals();
    },[query,type,priceRange,rating,city,zone])

    return (
    <section className="w-full min-h-screen bg-orange-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Locales</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <input
            type="text"
            id="query"
            placeholder="Nombre"
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
          />

          

          <input
            type="text"
            id="rating"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            id="city"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            id="zone"
            placeholder="Zone"
            onChange={(e) => setZone(e.target.value)}
            className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <select
            type="text"
            id="type"
            placeholder="type"
            onChange={(e) => setType(e.target.value)}
            className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
          >
              <option value={""}> Ninguno</option>
              <option value={"CAFETERIA"} >Cafeteria</option>
              <option value={"RESTAURANTE"} >Restaurante</option>
              <option value={"BAR"}>Bar</option>
              <option value={"FOOD_TRUCK"}>Food Truck</option>
              <option value={"OTROS"}>Otros</option>
          </select>

          <select
            type="text"
            id="priceRange"
            placeholder="priceRange"
            onChange={(e) => setPriceRange(e.target.value)}
            className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
          >
            
            <option value={""}>Ninguno</option>
            <option value={"ECONOMICO"}>Economico</option>
            <option value={"MEDIO"}>Medio</option>
            <option value={"ALTO"}>Alto</option>

          </select>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locals.map((local) => (
            <Link key={local.id} href={`/DetalleLocal/${local.id}`} className="group relative block">
              <article
                className="restaurant-card bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={local.photos && local.photos[0] ? local.photos[0] : "https://tse4.mm.bing.net/th/id/OIP.VkXwThPxekBQ-LQoWqPkBAHaE3?w=1200&h=789&rs=1&pid=ImgDetMain&o=7&rm=3"}
                    alt={local.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    New
                  </span>
                  
                    
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-gray-900 leading-tight">{local.name}</h3>
                    <div className="text-sm text-gray-500 font-semibold">{local.hours}</div>
                  </div>
                  <p className="text-sm text-gray-500">{local.city}</p>
                  <p className="text-sm text-gray-500 mt-1 border-t border-gray-200">{local.type} • ~{local.priceRange}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ListadoPrincipalComponent;