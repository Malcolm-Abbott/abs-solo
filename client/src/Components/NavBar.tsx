import { Outlet, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export function NavBar() {
  return (
    <>
      <div className="container py-4 px-6">
        <header>
          <div className="flex justify-between">
            <div className="w-2/3 xl:w-1/3">
              <div className="w-full">
                <img src="absi-logo-full.png" />
              </div>
            </div>
            <div className="grid place-items-center xl:hidden">
              <FaBars className="text-3xl cursor-pointer" />
            </div>
            <div className="hidden xl:flex w-2/3">
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
              <div className="grid place-items-center basis-1/3 ring-2 ring-red-700">
                <Link
                  to="/"
                  className="h-3/4 flex items-end text-lg font-bold pb-1">
                  Customer Portal
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </>
  );
}
