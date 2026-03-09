'use client'

import { CurrencyDollarIcon, ClipboardIcon, BuildingOffice2Icon, InboxIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import { getPlatos } from '../api/api'
import PlatoRating from './PlatoRating'
import { useParams } from 'next/navigation'
import ListadoRating from './ListadoRating'
import Link from 'next/link'

export default function DetallePlatoComponent() {

  const params = useParams()
  const [plato, setPlato] = useState({})
  const [isPosted , setIsPosted] = useState(false)

  const features = [
    { name: 'Category.', description: plato?.category, icon: InboxIcon },
    { name: 'City.', description: plato?.city, icon: BuildingOffice2Icon },
    { name: 'Price.', description: plato?.price, icon: CurrencyDollarIcon },
    { name: 'Description.', description: plato?.description, icon: ClipboardIcon },
  ]

  useEffect(() => {

    const fetchPlato = async () => {
      const data = await getPlatos(params.id)
      setPlato(data.item)
    }

    fetchPlato()

  }, [isPosted])

  return (

    <div className="min-h-screen bg-orange-100 relative overflow-hidden select-none">

      
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10">

        
        <div className="pt-32 pb-16">

          <div className="mx-auto max-w-7xl px-6">

            <div className="bg-white rounded-2xl shadow-lg p-10">

              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                {plato.name}
              </h1>

              
              <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                {plato?.description}
              </p>

              
              <p className="mt-6 text-gray-700">
                Local:
                <Link
                  href={`/DetalleLocal/${plato.localId}`}
                  className="text-orange-600 ml-2 hover:underline"
                >
                  {plato?.local?.name}
                </Link>
              </p>

              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">

                {features.map((feature) => (

                  <div key={feature.name} className="relative pl-9">

                    <feature.icon
                      className="absolute left-0 top-1 h-5 w-5 text-orange-600"
                    />

                    <p className="font-semibold text-gray-900">
                      {feature.name}
                    </p>

                    <p className="text-gray-600">
                      {feature.description}
                    </p>

                  </div>

                ))}

              </div>

              
              <p className="pt-8 text-gray-700">

                Creator:

                <Link
                  href={`/Perfil/${plato.creatorId}`}
                  className="ml-2 text-orange-600 hover:underline"
                >
                  {plato.creator?.name}
                </Link>

              </p>

            </div>

          </div>

        </div>

        

        <div className="mx-auto max-w-7xl px-6 pb-24">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-xl shadow p-6">
              <PlatoRating plato={plato} setIsPosted={setIsPosted}/>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <ListadoRating reviews={plato.reviews}/>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}