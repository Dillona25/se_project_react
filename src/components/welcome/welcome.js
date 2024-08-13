import "../welcome/welcome.css";

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__text-container">
        <h1 className="welcome__title">WhatToWear</h1>
        <p className="welcome__subtitle">
          Struggle to find outfits? Dont worry. Just upload your closet to your
          account and we will suggest clothes based on the weather!
        </p>
      </div>
      <div>
        <div className="welcome__image">
          <p>image here</p>
        </div>
      </div>
    </div>
  );
};
