"use client";
import { Button } from "@/components/ui/button";
import ConfirmRegistration from "./../../../components/modal/confirmRegistration";
import { useState } from "react";

export default function AttendButton() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const handleRegister = () => {
    setOpenRegisterModal(true);
  };
  return (
    <>
      <ConfirmRegistration
        open={openRegisterModal}
        close={() => setOpenRegisterModal(false)}
      />
      <Button
        variant="default"
        onClick={handleRegister}
        className="p-6 hover:scale-95 transition-all"
      >
        Attend
      </Button>
    </>
  );
}
