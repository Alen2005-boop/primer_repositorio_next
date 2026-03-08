'use client'

import { useEffect, useState } from "react";
import { getPlato } from "../api/api";
import Link from "next/link";

// Heroicons
import { BuildingStorefrontIcon} from "@heroicons/react/24/solid";

const ListadoPlatosComponent = () => {
  const [platos, setPlatos] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [localId, setLocalId] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchPlatos = async () => {
      const data = await getPlato(name, category, localId, city, price);
      setPlatos(data.items);
    }
    fetchPlatos();
  }, [name, category, localId, city, price]);


  

  return(
        <div className="bg-orange-100 min-h-screen font-sans">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
                      <input
                        type="text"
                        id="name"
                        placeholder="Nombre"
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
                      />

                      <select
                        type="text"
                        id="category"
                        placeholder="Categoría"
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
                      >
                        <option value={""}>Ninguna</option>
                        <option value={"ENTRADA"}>Entrada</option>
                        <option value={"PRINCIPAL"}>Plato Principal</option>
                        <option value={"POSTRE"}>Postre</option>
                        <option value={"BEBIDA"}>Bebida</option>
                      </select>

                      <input
                        type="number"
                        id="localId"
                        placeholder="Local ID"
                        onChange={(e) => setLocalId(e.target.value)}
                        className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
                      />

                      <input
                        type="text"
                        id="city"
                        placeholder="Ciudad"
                        onChange={(e) => setCity(e.target.value)}
                        className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
                      />

                      <input
                        type="number"
                        id="price"
                        placeholder="Precio"
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="rounded-md px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
                      />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Listado de Platos</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {platos.map((plato) => (
                        <div key={plato.id} className="restaurant-card bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg p-6">

                            
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-700 bg-gray-100 px-2 py-1 rounded inline-block mb-2">
                                {plato.category}
                            </span>

                            
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                                <Link href={`/DetallePlato/${plato.id}`}>
                                    {plato.name}
                                </Link>
                            </h3>

                            
                            <p className="text-sm text-gray-500 mb-2">{plato.city}</p>
                            <p className="text-lg font-bold text-gray-900 mb-4">${plato.price}</p>

                            
                            <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                                <BuildingStorefrontIcon className="h-5 w-5 text-orange-500"/>
                                <span className="text-sm font-semibold text-gray-700">{plato.local.name}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ListadoPlatosComponent;