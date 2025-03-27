const ShoeCard = ({
  imgUrl,
  changeToBigShoeImage,
  bigShoeImg,
  changeShoeName,
  theme,
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeToBigShoeImage(imgUrl.bigShoe);
      changeShoeName(imgUrl.shoeName);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-justdoit bg-center bg-cover rounded-xl border border-shadow-2xl sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="thumbnail"
          width="127"
          height="105"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
