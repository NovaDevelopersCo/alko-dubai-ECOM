import Catalog from '@/Components/ui/Catalog/Catalog';
import React from 'react';

const store = () => {
    return (
        <div className='flex w-full h-full'>
            <Catalog/>
            <div className='w-48 h-full'></div>
        </div>
    );
};

export default store;