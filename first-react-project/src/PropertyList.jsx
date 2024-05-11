import PropertyListItem from "./PropertyListItem";
import "./PropertyList.css";
function PropertyList({ items }) {
  return (
    <div className="PropertyList">
      {items.map((i) => (
        <PropertyListItem
          key={i.id}
          name={i.name}
          price={i.price}
          rating={i.rating}
        />
      ))}
    </div>
  );
}
export default PropertyList;
