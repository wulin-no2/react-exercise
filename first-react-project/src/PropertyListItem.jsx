import Price from "./Price";
import Name from "./Name";
import Rating from "./Rating";
function PropertyListItem({ id, name, rating, price }) {
  return (
    <div className="PropertyListItem">
      <Name name={name} />
      <Price price={price} />
      <Rating rating={rating} />
    </div>
  );
}
export default PropertyListItem;
