import "../ItemCard/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="cards__container">
      <div className="cards__item_container">
        <div className="cards__title_frame">
          <h2 className="cards__title">{item.name}</h2>
        </div>
        <img
          className="cards__image"
          alt={item.name}
          src={item.imageUrl}
          onClick={() => onSelectCard(item)}
        ></img>
      </div>
    </div>
  );
};

export default ItemCard;
