const Increment = ({ index, cart, setCart }) => {
  return (
    <div className="btnBox">
      <button
        className="incrementBtn"
        onClick={() => {
          const newCart = [...cart];
          newCart[index].quantity++;
          setCart(newCart);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Increment;
//
