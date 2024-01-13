import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { ProgressDemo } from "@/components/ProgressDemo";
import { Input } from "@/components/ui/input";
import CalendarDemo from "@/components//CalendarDemo";
import { Container } from "lucide-react";
import { CarouselDemo } from "@/components/CarouselDemo";
import { DropDownDemo } from "@/components/DropDownDemo";
import { CardDemos } from "@/components/CardDemos";
import { AccordionDemo } from "@/components/AccordionDemo";
import { SelectFormDemo } from "@/components/SelectFormDemo";
export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row flex-wrap ">
      <div className="flex flex-wrap  md:min-w-1/2 sm:min-w-screen flex-col  min-w-sm p-4 ">
        <div className="mt-4  border border-gray-400 rounded-xl p-4  bg-slate-900  ">
          <p className="text-2xl mb-2">
            <h1>Dropdown Menu</h1>
          </p>{" "}
          <DropDownDemo />
        </div>
        <div className="mt-4 border border-gray-400 rounded-xl  bg-slate-900 p-4">
          <p className="text-2xl">
            <h1>Accordion</h1>
          </p>
          <AccordionDemo />
        </div>
        <div>
          <Input
            className="mt-2 mb-2 border border-gray-400"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <p>Progress</p>
          <ProgressDemo />
        </div>
      </div>
      {/* aqui comeca segunda coluna */}
      <div className=" max-w-full md:min-w-1/2  min-w-sm ">
        <div className="mt-4 ml-16 mr-16 items-center mb-2">
          <CarouselDemo />
        </div>
      </div>
      {/* aqui comeca terceira coluna */}
      <div className=" max-w-full  md-min-1/2 lg:min-w-1/3 min-w-sm ">
        <div className="mt-4 ml-16 mr-16 items-center mb-2">
          <CardDemos />
        </div>
        <div className="mt-4 ml-16 mr-16 items-center mb-2">
          <CalendarDemo />
        </div>
        <div className="mt-4 ml-16 mr-16 items-center mb-2">
          <SelectFormDemo />
        </div>
      </div>
    </main>
  );
}
