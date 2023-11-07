"use server"

import prismadb from "../prismadb"



export async function getMotoFromDb() {
	
	try {
		const products = await prismadb.motoItem.findMany({
			where: {
				sold: false,
			},
			include: {
				images: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})
		
		

		return {data : products, errMessage:null}
	} catch (error) {
		console.log('[PRODUCTS_GET]', error)
		return {data : null, errMessage: 'Error getting products'}
	}
}