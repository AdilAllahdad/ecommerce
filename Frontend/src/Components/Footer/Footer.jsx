import React from "react";
import bgImg from "../../assets/footerBackground.jpg";
import logo from "../../assets/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt
} from "react-icons/fa";

export const Footer = () => {
  const impLinks = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 4,
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <div className="">
      {/* FOOTER BACKGROUND */}
      <footer class="text-white body-font">
        <div
          className=""
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            height: "100%",
            width: "100%",
          }}
        >
          <div class="container px-5 pt-10 pb-44 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
            <div class="w-full md:w-4/12 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left px-8">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <img className="max-w-[50px]" src={logo} alt="" />
                <span class="ml-3 text-3xl font-bold">Shopsy</span>
              </a>
              <p class="mt-2 text-sm text-white pr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                beatae ea recusandae blanditiis veritatis.
              </p>
            </div>
            <div class="flex-grow flex  flex-wrap  md:text-left text-center">
              <div class="w-full  md:w-4/12 px-4">
                <h1 class="title-font font-bold text-white tracking-widest  mb-3 text-xl">
                  Important Links
                </h1>
                {impLinks.map((data,index) => (
                  <nav key={index} class="list-none mb-3">
                    <li className="">
                      <a
                        class="text-white hover:text-orange-300 hover:translate-x-1 duration-300 cursor-pointer"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  </nav>
                ))}
              </div>
              <div class="w-full  md:w-4/12 px-4">
                <h2 class="title-font font-bold text-white tracking-widest  mb-3 text-xl">
                  Links
                </h2>
                {impLinks.map((data) => (
                  <nav class="list-none mb-3">
                    <li className="">
                      <a
                        class="text-white hover:text-orange-300 hover:translate-x-2 duration-300 cursor-pointer"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  </nav>
                ))}
              </div>

              <div class="lg:w-1/4 md:w-1/2 w-full justify-center px-4 flex flex-col items-center">
  <h2 class="title-font font-medium text-white tracking-widest text-3xl mb-3">
    <div className="flex gap-4 mb-6 justify-center">
      <FaInstagram className="cursor-pointer" />
      <FaFacebook className="cursor-pointer" />
      <FaLinkedin className="cursor-pointer" />
    </div>
  </h2>

  <div className="flex items-center gap-3 mb-4 justify-center">
    <FaLocationArrow />
    <p>Noida, Uttar Pradesh</p>
  </div>
  <div className="flex items-center gap-3 justify-center">
    <FaMobileAlt />
    <p>Noida, Uttar Pradesh</p>
  </div>
</div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
