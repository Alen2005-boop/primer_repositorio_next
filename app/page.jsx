'use client'

import Link from "next/link";


import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

const featuredLocals = [
  { id: 1, name: "La Parrilla", city: "Montevideo", photos: ["https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"] },
  { id: 2, name: "Café Central", city: "Punta del Este", photos: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"] },
  { id: 3, name: "Heladería Dolce", city: "Colonia", photos: ["https://images.unsplash.com/photo-1590080875591-4e541c37ec46?auto=format&fit=crop&w=800&q=80"] },
  { id: 4, name: "Food Truck Express", city: "Montevideo", photos: ["https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"] },
];

export default function Home() {
  return (
    <div className="bg-orange-100 min-h-screen font-sans">
      
      <header className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">Mi Plataforma</Link>
        <div className="flex gap-4">
          <Link href="/Login" className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition">Iniciar sesión</Link>
          <Link href="/Register" className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-orange-400 transition">Registrarse</Link>
        </div>
      </header>

      
      <section className="text-center py-16 sm:py-24 lg:py-32 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
          Impulsá tu negocio online
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Gestioná tu plataforma de forma simple, rápida y moderna con nuestra solución web.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/Register" className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-400 transition">
            Registrarse
          </Link>
          <Link href="/Login" className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition">
            Ya tengo cuenta →
          </Link>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Locales destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredLocals.map((local) => (
            <Link key={local.id} href="/Login" className="group">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg p-4">
                <img
                  src={local.photos[0]}
                  alt={local.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-1">
                  {local.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{local.city}</p>
                <div className="flex items-center gap-2 pt-2 border-t border-gray-200 mt-auto">
                  <BuildingStorefrontIcon className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-semibold text-gray-700">Local Ejemplo</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}