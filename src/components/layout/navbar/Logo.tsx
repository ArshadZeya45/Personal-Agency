import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logo"
        width={180}
        height={65}
        className="w-auto h-auto"
      />
    </Link>
  );
};
export default Logo;
