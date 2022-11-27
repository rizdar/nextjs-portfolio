import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rizki Darmawan - Welcome to my portfolio</title>
        <meta name="description" content="Rizki Darmawan is a programmer" />
      </Head>

      <section className="text-center  mt-14 cmd:mt-10 csm:py-14 dark:bg-gray-900">
        <div className="p-20  mx-auto clg:p-16 cmd:p-10 csm:p-2 ">
          <div>
            <h5 className="text-gray-600 font-medium text-2xl mb-4 csm:text-lg csm:mb-1 dark:text-gray-400">Hello I'am</h5>
            <h1 className="text-gray-700 font-bold text-6xl uppercase mb-4 csm:mb-1 clg:text-5xl csm:text-3xl dark:text-gray-300">Rizki Darmawan</h1>
            <h4 className="text-teal-500 font-bold text-4xl uppercase mb-4 clg:text-3xl csm:text-[18px] csm:mb-1">Front End Engineering</h4>
          </div>
          <hr className="block w-1/2  csm:w-3/4 mx-auto  h-1 bg-teal-500 rounded  " />
          <div className="mt-4 mx-auto max-w-5xl csm:mt-2 csm:p-2 ">
            <p className="italic text-lg text-gray-500 csm:text-xs dark:text-gray-400">
              I'm a junior frontend web developer with modern technology, and also has a degree in Informatics Engineering. I'm currently learning to be a fullstack developer too.
            </p>
            <Link href="/about" className="mt-20 clg:mt-16 cmd:mt-10 csm:mt-4 mb-8 uppercase inline-block text-white bg-teal-500 py-2 px-4 rounded-md hover:bg-teal-400 font-semibold csm:text-[8px] csm:py-1 csm:px-2">
              Contact Me
            </Link>
          </div>
          <div className="flex">
            <a href="https://github.com/rizdar">
              <AiFillGithub className="w-8 h-8 csm:w-7 csm:h-7 cursor-pointer fill-teal-500 hover:fill-teal-400" />
            </a>
            <a href="https://www.linkedin.com/in/rizki-darmawan-48141221b">
              <AiFillLinkedin className="w-8 h-8 csm:w-7 csm:h-7 cursor-pointer fill-teal-500 hover:fill-teal-400" />
            </a>
            <a href="https://www.instagram.com/rizdar96">
              <AiFillInstagram className="w-8 h-8 csm:w-7 csm:h-7 cursor-pointer fill-teal-500 hover:fill-teal-400" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-r from-teal-800 to-violet-900  flex gap-8 p-20 cxl:p-14 clg:p-8 csm:p-4 clg:gap-4 csm:block ">
          <div className="csm:mb-8 csm:text-center csm:px-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 csm:w-8 csm:h-8 fill-teal-500 mb-4 csm:mb-2 csm:block csm:mx-auto ">
              <path
                fillRule="evenodd"
                d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                clipRule="evenodd"
              />
            </svg>

            <h3 className="text-gray-300 font-semibold text-2xl mb-2 clg:text-xl clg:font-bold clg:mb-1 csm:text-lg ">Modern technology</h3>
            <p className="text-gray-400 text-md font-medium clg:text-sm">I use modern and latest technology to create web applications, and I also like to learn new things</p>
          </div>
          <div className="csm:mb-8 csm:text-center csm:px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10  csm:w-8 csm:h-8 fill-teal-500 mb-4 csm:mb-2 csm:block csm:mx-auto">
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>

            <h3 className="text-gray-300 font-semibold text-2xl mb-2 clg:text-xl clg:font-bold clg:mb-1 csm:text-lg">Bachelor of Computer Science</h3>
            <p className="text-gray-400 text-md font-medium clg:text-sm">I have degree related to computer and digital world, i learned basic programming from campus</p>
          </div>
          <div className="csm:mb-8 csm:text-center csm:px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10  csm:w-8 csm:h-8 fill-teal-500 mb-4 csm:mb-2 csm:block csm:mx-auto">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-gray-300 font-semibold text-2xl mb-2 clg:text-xl clg:font-bold clg:mb-1 csm:text-lg">Good Personality</h3>
            <p className="text-gray-400 text-md font-medium clg:text-sm">I am a person who always thinks positive, has responsibility and is also friendly</p>
          </div>
        </div>
      </section>

      <section className="p-20 text-center clg:p-16 cmd:p-10 csm:p-4 dark:bg-slate-900">
        <div className="mb-20 csm:mb-8">
          <h2 className="text-gray-600 font-bold text-4xl mb-4 csm:mb-2 cmd:text-2xl csm:text-xl dark:text-gray-300">Tools & Skills</h2>
          <div className="w-2/3 csm:w-5/6 mx-auto">
            <p className="italic text-lg text-gray-500 cmd:text-sm csm:text-xs dark:text-gray-400">some of the skills that I currently have and I will continue to learn to improve my skills</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-y-8 gap-x-2 clg:gap-x-2 csm:gap-y-4 text-justify justify-items-center items-center">
          <div className="">
            <Image src="/images/image 1.png" width={70} height={70} alt="next js logo" className="w-20 h-20 csm:w-10 csm:h-10" />
            <p className="text-gray-500 text-center mt-2 csm:text-[10px]">Next Js</p>
          </div>
          <div>
            <Image src="/images/image 2.png" width={170} height={270} alt="react js logo" className="w-20 csm:w-10" />
            <p className="text-gray-500 text-center mt-2 csm:text-[10px]">React Js</p>
          </div>
          <div>
            <Image src="/images/image 3.png" width={70} height={70} alt="tailwind css logo" className="w-20 csm:w-10" />
            <p className="text-gray-500 text-center mt-2 csm:text-[10px]">Tailwind CSS</p>
          </div>
          <div>
            <Image src="/images/image 4.png" width={200} height={370} alt="Sass logo" className="w-20 csm:w-10 csm:text-[10px]" />
            <p className="text-gray-500 text-base mt-2 text-center">SASS</p>
          </div>
          <div>
            <Image src="/images/image 5.png" width={200} height={400} alt="node js logo" className="w-32 csm:w-14" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">Node Js</p>
          </div>
          <div>
            <Image src="/images/image 6.png" width={200} height={400} alt="express js logo" className="w-32 csm:w-20 dark:bg-gray-300 dark:p-2" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">Express Js</p>
          </div>
          <div>
            <Image src="/images/image 7.png" width={170} height={170} alt="javascript logo" className="w-20 csm:w-10" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">JavaScript</p>
          </div>
          <div>
            <Image src="/images/image 8.png" width={200} height={400} alt="mongoDB logo" className="w-32 csm:w-16 dark:bg-gray-300 dark:p-2" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">MongoDB</p>
          </div>
          <div>
            <Image src="/images/image 9.png" width={70} height={70} alt="css logo" className="w-20 csm:w-10" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">CSS</p>
          </div>
          <div>
            <Image src="/images/image 10.png" width={70} height={70} alt="typeScript logo" className="w-20 csm:w-10" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">TypeScript</p>
          </div>
          <div className="mr-3 csm:mr-0">
            <Image src="/images/image 11.png" width={70} height={70} alt="html logo" className="w-20 csm:w-10" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">HTML</p>
          </div>
          <div className="ml-6 csm:ml-0">
            <Image src="/images/image 12.png" width={70} height={70} alt="git logo" className="w-20 csm:w-10" />
            <p className="text-gray-500 mt-2 text-center csm:text-[10px]">GIT</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
