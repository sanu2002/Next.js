import Image from "next/image";
import Link from "next/link";
import Navigation from "./_components/navigation";
import bg from "./_images/Back2.jpg"



export default function Home() {
  return (
    <div>

        <main className="mt-16">

          <Image src={bg} fill placeholder="blur" alt="Mountain and forest" className="object-cover "  />

          <div className="relative z-10 ml-40 mt-30">


            <h1 className="text-8xl  text-primary-50 mb-10 tracking-tight font-normal  align-top ">Welcome to paradise </h1>
            <Link href="/cabins" className=" bg-accent-600  ml-72 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all  " >
              Explore luxury cabins
            
            </Link>


          </div>



        </main>



    </div>

  );
}
