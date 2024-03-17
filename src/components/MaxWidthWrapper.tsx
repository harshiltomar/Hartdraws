import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  //props to be passed
  classname,
  children,
}: {
  classname?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        classname
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
