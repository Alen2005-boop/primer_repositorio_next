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



    useEffect(() => {

        const fetchPlatos = async () => {

            const data = await getPlato(name, category, localId, city, price);

            setPlatos(data.items);
        }

        fetchPlatos();

    },[name, category, localId, city, price]);



    return(

<div className="bg-white">

<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">


<div className="grid grid-cols-1 mb-7 gap-x-8 gap-y-6 sm:grid-cols-2">

<div>
<label className="block text-sm font-semibold text-gray-900">
Name
</label>

<input
type="text"
onChange={(e)=>setName(e.target.value)}
className="block w-full rounded-md border px-3 py-2"
/>

</div>


<div>
<label className="block text-sm font-semibold text-gray-900">
Category
</label>

<input
type="text"
onChange={(e)=>setCategory(e.target.value)}
className="block w-full rounded-md border px-3 py-2"
/>

</div>


<div>
<label className="block text-sm font-semibold text-gray-900">
City
</label>

<input
type="text"
onChange={(e)=>setCity(e.target.value)}
className="block w-full rounded-md border px-3 py-2"
/>

</div>


<div>
<label className="block text-sm font-semibold text-gray-900">
Price
</label>

<input
type="text"
onChange={(e)=>setPrice(e.target.value)}
className="block w-full rounded-md border px-3 py-2"
/>

</div>

</div>


<h2 className="text-2xl font-bold tracking-tight text-gray-900">
Listado de Platos
</h2>



<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

{platos.map((plato)=> (

<div key={plato.id} className="group relative">

<img
src={plato.photos && plato.photos[0] ? plato.photos[0] : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:h-80"
/>


<div className="mt-4 flex justify-between">

<div>

<h3 className="text-sm text-gray-700">

<Link href={`/DetallePlato/${plato.id}`}>
<span className="absolute inset-0"/>
{plato.name}
</Link>

</h3>

<p className="mt-1 text-sm text-gray-500">
{plato.city}
</p>

</div>


<p className="text-sm font-medium text-gray-900">
${plato.price}
</p>

</div>

</div>

))}

</div>

</div>

</div>

    );
}

export default ListadoPlatosComponent;