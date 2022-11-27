import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';

function About() {
  return (
    <Fragment>
      <Head>
        <title>Rizki Darmawan - Little about me </title>
        <meta name="description" content="about rizki darmawan" />
      </Head>
      <section className="pt-32 pb-20  csm:pt-24 dark:bg-gradient-to-r from-teal-800 to-violet-900">
        <div className="mb-20 csm:mb-11">
          <h2 className="text-gray-600 font-bold text-4xl  mb-4 uppercase text-center cmd:text-3xl cmd:mb-2 csm:mb-1 csm:text-xl dark:text-gray-300">
            about <span className="text-teal-500">me</span>
          </h2>
          <hr className="block w-1/4 mx-auto  h-1 bg-teal-500 rounded mb-8 clg:mb-4 csm:mb-2" />
          <div className="w-1/2 mx-auto cxl:w-4/5 csm:w-[90%]">
            <p className="italic text-lg text-gray-500 text-center cmd:text-base csm:text-base dark:text-gray-400">a little about me and you can connect with me through some of the media contacts I have below</p>
          </div>
        </div>

        <div className="flex gap-16 justify-center w-3/4 cxl:w-[85%] cxl:gap-8 clg:gap-4 clg:w-[90%]  items-center mx-auto px-4 cxl:px-0  csm:block">
          <Image src="/images/rectangle1.png" width={940} height={900} className="w-52 cxl:w-48 cmd:w-44 cxl:mr-4 csm:w-[90%] csm:mx-auto csm:mb-8 " alt="my photo" />

          <div className="flex csm:justify-center">
            <div className="text-teal-500 text-2xl cmd:text-xl csm:text-base  csm:font-bold font-medium grid grid-cols-1 gap-3 cxl:gap-2 csm:gap-0">
              <h6>Name</h6>
              <h6>Date Of Birth</h6>
              <h6>Phone</h6>
              <h6>Email</h6>
              <h6>Address</h6>
            </div>
            <div className="text-teal-500 text-2xl font-medium grid grid-cols-1 gap-3 cxl:gap-2 text-right cmd:text-xl csm:text-base csm:font-bold csm:gap-0">
              <h6>Rizki Darmawan</h6>
              <h6>March, 30th 1996</h6>
              <h6>+6287889620618</h6>
              <h6 className="csm:text-sm">rizdar.contact@gmail.com</h6>
              <h6>Pemalang, Indonesia</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 csm:pt-16  pb-8 csm:mb-4 mx-auto w-full dark:bg-slate-900">
        <div className="csm:w-full">
          <h2 className="text-gray-600 font-bold text-4xl mb-4 uppercase text-center cmd:text-3xl cmd:mb-2 csm:text-xl csm:mb-1 dark:text-gray-300">
            <span className="text-teal-500">my</span> education
          </h2>
          <hr className="block w-1/4 mx-auto  h-1 bg-teal-500 rounded mb-20 clg:mb-16 csm:mb-4" />
        </div>

        <div className="flex gap-4 cmd:gap-0 p-16 justify-center cxl:p-0 csm:p-12">
          <div className="w-96">
            <div className="w-full h-32 border-r-4 border-teal-500 relative flex flex-row justify-center items-center">
              <div className="w-10 h-10 bg-teal-500 rounded-full absolute top-0 right-0 translate-x-1/2 flex flex-row justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              </div>
            </div>
            <div className="w-full h-32 csm:h-72 border-r-4 border-teal-500 relative ">
              <h6 className="text-teal-500 text-lg font-bold text-right mr-8 cmd:text-base csm:text-left csm:mx-auto">2016-2021</h6>
              <div className="w-6 h-6 bg-teal-500 rounded-full absolute top-0 right-0 translate-x-1/2"></div>
            </div>
            <div className="w-full h-32 csm:h-72 border-r-4 border-teal-500 relative">
              <h6 className="text-teal-500 text-lg font-bold text-right mr-8 cmd:text-base csm:text-left csm:mx-auto">2011-2014</h6>
              <div className="w-6 h-6 bg-teal-500 rounded-full absolute top-2 right-0 translate-x-1/2"></div>
            </div>
            <div className="w-full h-32  csm:h-72 border-r-4 border-teal-500 relative">
              <h6 className="text-teal-500 text-lg font-bold text-right mr-8 cmd:text-base csm:text-left csm:mx-auto">2008-2011</h6>
              <div className="w-6 h-6 bg-teal-500 rounded-full absolute top-2 right-0 translate-x-1/2"></div>
            </div>
            <div className="w-full h-32 border-r-4 border-teal-500 relative">
              <h6 className="text-teal-500 text-lg font-bold text-right mr-8 cmd:text-base csm:text-left csm:mx-auto">2002-2006</h6>
              <div className="w-6 h-6 bg-teal-500 rounded-full absolute top-2 right-0 translate-x-1/2"></div>
            </div>
          </div>

          <div className="ml-4 clg:ml-0 cmd:px-8 csm:px-6">
            <div>
              <div className="w-full h-32"></div>
              <div className="w-full h-32 csm:h-72">
                <h6 className="text-teal-500 text-2xl font-semibold clg:text-2xl cmd:text-xl ">Bachelor Degree / Universitas Pamulang</h6>
                <p className="text-gray-500 text-md font-light cmd:text-sm dark:text-gray-400">Bachelor Degree of Informatics Engineering from Pamulang University. start learning programming at the college. </p>
              </div>
            </div>
            <div className="w-full h-32 csm:h-72">
              <div>
                <h6 className="text-teal-500 text-2xl cmd:text-xl font-semibold ">Senior High School / SMK Sapra 2 Petarukan</h6>
                <p className="text-gray-500 text-md cmd:text-sm font-light dark:text-gray-400">Automotive Major, began to like the world of computers. Start join organitation and comunity </p>
              </div>
            </div>
            <div className="w-full csm:h-72 h-32">
              <h6 className="text-teal-500 text-2xl cmd:text-xl font-semibold">Junior High School / SMP N 6 Petarukan</h6>
              <p className="text-gray-500 text-md font-light cmd:text-sm dark:text-gray-400">graduated with good results </p>
            </div>
            <div className="w-full h-32">
              <h6 className="text-teal-500 text-2xl cmd:text-xl font-semibold">Elementary School / SDN 01 Widodaren</h6>
              <p className="text-gray-500 text-md font-light cmd:text-sm dark:text-gray-400">graduated with good results. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 csm:pt-4  mb-20 csm:mb-8 mx-auto w-3/4 clg:w-[90%]">
        <div>
          <h2 className="text-gray-600 font-bold text-4xl mb-4 uppercase text-center cmd:text-3xl cmd:mb-2 csm:text-xl">
            <span className="text-teal-500">my </span>hobbies
          </h2>
          <hr className="block w-1/4 mx-auto  h-1 bg-teal-500 rounded mb-8 clg:mb-4" />
          <div className="w-2/3 csm:w-11/12 mx-auto">
            <p className="italic text-lg text-gray-500 text-center csm:text-base">I love football, i spend a lot of time for learn, of course writing code is the most i love</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
