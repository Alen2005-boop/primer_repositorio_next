'use client';

import { useState , useEffect } from 'react';
import { getUser } from '../api/api';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import {
  BuildingStorefrontIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';

export default function PerfilComponent() {

  const params = useParams();
  const [user , setUser] = useState({});
  const [locals , setLocals] = useState([]);
  const [error , setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try{
        const data = await getUser(params.id);
        setUser(data.item)
        setLocals(data.item.locals);
      }catch(E){
        setError(E.message);
      }
    }
    fetchUser();
  }, [])

  return (

    <div className="bg-orange-100 min-h-screen px-6 py-24">

      {error ? (
        <h1 className="text-red-500 text-center">{error}</h1>
      ) : (

        <div className="mx-auto max-w-7xl">

          

          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-14">

            <img
              alt="Foto perfil"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv_rUJ2Ru3GR0Jxy2YTNH_jrVzX3_HY-THQ&s"
              className="h-28 w-28 rounded-full border-4 border-orange-300 object-cover"
            />

            <div className="text-center sm:text-left">

              <h2 className="text-3xl font-bold text-gray-900">
                {user.name}
              </h2>

              <p className="text-lg text-orange-600 font-semibold">
                @{user.username}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {locals.length} locales creados
              </p>

            </div>

          </div>


          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-xl">

            <Link
              href="/AltaLocal"
              className="flex items-center gap-4 bg-black text-white p-5 rounded-xl shadow hover:scale-105 transition"
            >
              <BuildingStorefrontIcon className="h-7 w-7 text-orange-400" />
              <div>
                <p className="font-bold">Crear Local</p>
                <p className="text-sm text-gray-300">Agregar un nuevo restaurante</p>
              </div>
            </Link>

            <Link
              href="/AltaPlato"
              className="flex items-center gap-4 bg-orange-500 text-white p-5 rounded-xl shadow hover:bg-orange-600 hover:scale-105 transition"
            >
              <PlusCircleIcon className="h-7 w-7" />
              <div>
                <p className="font-bold">Crear Plato</p>
                <p className="text-sm opacity-80">Agregar un plato a un local</p>
              </div>
            </Link>

          </div>


          

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Locales de {user.name}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {locals.map((local) => (

              <div
                key={local.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >

                <img
                  alt={local.name}
                  src={
                    local.photos && local.photos[0]
                    ? local.photos[0]
                    : "https://img.freepik.com/vector-gratis/apoye-concepto-negocio-local_23-2148592675.jpg?semt=ais_user_personalization&w=740&q=80"
                  }
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">

                  <Link
                    href={`/DetalleLocal/${local.id}`}
                    className="text-lg font-bold text-gray-900 hover:text-orange-500 transition"
                  >
                    {local.name}
                  </Link>

                  <p className="text-sm text-gray-500">
                    {local.type}
                  </p>

                  <p className="text-sm font-medium text-gray-700 mt-2">
                    {local.city}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  )
}