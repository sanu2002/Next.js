import bg from "@/app/_images/Back2.jpg"
import Image from "next/image";
import Link from "next/link";



export default function About() {
  return (

    <div className=" grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center ">


      <div className="col-span-3 ">

        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>


        <div className="space-y-8">
          <p>Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family.

          </p>


          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you'll find in the surrounding mountains. Wander through lush
            forests, breathe in the fresh air, and watch the stars twinkle above
            from the warmth of a campfire or your hot tub.
          </p>

          <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p>

        </div>

      </div>



      <div className="col-span-2">
        <Image
          src={bg}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>



        <div className="col-span-2">
          
        {/* //wann use this then also add relative aspect-square this 2 on upper class  */}
        {/* <Image
          src='/the-wild-oasis-website/app/_images/Back2.jpg'
          fill // it will show the size is 0
          className="object-cover"
          alt="Family sitting around a fire pit in front of cabin"
        /> */}
        <Image
          src={bg}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>


           <div className="col-span-3">

        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>


        <div className="space-y-8">
          <p>Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family.

          </p>


          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you'll find in the surrounding mountains. Wander through lush
            forests, breathe in the fresh air, and watch the stars twinkle above
            from the warmth of a campfire or your hot tub.
          </p>

          <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p>
          
          
        <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>

        </div>

      </div>















    </div>

  );
}