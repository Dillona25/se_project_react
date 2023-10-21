const ItemCard = ({ items, onSelectCard }) => {
  return (
    <div className="cards__container">
      <div className="cards__item_container">
        <div className="cards__title_frame">
          <h1 className="cards__title">{items.name}</h1>
        </div>
        <img
          className="cards__image"
          alt="clothing peice"
          src={items.link}
          onClick={() => onSelectCard(items)}
        ></img>
      </div>
    </div>
  );
};

export default ItemCard;
