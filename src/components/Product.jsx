import Image from "next/image"

export default function Product( props ) {
    return (
        <div key={props.key} className="w-auto bg-gradient-to-r from-gray-900 from-20% via-gray-800 via-50% to-gray-900 to-90% rounded-md ">
            <div className="w-auto">
                <Image className="h-72 object-cover rounded-t-md" src={props.product.thumbnail} width={500} height={500} alt={props.product.title}></Image>
            </div>
            <div className="p-4">
                <div className='flex justify-between pb-4 font-bold'>
                    <div className="text-clip line-clamp-1 w-4/5">{props.product.title}</div>
                    <div>$ {props.product.price}</div>
                </div>
                <div className="pb-4">
                <div className='line-clamp-2 text-slate-400'>{props.product.description}</div>
                </div>
                <div className='flex justify-between text-sm'>
                    <div className="w-3/5 text-ellipsis line-clamp-1">Brand: {props.product.brand}</div>
                    <div>Rating {props.product.rating} / 5</div>
                </div>
            </div>
        </div>
    )
}
