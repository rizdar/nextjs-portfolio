import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LightIcon from './utils/light-icon';
import MoonIcon from './utils/moon-icon';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';

function Layout(props) {
  const [darkMode, setDarkMode] = useState(false);

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  const menuBurger = <AiOutlineMenu onClick={openHandler} className="w-8 h-8 csm:w-6 csm:h-6 invisible csm:visible dark:fill-slate-300" />;
  const closeMenu = <AiFillCloseCircle onClick={closeHandler} className="w-10 h-10 mt-1 invisible csm:visible csm:fill-teal-500 absolute" />;

  const today = new Date();
  const year = today.getFullYear();
  return (
    <Fragment>
      <header className="py-4 fixed w-full bg-white top-0 left-0 z-40 dark:bg-gray-900">
        <div className="flex justify-between items-center mx-16 csm:mx-6  relative">
          <div>
            <Link href="/">
              <h3 className="text-gray-700 text-4xl font-bold cmd:text-2xl csm:text-xl dark:text-gray-300">
                RIZ<span className="text-teal-500">KI</span>
              </h3>
            </Link>
          </div>
          <nav
            className={`text-gray-400 font-medium text-xl  csm:absolute csm:w-full csm:h-screen csm:top-[-15px] csm:right-[-24px] csm:bg-slate-600 ${open ? 'csm:translate-x-0' : 'csm:translate-x-full'}  ${
              open ? 'csm:visible' : 'csm:invisible'
            }  csm:opacity-95 transition-all duration-75`}
          >
            <ul className="flex gap-10 csm:flex csm:h-3/4 csm:w-full csm:flex-col csm:justify-center">
              <li className="cursor-pointer  csm:text-center hover:text-teal-500 csm:text-gray-300">
                <Link href="/" className={router.pathname === '/' ? 'text-teal-500' : ''} onClick={closeHandler}>
                  HOME
                </Link>
              </li>
              <li className="cursor-pointer hover:text-teal-500 csm:text-center csm:text-gray-300">
                <Link href="/about" className={router.pathname === '/about' ? 'text-teal-500' : ''} onClick={closeHandler}>
                  ABOUT
                </Link>
              </li>
              <li className="cursor-pointer hover:text-teal-500 csm:text-center csm:text-gray-300">
                <Link href="/portfolio" className={router.pathname === '/portfolio' ? 'text-teal-500' : ''} onClick={closeHandler}>
                  PORTFOLIO
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <div className="z-[1000]">{!open ? menuBurger : closeMenu}</div>
            <div className="cursor-pointer" onClick={darkModeHandler}>
              {!darkMode ? <LightIcon /> : <MoonIcon />}
            </div>
          </div>
        </div>
      </header>
      <main>{props.children}</main>

      <footer className="p-16  text-center bg-teal-900 clg:p-8 cmd:p-4">
        <h6 className="text-white csm:text-sm">
          Build with <span className="text-yellow-600  font-bold">LOVE</span> in beautiful Pemalang, Indonesia
        </h6>
        <h6 className="text-gray-400 csm:text-xs">© {year} Copyright by Rizki Darmawan</h6>
      </footer>
    </Fragment>
  );
}

export default Layout;
