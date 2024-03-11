import React from 'react';


const ItemPage = ({ id }: { id?: number }) => {
    return (
        <div>
            <h1>Динамическая страница товара</h1>
            <p>Идентификатор товара: {id}</p>
        </div>
    );
};

export default ItemPage;
