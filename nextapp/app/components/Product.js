'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';

export default function Product(){
   
  const [slug, setSlug] = useState("pasta");

  function changeSlug(newSlug) {
    console.log("btn click");
    setSlug(newSlug);
  }

    const [data, setData] = useState([])
    const apiKey = "fd2691f8ce95223a5e361f863f6ea4fc"
    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=2da097d1&app_key=${apiKey}&ingr=${slug}&nutrition-type=cooking`


    useEffect(() => {
      async function fetchData() {
        try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log(slug);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [slug]);

  useEffect(() => {
    const btn1 = document.getElementById("btn1");
    if (btn1) {
    btn1.addEventListener("click", () => changeSlug("pizza"));
    }
    const btn2 = document.getElementById("btn2");
    if (btn2) {
    btn2.addEventListener("click", () => changeSlug("pasta"));
    }
    const btn3 = document.getElementById("btn3");
    if (btn3) {
    btn3.addEventListener("click", () => changeSlug("steak"));
    }
    const btn4 = document.getElementById("btn4");
    if (btn4) {
    btn4.addEventListener("click", () => changeSlug("chicken"));
  }
  
}, []);


  return (
    <>
        <nav>
            <button id="btn1">Pizza</button>
            <button id="btn2">Pasta</button>
            <button id="btn3">Steak</button>
            <button id="btn4">Chicken</button>
        </nav>
      <section id="food-section">
        {data?.hints?.slice(3, 9).map((hint, index) => (
          <div key={index}>
            <h2>{hint?.food?.label}</h2>
            <img src={hint?.food?.image} alt={hint?.food?.label} />
          </div>
        ))}
      </section>
    </>
  );
}