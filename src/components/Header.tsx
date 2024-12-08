import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon, PersonIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ContactsButton from "./ContactsButton";
import Logo from "@/assets/Logo";

export default function Header() {
  return (
    <div className="bg-zinc-950 xl:pb-[28px] xl:pt-[14px] pt-[12px] pb-[24px]  xl:px-[50px] lg:px-[40px] md:px-[35px] px-[20px] flex gap-4 items-end justify-between">
      <Link
        to="/"
        className="font-Fluence font-thin tracking-widest lg:text-4xl md:text-3xl ssm:text-2xl text-2xl leading-tight"
      >
        <Logo className="xl:w-72 lg:w-60 md:w-56 w-48" />
      </Link>
      <div className="flex gap-2">
        <ContactsButton>
          <Button
            variant="ghost"
            className="lg:text-lg md:text-md text-sm dark flex pb-0 sm:pb-[8px]"
          >
            <PersonIcon className="ssm:mr-2 lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4" />
            <div className="hidden ssm:block">Контакты</div>
          </Button>
        </ContactsButton>

        <Button
          variant="ghost"
          className="lg:text-lg md:text-md text-sm dark hidden sm:flex"
          onClick={async () => {
            await navigator.clipboard.writeText("+7 925 985 98-40");
            toast.success("Скопировано в буфер обмена");
          }}
        >
          <ClipboardCopyIcon className="mr-2 lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4 " />
          +7 925 985 98-40
        </Button>
      </div>
    </div>
  );
}
