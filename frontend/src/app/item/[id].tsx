'use client'
import React from 'react';
import { useRouter} from 'next/router';
import { fetchItemById } from '@/lib/features/items/items';
import { useAppDispatch } from '@/lib/hooks';
import ItemPage from "@/Components/entity/ItemPage";

const ItemDetail = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const item = router.query.id;
console.log(item)
    React.useEffect(() => {
        if (item) {
            dispatch(fetchItemById(Number(item)));
        }
    }, [dispatch, item]);

    return (
        <div>
            <ItemPage id={item ? Number(item) : undefined} />
            <p>{item}</p>
        </div>
    );
};
export default ItemDetail;