export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  features: string[]
  popular?: boolean
}

// This is the source of truth for all products
export const PRODUCTS: Product[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals and small projects",
    priceInCents: 999, // $9.99
    features: ["5 Projects", "10GB Storage", "Basic Support", "Community Access", "Monthly Updates"],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Ideal for growing teams and businesses",
    priceInCents: 2999, // $29.99
    popular: true,
    features: [
      "Unlimited Projects",
      "100GB Storage",
      "Priority Support",
      "Advanced Analytics",
      "Custom Integrations",
      "Weekly Updates",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "For large organizations with advanced needs",
    priceInCents: 9999, // $99.99
    features: [
      "Unlimited Everything",
      "1TB Storage",
      "24/7 Dedicated Support",
      "Advanced Security",
      "Custom Development",
      "API Access",
      "Daily Updates",
    ],
  },
]
