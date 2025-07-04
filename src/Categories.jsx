const Categories = ({ categories, filters }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filters(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
