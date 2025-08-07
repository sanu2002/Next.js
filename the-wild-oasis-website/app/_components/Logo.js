import Image from "next/image";
import Link from "next/link";

import dogo from "@/app/_images/Logo.jpg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={dogo}
          alt="The Wild Oasis Logo"
          // width={48}   
          // height={48}  No need to use this 


          className="object-cover"
        />
      </div>
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
