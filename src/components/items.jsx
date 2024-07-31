const Items = (props) => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between mt-10 w-[50%] border-b-2 pb-4">
        <div className="flex">
          <input type="checkbox" 
          onClick={props.isChecked}
          />
          <div className="text-2xl px-4">{props.title}</div>
        </div>

        <div className="text-end bg-slate-200 rounded-full w-10 mx-5">
          <i onClick={props.delete} className="fa-solid fa-trash text-[#f90b3b] text-center pr-3" />
        </div>
      </div>
    </div>
  );
};

export default Items;
