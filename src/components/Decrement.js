const Decrement = ({ index, cart, setCart }) => {
  return (
    <div className="btnBox">
      <button
        className="decrementBtn"
        onClick={() => {
          if (cart[index].quantity !== 1) {
            const newCart = [...cart];
            newCart[index].quantity--;
            setCart(newCart);
          } else {
            const newCart = [...cart];
            newCart.splice(index, index + 1);
            setCart(newCart);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Decrement;
