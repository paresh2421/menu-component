const MenuItem = ({ title, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{ price }</span>
        </header>
        <div className="item-text">
          {desc}
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
