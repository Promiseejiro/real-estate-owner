import { Check } from "lucide-react";

export const ProgressBar = () => {
  const steps: { name: string; amount: number; passed: boolean }[] = [
    { name: "Pending", amount: 300000000, passed: true },
    { name: "Paid", amount: 300000000, passed: true },
    { name: "Agrement", amount: 300000000, passed: false },
    { name: "Handover", amount: 300000000, passed: false },
  ];
  const step = 3;
  return (
    <div className="w-full max-w-[485px] mx-auto mt-6 mb-8 flex">
      {steps.map((item, index: number) => (
        <div
          className="w-full flex flex-col items-center justify-center gap-4"
          key={index}
        >
          <p className="text-sm">{item.amount}</p>
          <div className="flex w-full  items-center relative">
            <div
              className={`w-full h-[10px] rounded-r-md ${
                index < 1
                  ? "border-none"
                  : step > index
                  ? "bg-primary"
                  : "bg-white border-solid border-primary  border-t border-b"
              } `}
            ></div>
            <span
              className={`min-w-[18px] min-h-[18px] bg-white rounded-full  absolute left-[42%] border-solid border-[1.5px] border-primary z-20 flex justify-center items-center`}
            >
              {step > index ? (
                <Check className="text-primary h-[16px] w-[16px]" />
              ) : (
                <Check className="text-white h-[16px] w-[16px]" />
              )}
            </span>
            <div
              className={`w-full h-[10px] rounded-l-md ${
                index === steps.length - 1
                  ? "border-none"
                  : step - 1 > index
                  ? "bg-primary"
                  : "bg-white border-solid border-primary border-t border-b"
              } `}
            ></div>
          </div>
          <p className="text-sm font-medium">{item.name}</p>
        </div>
      ))}

      {/* {steps.map((item, index: number) => (
        <div className="flex flex-col w-full" key={index}>
          <p className="translate-x-[-1.5rem]">{item.amount}</p>
          <div className="">
            <div
              className={`flex justify-between items-center h-[16px] border-primary border-solid border ${
                index < steps.length - 1 ? " w-full " : "w-[8px]"
              } `}
            >
              <span
                className={`w-[16px] h-[16px] rounded-full bg-green-600 translate-x-[-.5rem]`}
              ></span>
            </div>
          </div>
          <p className="translate-x-[-1.5rem]">{item.name}</p>
        </div>
      ))} */}
    </div>
  );
};
