function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            {displayName} x{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => decQuantity(mainId)}
            >
                remove
            </i>
            {quantity}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(mainId)}
            >
                add
            </i>{' '}
            = {price.finalPrice * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(mainId)}
            >
                <i className='material-icons basket-delete'>clear</i>
            </span>
        </li>
    );
}

export { BasketItem };
