import { CallSVG, LocationSVG, MailSVG } from "@/components/Icons/Icons";
import InfoBlock from "./InfoBlock";


export default function ContactInfo() {

    
  //TODO : change number location email everything
return (
  <div className="flex-1 px-4 space-y-4 sm:space-y-10 flex flex-col justify-center ">
     <InfoBlock icon={<CallSVG fill="#FF5722"  className="w-10 sm:w-20"/>} textInfo="00000 add num here" />
     <InfoBlock icon={<MailSVG  fill="#FF5722" className="p-1 sm:p-3 w-10 sm:w-20"/>} textInfo="motorevive.bg@gmail.com" />
     <InfoBlock icon={<LocationSVG  fill="#FF5722" className="p-1 sm:p-3 w-10 sm:w-20 "/>} textInfo="Александър add str here" />
  </div>
  )
}
