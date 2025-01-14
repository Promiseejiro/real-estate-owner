"use client";

import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ModalBackdrop from "../modalBackdrop";

interface IAnimatedModalLayout {
  children: React.ReactNode;
  className?: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCloseIcon?: boolean;
  maxWidth?: number;
}
export default function AnimatedModalLayout({
  children,
  className = "",
  setShowModal,
  maxWidth = 500,
  showCloseIcon = false,
}: IAnimatedModalLayout) {
  const modalBackgroundRef = useRef<HTMLDivElement | null>(null);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const backDropCloseHandler = (e: any) => {
    if (!modalBackgroundRef.current?.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <ModalBackdrop
      onClose={backDropCloseHandler}
      className="bg-transparentDark grid place-items-center p-4 modal-bg-inner-opacity-animation overflow-hidden"
    >
      <div
        style={{ maxWidth }}
        ref={modalBackgroundRef}
        className={`bg-white rounded-2xl w-full modal-inner-move-up-animation ${className}`}
      >
        {showCloseIcon && (
          <span
            className="absolute top-4 right-6 md:top-6 md:right-4 cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <IoCloseOutline size={28} className="text-dark" />
          </span>
        )}
        {children}
      </div>
    </ModalBackdrop>
  );
}
