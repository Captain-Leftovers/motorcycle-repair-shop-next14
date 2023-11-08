"use client"

import usePreviewModal from "@/hooks/usePreviewModal"
import { MotoItemWithImagesType } from "@/types"





type ModalWrapperProps = {
    imageData: MotoItemWithImagesType
    children: React.ReactNode   
  }
export default function ModalWrapper({imageData, children}: ModalWrapperProps) {

  const motoModal = usePreviewModal()

  const showModalHandler = () => {
    motoModal.onOpen(imageData)
  }


return (
  <div className="cursor-pointer" onClick={showModalHandler} >
     {children}
  </div>
  )
}