import Image from "next/image";
import Link from "next/link";
import Navigation from "./_components/navigation";


export default function Home() {
  return (
    <div>
      

      {/* <Navigation/> */}
      <h1>The wise Oasis welcome to Paradise !</h1>

      {/* <a href="/cabins">Explore luxury</a> */} // Not recommended it will take full page reload
      <Link href="/cabins" >Explore luxury</Link>

    </div>

  );
}
