import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';

function Portfolio() {
  return (
    <Fragment>
      <Head>
        <title>Rizki Darmawan - Some of my Project </title>
        <meta name="description" content="rizki darmawan project portfolio" />
      </Head>
      <section className="dark:bg-slate-900 csm:pb-4">
        <div className="pb-20  pt-24 csm:mt-14 csm:mb-4 p-12 csm:p-8">
          <h2 className="text-gray-600 font-bold text-4xl mb-4 uppercase text-center cmd:text-3xl cmd:mb-2 csm:text-xl csm:mb-1 dark:text-gray-300">
            <span className="text-teal-500">my</span> portfolio
          </h2>
          <hr className="block w-1/4 mx-auto  h-1 bg-teal-500 rounded mb-8 cxl:mb-4 csm:mb-2" />
          <div className="w-1/2 cmd:w-full mx-auto">
            <p className="italic text-lg text-gray-500 text-center cmd:text-base csm:text-base dark:text-gray-400">some of the portfolios that I have, will increase in the future</p>
          </div>

          <div className="flex flex-wrap csm:block gap-52 cxl:gap-40 clg:gap-20 cmd:gap-10 justify-center mt-16">
            <div className="csm:mb-20">
              <Image src="/images/portfolio/nextfurniture.png" width={400} height={300} alt="al-quran web" className="bg-white w-96 clg:w-64 csm:w-full mb-8 dark:bg-slate-900" priority={true} />
              <h6 className="text-gray-700 font-semibold text-xl dark:text-gray-300">Next Furniture (fullstack)</h6>
              <p className="text-gray-500 mb-4 dark:text-gray-400">Stack : React, Next Js, Supabase </p>
              <a href="https://nextfurniture.vercel.app/" className="mb-8 uppercase block text-white bg-teal-500 py-2 px-4 rounded-md hover:bg-teal-400 font-semibold text-center" target="_blank">
                LIVE DEMO
              </a>
            </div>
            <div className="csm:mb-20">
              <Image src="/images/portfolio/alquran.png" width={400} height={300} alt="al-quran web" className="bg-white w-96 clg:w-64 csm:w-full mb-8 dark:bg-slate-900" priority={true} />
              <h6 className="text-gray-700 font-semibold text-xl dark:text-gray-300">Al-Quran Web</h6>
              <p className="text-gray-500 mb-4 dark:text-gray-400">Stack : React, React Query</p>
              <a href="https://alquranweb-id.netlify.app/" className="mb-8 uppercase block text-white bg-teal-500 py-2 px-4 rounded-md hover:bg-teal-400 font-semibold text-center" target="_blank">
                LIVE DEMO
              </a>
            </div>

            <div className="csm:mb-20">
              <Image src="/images/portfolio/omnifood.png" width={400} height={300} alt="omnifood landing page" className="bg-white w-96 clg:w-64 csm:w-full mb-8 dark:bg-slate-900" priority={true} />
              <h6 className="text-gray-700 font-semibold text-xl dark:text-gray-300">Omnifood (Landing Page)</h6>
              <p className="text-gray-500 mb-4 dark:text-gray-400">Stack : html, css, JavaScript</p>
              <a href="https://omnifood-rizki.netlify.app" className="mb-8 uppercase block text-white bg-teal-500 py-2 px-4 rounded-md hover:bg-teal-400 font-semibold text-center" target="_blank">
                LIVE DEMO
              </a>
            </div>
            <div>
              <Image src="/images/portfolio/natours.png" width={900} height={700} alt="omnifood landing page" className="bg-white w-96 clg:w-64 csm:w-full mb-8 dark:bg-slate-900" />
              <h6 className="text-gray-700 font-semibold text-xl dark:text-gray-300">Natours (Landing Page)</h6>
              <p className="text-gray-500 mb-4 dark:text-gray-400">Stack : html, css, SASS</p>
              <a href="https://natours-rizki.netlify.app/" className="mb-8 uppercase block text-white bg-teal-500 py-2 px-4 rounded-md hover:bg-teal-400 font-semibold text-center" target="_blank">
                LIVE DEMO
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Portfolio;
