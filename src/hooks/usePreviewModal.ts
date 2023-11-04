import { create } from 'zustand'
import { MotoItemWithImagesType } from '@/types'

type PreviewModalStore = {
	isOpen: boolean
	data?: MotoItemWithImagesType
	onOpen: (data: MotoItemWithImagesType) => void
	onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
	isOpen: false,
	data: undefined,
	onOpen: (data) => set({ isOpen: true, data: data }),
	onClose: () => set({ isOpen: false }),
}))

export default usePreviewModal
