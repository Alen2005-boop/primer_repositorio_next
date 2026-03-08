'use client'

import { CurrencyDollarIcon, ClipboardIcon, BuildingOffice2Icon, InboxIcon} from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import { getPlatos } from '../api/api'
import PlatoRating from './PlatoRating'
import { useParams } from 'next/navigation'
import ListadoRating from './ListadoRating'
import Link from 'next/link'

export default function DetallePlatoComponent() {

  const params = useParams()
  const [plato, setPlato] = useState({})
  const [isPosted , setIsPosted] = useState(false);


  const features = [
    {
      name: 'Category.',
      description: plato?.category,
      icon: InboxIcon,
    },
    {
      name: 'City.',
      description: plato?.city,
      icon: BuildingOffice2Icon,
    },
    {
      name: 'Price.',
      description: plato?.price,
      icon: CurrencyDollarIcon,
    },
    {
      name: 'description.',
      description: plato?.description,
      icon: ClipboardIcon,
    },
    
    
    
  ]

  useEffect(() => {

    const fetchPlato = async () => {
      const data = await getPlatos(params.id)
      console.log("PLATO:", data)
      setPlato(data.item)
    }

   
      fetchPlato()
    

  }, [isPosted])

  return (
    <>
    <div className="overflow-hidden bg-white py-24 sm:py-32 select-none">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">

              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {plato.name}
              </p>

              <p className="mt-6 text-lg text-gray-700">
                {plato?.description}
              </p>

              <p className="pt-6 text-gray-700">
                Local: 
                <Link href={`/DetalleLocal/${plato.localId}`}className="text-indigo-600 hover:underline ml-2">
                  {plato?.local?.name}
                </Link>
                </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
                <p className=" pt-6 text-gray-700">
                  <Link href={`/Perfil/${plato.creatorId}`}>
                    {plato.creator?.name}
                  </Link>
                </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <PlatoRating plato={plato} setIsPosted={setIsPosted}/>
          <ListadoRating reviews={plato.reviews}  />
    </>
  )
}