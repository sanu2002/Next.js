import Logo from "./_components/Logo";
import Navigation from "./_components/navigation";
import Headers from "./_components/header";


import {Josefin_Sans} from "next/font/google" ;

const josefin= Josefin_Sans({
   subsets:["latin"],
   display:"swap",
})


// console.log(josefin)


import "@/app/_styles/global.css"





export const metadata = {
  title: {
    template:"%s / The wild Oasis",
    default:"Welcome / the wild Oasis"
  },

  description:"Luxurious cabin hotel , located in the heart of italian Dolomites meets surrounded by beautiful mountains and dark forest ",


};




export default function RootLayout({children}){

  return <html lang="en">

    <body  className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen 7 flex flex-col`}>
       
        <Headers/>

        <div className="flex-1 px-8 py-12  ">
        
            <main className="max-w-7xl mx-auto   ">{children}</main>
            

       </div>

        
 

     </body>
    
  </html>

}