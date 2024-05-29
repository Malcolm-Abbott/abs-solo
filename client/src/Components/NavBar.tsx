import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export function NavBar() {
  return (
    <div className="container py-4 px-6">
      <nav>
        <ul>
          <li>
            <div className="flex justify-between">
              <div className="w-2/3">
                <div className="w-full">
                  <img src="absi-logo-full.png" />
                </div>
              </div>
              <div className="grid place-items-center">
                <FaBars className="text-3xl" />
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
