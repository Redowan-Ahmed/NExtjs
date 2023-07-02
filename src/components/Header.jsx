import Image from "next/image"
import Link from "next/link"

export default function Header() {
    const data ={
        menu:[
            {name:"Home", url:"/", sub:false, },
            {name:"About", url:"/about", sub:false, },
            {name:"Contact us", url:"/contact", sub:false, },
            {name:"products", url:"/product", sub:false, },
        ]
    }
    return (
        <div className="bg-slate-300 sticky top-0 shadow">
            <div className="container mx-auto py-3 flex justify-between align-middle items-center">
                <div>
                    <Image src='https://mercegrower.com/wp-content/uploads/2021/11/Asset-1@524x-100.png' width={200} height={100}></Image>
                </div>
                <div>
                    <nav>
                        <ul className="flex gap-3 text-gray-900">{
                            data.menu.map((data, index)=>(
                                <li key={index}>
                                    <Link href={data.url} >{data.name}</Link>
                                </li>
                            ))
                        }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
