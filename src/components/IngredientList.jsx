import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, i) => (
        <Ingredient
          key={i}
          ingredient={ingredient}
          onClick={() => props.addIt(ingredient)}
          isInStack={false}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
