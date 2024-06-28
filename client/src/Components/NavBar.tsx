import { Outlet, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

type Props = {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

export function NavBar({ isOpen, setIsOpen }: Props) {
  return (
    <div>
      <div className="container py-4">
        <header className="px-6 relative">
          <div className="flex justify-between">
            <div className="basis-2/3 lg:basis-1/3">
              <div className="w-full md:w-4/5 lg:4/5">
                <img src="abs-logo-full.jpg" className="h-16 xl:h-24" />
              </div>
            </div>
            <div className="grid place-items-center lg:hidden">
              <FaBars
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <div className="hidden lg:flex basis-2/3">
              <div className="absolute right-0 top-0 font-bold hidden xl:flex">
                <span className="pr-6">(703) 661-4280</span>
                <span>support@absi1.com</span>
              </div>
              <div className="grid place-items-center basis-1/3">
                <Link
                  to="/"
                  className="h-3/4 flex items-end text-lg font-bold pb-1">
                  Services
                </Link>
              </div>
              <div className="grid place-items-center basis-1/3">
                <Link
                  to="/"
                  className="h-3/4 flex items-end text-lg font-bold pb-1">
                  Customer Portal
                </Link>
              </div>
              <div className="flex items-center justify-end basis-1/3">
                <div className="h-4/5 flex items-end">
                  <Link
                    to="/"
                    className="xl:text-lg font-bold bg-blue-950 py-2 px-6 rounded-md shadow-lg text-white">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Outlet />
    </div>
  );
}
