export default function Input({ label, symbol, holder, type = 'text', name, value, change, blur, clickIcon, icon }) {
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <div className="px-4  text-[#2E462E] flex items-center rounded-lg border-2 border-gray-300 w-full">
        <div>{symbol}</div>
        <div className="flex justify-between items-center">
          <input
            type={type}
            placeholder={holder}
            id={name}
            name={name}
            value={value}
            onChange={change}
            className="w-full outline-0 px-4 py-2 rounded-lg"
            onBlur={blur}
          />
          {icon && (
            <div onClick={clickIcon} className="px-4 cursor-pointer">
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}