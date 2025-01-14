export const ProgressBar = () => {
  const steps: { name: string; amount: number; passed: boolean }[] = [
    { name: "Pending", amount: 300000000, passed: true },
    { name: "Paid", amount: 300000000, passed: true },
    { name: "Agrement", amount: 300000000, passed: true },
    { name: "Handover", amount: 300000000, passed: true },
  ];
  return (
    <div className="w-full max-w-[485px] mx-auto mt-6 mb-8  flex ">
      {steps.map((item, index: number) => (
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
      ))}
    </div>
  );
};
