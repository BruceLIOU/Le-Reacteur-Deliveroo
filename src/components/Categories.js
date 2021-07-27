import Meal from "./Meal";

const Categories = ({
  data,
  index,
  cart,
  setCart,
  counters,
  setCounters,
  quantity,
  setQuantity,
  empty,
  setEmpty,
}) => {
  return (
    <>
      {data.meals[index] && (
        <div className="categories">
          <h2>{data.name}</h2>
          <div className="menuItem">
            {data.meals.map((meal) => {
              return (
                <Meal
                  index={index}
                  meal={meal}
                  cart={cart}
                  setCart={setCart}
                  counters={counters}
                  setCounters={setCounters}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  empty={empty}
                  setEmpty={setEmpty}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
