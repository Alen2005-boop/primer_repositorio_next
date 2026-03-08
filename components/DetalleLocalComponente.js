'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getLocal } from '../api/api'

export default function DetalleLocalComponent() {
  const params = useParams()
  const [local, setLocal] = useState({})

  useEffect(() => {
    const fetchLocal = async () => {
      const data = await getLocal(params.id)
      setLocal(data.item)
    }
    fetchLocal()
  }, [params.id])

  return (
    <div className="min-h-screen flex flex-col bg-background-light font-display text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-xl font-bold">Explora Sabores</h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto space-y-8">

        {/* Imagen principal */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={local.photos ? local.photos[0] : 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png'}
            alt={local.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">Recomendado</div>
          <h2 className="absolute bottom-12 left-4 text-3xl md:text-5xl font-black text-white">{local.name}</h2>
          {local.reviews?.length > 0 && (
            <p className="absolute bottom-4 left-4 text-white opacity-90">
              ⭐⭐⭐⭐⭐ {local.reviews.length > 0 ? (local.reviews.reduce((a,b) => a + b.rating,0)/local.reviews.length).toFixed(1) : '0.0'} ({local.reviews.length} reviews)
            </p>
          )}
        </div>

        {/* Información del restaurante */}
        <section className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h3 className="text-2xl font-bold">Sobre el Restaurante</h3>
          <p className="text-slate-700">{local.description}</p>
          {local.creator && <p className="font-semibold mt-2">Creado por: {local.creator.name}</p>}
        </section>

        {/* Detalles en grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Ciudad', value: local.city },
            { label: 'Tipo de Cocina', value: local.type },
            { label: 'Rango de Precio', value: local.priceRange },
            { label: 'Zona', value: local.zone },
            { label: 'Dirección', value: local.address },
            { label: 'Horario', value: local.hours },
          ].map((item) => (
            <div key={item.label} className="bg-white p-4 rounded-xl shadow border border-slate-200">
              <p className="text-xs font-bold text-slate-500 uppercase">{item.label}</p>
              <p className="font-semibold">{item.value || '-'}</p>
            </div>
          ))}
        </section>

        {/* Reseñas */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold">Reseñas</h3>

          {local.reviews?.slice(0,2).map((review, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow border border-slate-200 space-y-2">
              <p className="font-bold">{review.userName}</p>
              <p className="text-sm text-slate-500">{review.date}</p>
              <p>{review.comment}</p>
            </div>
          ))}

          <button className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition">
            Ver todas las reseñas
          </button>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          © 2024 Explora Sabores. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}