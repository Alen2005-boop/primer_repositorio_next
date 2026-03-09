'use client'

import {
  ClockIcon,
  WalletIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  BuildingOffice2Icon,
  EnvelopeIcon
} from '@heroicons/react/20/solid'

import { useState, useEffect } from 'react'
import { getLocal } from '../api/api'
import RestaurantRating from './RestaurantRating'
import { useParams } from 'next/navigation'
import ListadoRating from './ListadoRating'
import Link from 'next/link'

export default function DetalleLocalComponent() {

  const params = useParams()
  const [local , setLocal] = useState({})
  const [isPosted , setIsPosted] = useState(false)

  const features = [
    { name: 'City.', description: local.city, icon: BuildingOffice2Icon },
    { name: 'Type.', description: local.type, icon: WalletIcon },
    { name: 'Price range.', description: local.priceRange, icon: CurrencyDollarIcon },
    { name: 'Zone.', description: local.zone, icon: GlobeAmericasIcon },
    { name: 'Address.', description: local.address, icon: EnvelopeIcon },
    { name: 'Hours.', description: local.hours, icon: ClockIcon },
  ]

  useEffect(() => {
    const fetchLocal = async () =>{
      const data = await getLocal(params.id)
      setLocal(data.item)
    }
    fetchLocal()
  },[isPosted])

  return (

    <div className="min-h-screen bg-orange-100 relative overflow-hidden">

      
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10">

        
        <div className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="bg-white rounded-2xl shadow-lg p-10">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                
                <div>

                  <p className="text-4xl font-bold text-gray-900">
                    {local.name}
                  </p>

                  <p className="mt-4 text-lg text-gray-700">
                    {local?.description}
                  </p>

                  <dl className="mt-8 space-y-6 text-gray-700">

                    {features.map((feature) => (

                      <div key={feature.name} className="relative pl-9">

                        <dt className="font-semibold text-gray-900">

                          <feature.icon
                            className="absolute left-0 top-1 h-5 w-5 text-orange-600"
                          />

                          {feature.name}

                        </dt>

                        <dd>{feature.description}</dd>

                      </div>

                    ))}

                  </dl>

                  <div className="pt-6 text-gray-700 font-medium">

                    Creator:

                    <Link
                      className="text-orange-600 ml-2 hover:underline"
                      href={`/Perfil/${local.creatorId}`}
                    >
                      {local.creator?.name}
                    </Link>

                  </div>

                </div>

                

                <div className="flex justify-center">

                  <img
                    src={
                      local.photos
                        ? local.photos[0]
                        : "https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                    }
                    className="rounded-xl shadow-xl max-h-[420px] object-cover"
                  />

                </div>

              </div>

            </div>

          </div>
        </div>

        

        <div className="mx-auto max-w-7xl px-6 pb-15">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-xl shadow p-6">
              <RestaurantRating local={local} setIsPosted={setIsPosted}/>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <ListadoRating reviews={local.reviews}/>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}