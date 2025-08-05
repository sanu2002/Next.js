import Logo from "./components/Logo";
import Navigation from "./components/navigation";


export const Metadata ={
  "title":"The old Oasis"
}




export default function RootLayout({children}){

  return <html lang="en">

    <body>
       <header>
        <Logo />
        <Navigation />

       </header>
        <main>{children}</main>
        <footer>@CopyRight By sanujit</footer>
 

     </body>
    
  </html>

}