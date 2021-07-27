import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ meal, cart, setCart }) => {
  return (
    <div
      className="mealCard"
      onClick={() => {
        if (cart.indexOf(meal) === -1) {
          const newCart = [...cart];
          meal.quantity = 1;
          newCart.push(meal);
          setCart(newCart);
        } else {
          const newCart = [...cart];
          meal.quantity++;
          setCart(newCart);
        }
      }}
    >
      <div className="mealText">
        <h3>{meal.title}</h3>
        {meal.description && <p>{meal.description}</p>}
        <div className="mealPrice">
          <span className="price">{meal.price} €</span>
          {meal.popular && (
            <span className="popularity">
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt="meal" />}
    </div>
  );
};

export default Meal;
