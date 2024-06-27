import { Booking } from '../Components/Booking';
import { About } from '../Components/About';
import { Banner } from '../Components/Banner';
import { HeroImage } from '../Components/HeroImage';

export function NewHome() {
  return (
    <div>
      <div className="mt-2 grid gap-4">
        <div className="flex flex-wrap w-full">
          <HeroImage />
          <Banner />
        </div>
        <div className="xl:hidden">
          <div className="grid place-items-center gap-6">
            <Booking />
          </div>
          <div className="grid gap-6 mt-6">
            <About />
          </div>
        </div>
        <div className="hidden xl:flex">
          <div className="grid gap-6 mt-6 basis-1/2">
            <About />
          </div>
          <div className="flex basis-1/2">
            <div className="m-auto">
              <Booking />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
