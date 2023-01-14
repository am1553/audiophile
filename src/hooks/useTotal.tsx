import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export function useTotal() {
    const [total, setTotal] = useState<number>()
    const cartItems = useAppSelector((state: RootState) => state.cart)
    useEffect(() => {
        let totalSum : number = 0
        cartItems.map(item => totalSum+= item.total)
        setTotal(totalSum)
    }, [cartItems])

    return total
}