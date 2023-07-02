async function getData() {
    const res = await fetch('https://dummyjson.com/products')
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  

export default async function ProductDetails({params}) {
    const datas = await getData()
  return (
    <div>ProductDetails </div>
  )
}
