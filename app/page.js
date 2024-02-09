import Image from "next/image";
import logo from './/public/logo.svg';
import lightbulb from './/public/lightbulb.png';
import trophy from './/public/trophy.png';
import team from './/public/team.png';
import desktop from './/public/desktop-size.png'
import tablet from './/public/tablet-size.png'
import mobile from './/public/mobile-size.png'
import aboutme from './/public/aboutme.png'

export default function Home() {
  return (
    <main className="bg-black px-10">
     <section className="min-h-screen ">

    {/* Nav section */}

      <nav className="py-10 mb-12 en text-white text-center">

      <div className="flex justify-center">
        <Image src={logo} />
      </div>
        
          <ul className="flex justify-evenly py-10">
            <li><a className="cursor-pointer text-xl" href="#">Portfolio</a></li>
            <li><a className="cursor-pointer text-xl" href="#">About</a></li>
            <li><a className="cursor-pointer text-xl" href="#">LinkedIn</a></li>
            <li><a className="cursor-pointer text-xl" href="#">GitHub</a></li>
          </ul>

      <div className="flex justify-center">
        <a className="bg-purple-500 px-4 py-2 rounded-md" href="#">Contact Us</a>
      </div>

      </nav>

      {/* Intro Text Section */}

      <div className="flex flex-col bg-[url('.//public/striped-circle.svg')] 
      bg-no-repeat bg-left-top bg-[length:636px_636px] py-10  h-lvh overflow-visible">
        
        <div className="flex text-4xl font-bold pr-10 px-6">
          <h1 className="text-white"><span className="text-purple-500">Transforming</span> Your Ideas into Reality</h1>
        </div>
        
        <div className="flex py-10 px-6">
          <a className="bg-purple-500 px-6 py-3 rounded-md text-white " href="#">Work With Us</a>
        </div>

        <div className="flex text-xl text-gray-300 pr-18 px-6 ">
          <p>At Angela Taylor LLC, we're passionate about transforming ideas into digital reality. 
            With expertise in website and mobile application development, we empower small businesses 
            to thrive in the digital landscape.</p>
        </div>

      </div>

    {/* Features Section */}

      <div className="flex flex-col pb-14">

        <div className="flex flex-col px-8 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={lightbulb} />
            </div>
            <h1 className="text-white text-2xl font-bold m-auto p-3">Creative Solutions</h1>
            <p className="text-gray-300 text-base p-3 text-center" >Tailored websites and apps 
            reflecting your brand.</p>
          </div>
        </div>

        <div className="flex flex-col px-8 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={trophy} />
            </div>
            <h1 className="text-white text-2xl font-bold m-auto p-3">Results-Driven</h1>
            <p className="text-gray-300 text-base p-3 text-center" >We focus on deliverying tangible 
            results for your business.</p>
          </div>
        </div>

        <div className="flex flex-col px-8 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={team} />
            </div>
            <h1 className="text-white text-2xl font-bold m-auto p-3 text-center">Crafting Success Together</h1>
            <p className="text-gray-300 text-base p-3 text-center" >Our skilled team collaborates 
            with you to shape a beautifully crafted digital product.</p>
          </div>
        </div>
      </div>
      
      {/* Project Example Section */}

      <div className="flex flex-col">
        <h1 className="text-white text-xl font-bold text-center py-2">Featured Project - AbleNFTMint</h1> 
        <h2 className="text-white text-lg font-bold text-center py-2">Desktop Size - 1920px Width</h2>
        <Image className="pb-10 mx-auto" src={desktop} />

        <h2 className="text-white text-lg font-bold text-center py-2">Tablet Size - 1100px Width</h2>
        <Image className="pb-10 mx-auto" src={tablet} />

        <h2 className="text-white text-lg font-bold text-center py-2">Mobile Size - 720px Width</h2>
        <Image className="pb-10 mx-auto" src={mobile} />
      </div>
      
    {/* Contact Purple Box Section */}

    <div className="flex flex-col pb-16">

      <div className="bg-gradient-to-r from-indigo-500  to-fuchsia-500 rounded-md
        h-80 ">

        <p className="text-white text-center text-lg pt-16 pb-10">Want to work with us? Let's talk</p>

        <div className="flex justify-center">
          <a className="bg-white px-4 py-2 rounded-md" href="#">Contact Us</a>
        </div>

        <h1 className="text-white font-bold text-2xl text-center py-10"> hello@angelataylorllc.com</h1>
      </div>

    </div>

    {/* Footer Section */}

    <div className="flex flex-col text-white">

      <Image className="w-48 pl-6 py-6" src={logo} />

      <h1 className="text-gray-300 text-xl pl-6">About Us</h1>
      
      <p className="py-6 text-gray-300 text-lg pl-6">At Angela Taylor LLC, we're your dedicated digital 
      partners. Our team is on a mission to empower small businesses through innovative websites and 
      mobile applications. With a focus on collaboration and tailored solutions, we turn your vision into 
      a digital reality. Our commitment is to provide not just services, but a personalized journey to success. 
      Join us at Angela Taylor LLC, where your digital aspirations take center stage.</p>
      
      <div className="flex justify-center">
        <Image src={aboutme} />
      </div>

    </div>

     </section>
    </main>
  );
}
