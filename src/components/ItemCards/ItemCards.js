const CardSection = () => {
  return (
    <section className="cards">
      <p className="cards__description">
        Today is 75° F / You may want to wear:
      </p>
      <div className="cards__container">
        <ul className="cards__list">
          <li>
            <div className="cards__item_container">
              <div className="cards__title_frame">
                <h1 className="cards__title">Shirt</h1>
              </div>
              <img className="cards__image"></img>
            </div>
          </li>
          <li>
            <div className="cards__item_container">
              <div className="cards__title_frame">
                <h1 className="cards__title">Shorts</h1>
              </div>
              <img className="cards__image"></img>
            </div>
          </li>
          <li>
            <div className="cards__item_container">
              <div className="cards__title_frame">
                <h1 className="cards__title">Cap</h1>
              </div>
              <img className="cards__image"></img>
            </div>
          </li>
          <li>
            <div className="cards__item_container">
              <div className="cards__title_frame">
                <h1 className="cards__title">Sneakers</h1>
              </div>
              <img className="cards__image"></img>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CardSection;
