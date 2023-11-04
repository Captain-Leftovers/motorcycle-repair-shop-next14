export type RoutesType = {
    href: string
    label: string
}


export type ApiImageType = { 
    url:string
    make:string
    model: string
    description: string
    price: string
}

export type MotoItem = {
    id: string;
    make: string;
    model: string | null;
    description: string | null;
    price: number | null;
    coverUrl: string | null;
    featured: boolean;
    sold: boolean;
    onHold: boolean;
    addedByUserId: string;
    updatedAt: Date;
    createdAt: Date;
}

export type MotoItemImages = {
    id: string;
    motoItemId: string;
    url: string;
}

export type MotoItemWithImagesType = MotoItem & {images: MotoItemImages[]}