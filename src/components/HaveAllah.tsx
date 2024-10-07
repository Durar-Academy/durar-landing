import Image from "next/image";

import { CallToActionButton } from "@/components/CallToActionButton";

export function HaveAllah() {
  return (
    <section className="bg-container">
      <div className="text-center py-20 relative w-2/5 mx-auto">
        <h3 className="text-darkgreen font-semibold text-[32px] leading-[48px] mb-10">Having knowledge of Allah takes care of your DEEN</h3>

        <CallToActionButton />

        <Image width={53} height={53} alt={"Decorator Icon"} src={"/phone.svg"} className="absolute -left-60 top-2/3" />
        <Image width={49} height={49} alt={"Decorator Icon"} src={"/pencil.svg"} className="absolute -right-20 top-1/2" />
      </div>
    </section>
  );
}
