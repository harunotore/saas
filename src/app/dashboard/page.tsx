import { getProducts } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server"
import { NoProducts } from "./components/NoProducts";

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn()

  const products = await getProducts(userId, { limit: 5 })
  if (products.length === 0) return <NoProducts />
  
  return (
    <div>page</div>
  )
}