'use client';
import { useState } from "react";


export default function About() {
    const increase = () => {
        if (valueName >= 1){
            setValueName(valueName+1)
        }

    }
    const decrease = ()=> {
        if (valueName > 1){
            setValueName(valueName-1)
        }else{
            alert("You can't add less than one")
        }
    }

    const [valueName, setValueName] = useState(1)

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-5xl">
            <div>{valueName}</div>
            <div className="flex items-center justify-center gap-4">
                <button
                    className="rounded bg-green-500 p-2 text-white" onClick={increase}>
                    +
                </button>
                <button
                    className="rounded bg-red-500 p-2 text-white" onClick={decrease}>
                    -
                </button>
            </div>
        </div>
  )
}
