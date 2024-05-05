const MenuItem = ({ item }) => {
  const { name, image, price, ingredients } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] h-[100px] mx-8"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xl font-semibold">{name}-------</h3>

        {ingredients && (
          <ul className="list-outside mx-5">
            {ingredients.map((ingredient, index) => (
              <li className="list-disc" key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-yellow-600  text-xl font-semibold">{price} BDT</p>
    </div>
  );
};

export default MenuItem;
