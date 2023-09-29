"use client";
import React from 'react'

const AddToCart = (className: string) => {
  return (
    <button className={className} onClick={() => console.log("Hello World")}>
      Add To Cart
    </button>
  )
}

export default AddToCart
