"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Checkout from "./checkout"
import type { Product } from "@/lib/products"

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)

interface PricingCardProps {
  product: Product
}

export function PricingCard({ product }: PricingCardProps) {
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <>
      <div
        className={`relative flex flex-col h-full p-8 rounded-2xl bg-white/10 backdrop-blur-lg border shadow-xl ${
          product.popular ? "border-purple-500 ring-2 ring-purple-500/50" : "border-white/20"
        }`}
      >
        {product.popular && (
          <div className="absolute top-0 -translate-y-1/2 px-4 py-1 text-sm font-semibold tracking-wide text-white bg-purple-600 rounded-full shadow-md">
            Most Popular
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
          <p className="mt-4 text-gray-300">{product.description}</p>

          <div className="mt-6">
            <span className="text-5xl font-bold tracking-tight text-white">
              ${(product.priceInCents / 100).toFixed(0)}
            </span>
            <span className="ml-1 text-xl font-medium text-gray-300">/month</span>
          </div>

          <ul role="list" className="mt-8 space-y-4">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center space-x-3">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-purple-400" />
                <span className="text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setShowCheckout(true)}
          className={`
            mt-10 block w-full px-6 py-3 text-base font-medium text-center rounded-lg
            transition-colors duration-200
            ${
              product.popular
                ? "bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/30 shadow-lg"
                : "bg-white/20 text-white hover:bg-white/30"
            }
          `}
        >
          Get Started
        </button>
      </div>

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-xl border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-white">
              Complete your purchase - <span className="text-purple-400">{product.name}</span>
            </DialogTitle>
          </DialogHeader>
          <Checkout productId={product.id} />
        </DialogContent>
      </Dialog>
    </>
  )
}
