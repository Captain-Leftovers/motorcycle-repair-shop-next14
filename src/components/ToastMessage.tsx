"use client"
import { useIsMounted } from "@/hooks/useIsMounted"
import { useEffect } from 'react';
import toast from "react-hot-toast"

type ToastMessageProps = {
    message: string | null
}

export default function ToastMessage({message}: ToastMessageProps) {
    const isMounted = useIsMounted();

    useEffect(() => {
        if (isMounted && message !== null) {
            toast.error(message);
        }
    }, [isMounted, message]);

    return null;
}