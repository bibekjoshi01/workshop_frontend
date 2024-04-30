import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useRef } from "react";
import RegisterInEvent from "../forms/registerInEvent";

interface ConfirmRegistrationProps {
  open: boolean;
  close: () => void;
}
export default function ConfirmRegistration({
  open,
  close,
}: ConfirmRegistrationProps) {
  const confirmModalref = useRef<any>();
  const closeModalref = useRef<any>();

  useEffect(() => {
    close();
  }, [close]);

  useEffect(() => {
    if (open) {
      confirmModalref.current.click();
    } else {
      closeModalref?.current?.click();
    }
  }, [open]);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger ref={confirmModalref}></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <RegisterInEvent />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel ref={closeModalref}>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
