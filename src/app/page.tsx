import Image from 'next/image'
import Product from '@/components/Product'
async function getData() {
  const res = await fetch('https://dummyjson.com/products')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="container mx-auto px-2 md:px-0 lg:px-0">
      <h1 className='text-3xl font-bold text-center p-5'>Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3'>
      {
        data.products.map((data)=>(
          <Product product={data} key={data.id} ></Product>
        ))
      }
      </div>
    </main>
  )
}
