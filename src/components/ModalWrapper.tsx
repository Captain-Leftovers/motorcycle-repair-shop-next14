"use client"

import { MotoItemWithImagesType } from "@/types"





type ModalWrapperProps = {
    imageData: MotoItemWithImagesType
    children: React.ReactNode   
  }
export default function ModalWrapper({imageData, children}: ModalWrapperProps) {

    //TODO useModal here pass props do stuff

return (
  <div className="cursor-pointer" onClick={()=> console.log('modal hereee')
   } >
     {children}
  </div>
  )
}