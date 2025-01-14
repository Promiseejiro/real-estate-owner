import React from "react";

interface IAppTextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  showOutline?: boolean;
  customStyles?: string;
}

function AppTextInput(
  {
    type = "text",
    placeholder,
    customStyles = "",
    showOutline = true,
    error,
    ...rest
  }: IAppTextInput,
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  ref: any
) {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        className={`text-sm bg-lightGreyPlus px-4 py-3 h-[50px] rounded-lg w-full outline-none ${
          showOutline ? "focus:outline-2 focus:outline-primary" : ""
        } ${customStyles}`}
        {...rest}
        ref={ref}
      />
      {error && (
        <p className="text-[0.75rem] text-red-500 mt-1 ml-auto">{error}</p>
      )}
    </div>
  );
}

export default React.forwardRef(AppTextInput);
