import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black">
      <CardContainer className="inter-var w-full min-w-[50vw] min-h-[50vh] px-4">
        <CardBody className="bg-gradient-to-r from-white to-black rounded-2xl index-card bg-cover shadow-2xl w-full flex justify-center items-center">
          <CardItem translateZ={30} className=" text-sm text-blue-600 text-center">
            <Image src="/logo.png" alt="Logo" width={500} height={30} />
          </CardItem>
          <p className="text-center font-bold text-blue-600 absolute bottom-4">PRODUCT OF XYLOINC</p>
        </CardBody>
       

      </CardContainer>
    </div>
  );
}
