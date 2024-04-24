

type MapLocationProps = {
    
  }
export default function MapLocation({}: MapLocationProps) {

//TODO : requested to remove location for now
return (
    <div className="w-[calc(100%-2rem)] mx-auto aspect-video rounded-lg overflow-hidden my-10 outline outline-1 outline-gray-300 hover:outline-pallette-orange transition-colors duration-1000 ease-out" >

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5831.712969644982!2d25.621431000000005!3d43.044451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a926efecab1a21%3A0x55abb09144d22191!2z0YPQuy4g0JDQu9C10LrRgdCw0L3QtNGK0YAg0KHRgtCw0LzQsdC-0LvQuNC50YHQutC4IDQsIDUwMzAgRGViZWxldHMsIEJ1bGdhcmlh!5e0!3m2!1sen!2sau!4v1699397772975!5m2!1sen!2sau" className="w-full  h-full" loading="lazy" ></iframe>
    </div>
  )
}