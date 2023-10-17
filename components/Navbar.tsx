import { Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex align-middle justify-between px-8 py-4 sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-lg">
      <div className="w-fit flex align-middle justify-between gap-2 place-items-center">
        <Image src="greatexc-logo.svg" alt="" width={30} height={30} />
        <h4 className="font-bold md:flex hidden">Great Exchange</h4>
      </div>
      <div className="gap-2 flex align-middle justify-between">
        <Button variant="outline">
          <Link href={"/register"}>Sign up</Link>
        </Button>
        <Button variant="solid" className="md:flex hidden">
          <Link href={"/login"}>Sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
