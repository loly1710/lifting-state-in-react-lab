import Ingredient from './Ingredient';

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        props.ingredients.map((ingredient, i) => (
          <Ingredient
            key={i}
            ingredient={ingredient}
            onClick={() => props.removeIt(i)}
            isInStack={true}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;

