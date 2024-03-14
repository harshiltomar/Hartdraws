"use client";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "./button";
import { DialogContent } from "./dialog";

const UploadButton = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  //v for visible
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setisOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setisOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>Example Content</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
