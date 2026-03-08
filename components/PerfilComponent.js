'use client';
import { useState , useEffect } from 'react';
import { getUser } from '../api/api';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function PerfilComponent() {

    const params = useParams();
    const [user , setUser] = useState({});
    const [locals , setLocals] = useState([]);
    const [error , setError] = useState("");

      useEffect(() => {
        const fetchUser = async () => {
          try{
            const data = await getUser(params.id);
            console.log(data)
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
                    
                    
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12">
                        <img
                            alt="Foto perfil"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv_rUJ2Ru3GR0Jxy2YTNH_jrVzX3_HY-THQ&s"
                            className="h-28 w-28 rounded-full border-2 border-black object-cover"
                        />
                        <div className="text-center sm:text-left">
                            <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                            <p className="text-lg font-medium text-indigo-600">{user.username}</p>
                        </div>
                    </div>

                    {/* Botones Alta */}
                    <div className="flex gap-4 mb-16 justify-center sm:justify-start">
                        <Link 
                            href="/AltaLocal"
                            className="px-6 py-3 border-2 border-white bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
                        >
                            Alta Local
                        </Link>
                        <Link 
                            href="/AltaPlato"
                            className="px-6 py-3 border-2 border-white bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
                        >
                            Alta Plato
                        </Link>
                    </div>

                   
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Locales de {user.name}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locals.map((local) => (
                            <div key={local.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                                <img
                                    alt={local.name}
                                    src={local.photos && local.photos[0] ? local.photos[0] : "https://img.freepik.com/vector-gratis/apoye-concepto-negocio-local_23-2148592675.jpg?semt=ais_user_personalization&w=740&q=80"}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <div className="p-4 flex flex-col justify-between h-full">
                                    <div>
                                        <Link href={`/DetalleLocal/${local.id}`} className="text-lg font-bold text-gray-900 hover:text-orange-500 transition">
                                            {local.name}
                                        </Link>
                                        <p className="text-sm text-gray-500">{local.type}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 mt-2">{local.city}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}