function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        granted,
        price,
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={granted[0].images.background} alt={displayName} />
                <span className='card-title'>{displayName}</span>
            </div>
            <div className='card-content'>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right'>{price.finalPrice}</span>
            </div>
        </div>
    );
}

export { GoodsItem };
