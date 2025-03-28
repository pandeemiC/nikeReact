const Button = ({ label, iconUrl, customClass }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red hover:bg-white transformer ${customClass}`}
    >
      {label}
      <img
        src={iconUrl}
        alt="ArrowIcon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
