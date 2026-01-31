"use client"

import type React from "react"

import { useRef } from "react"
import { PRODUCTS } from "@/lib/products"
import { PricingCard } from "@/components/pricing-card"

export default function PricingPage() {
  const mainRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mainRef.current) {
      mainRef.current.style.setProperty("--mouse-x", `${e.clientX}px`)
      mainRef.current.style.setProperty("--mouse-y", `${e.clientY}px`)
    }
  }

  return (
    <div
      ref={mainRef}
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-8 font-sans overflow-hidden"
    >
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-20 w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Pricing Plans</h2>
          <p className="mt-4 text-xl text-gray-300">Choose the plan that's right for you.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 items-stretch">
          {PRODUCTS.map((product) => (
            <PricingCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
