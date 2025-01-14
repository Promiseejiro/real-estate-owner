"use client";

import React from "react";
import OTPInput from "react-otp-input";

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<IProps["value"]>>;
  numberOfInputs?: number;
  visible?: boolean;
}

const OtpInput: React.FC<IProps> = ({
  value,
  setValue,
  numberOfInputs = 4,
  visible = true,
}) => {
  return (
    <OTPInput
      value={value}
      onChange={setValue}
      inputType={visible ? "text" : "password"}
      numInputs={numberOfInputs}
      inputStyle={{
        backgroundColor: "#F8F8FA",
        width: numberOfInputs === 4 ? 70 : 50,
        height: numberOfInputs === 4 ? 65 : 50,
        borderRadius: 8,
      }}
      containerStyle={{
        display: "flex",
        alignItems: "center",
        gap: numberOfInputs === 4 ? 12 : 8,
        justifyContent: "space-between",
      }}
      shouldAutoFocus
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      renderInput={(props: any) => <input {...props} />}
    />
  );
};

export default OtpInput;
