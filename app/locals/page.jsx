'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home() {
    const [locals, setLocals] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [zone, setZone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(locals, search, type, price, zone);
        router.push('/locals');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type"/>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"/>
            <input type="text" value={zone} onChange={(e) => setZone(e.target.value)} placeholder="Zone"/>
            <button type="submit">Search</button>
        </form>
    </div>
  );
}   