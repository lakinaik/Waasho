
const Vehicle = ({ text, img, onSelect, isSelected }) => {
  const handleClick = () => {
    if (text !== null && text !== undefined) {
      onSelect(text);
    }
   
  };
  return (
    <div
      className={`border px-3 py-1 grid place-items-center duration-300 hover:bg-blue-500 ${
        isSelected ? 'bg-blue-500' : ''
      }`}
      onClick={handleClick}
    >
      <img src={img} alt="img" className="w-20" />
      <h2 className="md:text-xl text-sm font-semibold relative bottom-[15px]">{text}</h2>
    </div>
  );
};

export default Vehicle;
