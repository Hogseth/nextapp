'use client'

import Image from 'next/image';
import Product from './components/Product';
import Navigation from './components/Navigation';
import styles from "./app.css";
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { RouterContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
import Home from './components/Home';

export default function Page() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Navigation/>}/>
        <Route path="/:slug" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
