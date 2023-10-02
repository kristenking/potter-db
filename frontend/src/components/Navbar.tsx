import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div color="transparent" className="my-2">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Potter DB" width="101" height="60" />
      </Link>
    </div>
  );
}
