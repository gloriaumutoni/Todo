const Items = (props) => {
  return (
    <div className="grid grid-cols-2 justify-between mt-10 shadow-md  w-[40%] ">
      <div className="flex">
        <input type="checkbox" />
        <div>{props.value}</div>
      </div>
      <div>
        <i className="fa-solid fa-trash text-[#f90b3b] text-end pr-3"></i>
      </div>
    </div>
  );
};

export default Items;
