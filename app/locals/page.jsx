'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

export default function Home() {
    const [locals, setLocals] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [zone, setZone] = useState("");

    

  const filteredLocals = locals.filter(local => {
    return (
      local.name.toLowerCase().includes(search.toLowerCase()) &&
      (type === "" || local.type === type) &&
      (price === "" || local.priceRange === price) &&
      (zone === "" || local.zone.toLowerCase().includes(zone.toLowerCase()))
    );
  });

  return (
    <div className="p-8">

      {/* FILTROS */}
      <div className="mb-6 flex flex-wrap gap-4">

        <input
          type="text"
          placeholder="Buscar local..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />

        <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
          <option value="">Tipo</option>
          <option value="restaurante">Restaurante</option>
          <option value="cafeteria">Cafetería</option>
          <option value="bar">Bar</option>
          <option value="food truck">Food Truck</option>
        </select>

        <select value={price} onChange={(e) => setPrice (e.target.value)} className="border p-2 rounded">
          <option value="">Precio</option>
          <option value="economico">Económico</option>
          <option value="medio">Medio</option>
          <option value="alto">Alto</option>
        </select>

        <select value={zone} onChange={(e) => setZone(e.target.value)} className="border p-2 rounded">
          <option value="">Zona</option>
          <option value="centro">Centro</option>
          <option value="norte">Norte</option>
          <option value="sur">Sur</option>
        </select>
        <input
          type="text"
          placeholder="Zona"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className="border p-2 rounded"
        />

      </div>
    </div>
  )
}