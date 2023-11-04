'use client'

import usePreviewModal from '@/hooks/usePreviewModal'
import { Modal } from '@/components/ui/Modal'
// import Gallery from '../../../../../ANTONIO/Ecommerce-Store/components/Gallery'
// import Info from '../../../../../ANTONIO/Ecommerce-Store/components/Info'

export default function PreviewModal() {
	const previewModal = usePreviewModal()
	const motoItem = usePreviewModal((state) => state.data)

	if (!motoItem) return null

	return (
		<Modal
			title={motoItem.model || ''}
			description={motoItem.description || ''}
			isOpen={previewModal.isOpen}
			onClose={previewModal.onClose}
			className=''
		>
			<h1>ShowPics here</h1>

			{/* -------------------------------------------------------------------------------------------- */}
			{/* <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
				<div className="sm:col-span-4 lg:col-span-5">
					<Gallery images={motoItem.images} />
				</div>
				<div className="sm:col-span-8 lg:col-span-7">
					<Info data={motoItem} />
				</div>
			</div> */}
		</Modal>
	)
}
