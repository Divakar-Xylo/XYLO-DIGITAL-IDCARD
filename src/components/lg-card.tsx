import React, { useEffect } from "react"; // Added useEffect
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import {
  FaLinkedin,
  FaMedium,
  FaBehance,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaFacebook,
  FaReddit,
  FaTiktok,
  FaGlobe,
  FaQuora,
  FaDiscord,
  FaYelp,
  FaTripadvisor,
  FaDoorOpen,
  FaWhatsapp,
  FaWeixin,
  FaTelegram,
  FaVimeo,
  FaFlickr,
  FaXing,
  FaViadeo,
  FaSnapchat,
  FaMobile,
  FaEnvelopeOpen,
  FaDownload,
} from "react-icons/fa";
import { CardProps } from "@/types/cardProps";
import { IconType } from "react-icons";

const iconMapping: Record<string, IconType> = {
  linkedin: FaLinkedin,
  medium: FaMedium,
  behance: FaBehance,
  github: FaGithub,
  phone: FaPhone,
  email: FaEnvelope,
  instagram: FaInstagram,
  dribbble: FaDribbble,
  twitter: FaTwitter,
  youtube: FaYoutube,
  pinterest: FaPinterest,
  facebook: FaFacebook,
  reddit: FaReddit,
  tiktok: FaTiktok,
  globe: FaGlobe,
  quora: FaQuora,
  discord: FaDiscord,
  yelp: FaYelp,
  tripadvisor: FaTripadvisor,
  dooropen: FaDoorOpen,
  whatsapp: FaWhatsapp,
  weixin: FaWeixin,
  telegram: FaTelegram,
  vimeo: FaVimeo,
  flickr: FaFlickr,
  xing: FaXing,
  viadeo: FaViadeo,
  snapchat: FaSnapchat,
  mobile: FaMobile,
  envelopeopen: FaEnvelopeOpen,
};

const Lgcard = ({ user, externalLinks }: CardProps) => {
  useEffect(() => {
    const saveBtn = document.getElementById("save-btn") as HTMLAnchorElement;

    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        const contact = {
          name: user.name,
          phone: user.phoneNumber,
          email: user.emailId,
        };
        const vcard =
          "BEGIN:VCARD\nVERSION:4.0\nFN:" +
          contact.name +
          "\nTEL;TYPE=work,voice:" +
          contact.phone +
          "\nEMAIL:" +
          contact.email +
          "\nEND:VCARD";
        const blob = new Blob([vcard], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        saveBtn.href = url;
        saveBtn.download = contact.name + ".vcf";
      });
    } else {
      console.warn("Save button not found."); // Log a warning if saveBtn is null
    }
  }, [user]); // useEffect with user dependency

  return (
    <div className="flex justify-center items-center min-h-screen bg-white lg-card">
      <CardContainer className="inter-var glossy-container">
        <CardBody className="lg-card bg-[url('../assets/lg-card.png')] bg-cover w-[50vw] shadow-2xl rounded-3xl flex justify-center items-center p-20 bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
          <CardItem
            translateZ={20}
            className="w-[30%] flex justify-center items-center"
          >
            <Image
              src={
                user.photo
                  ? user.photo
                  : user.gender == "male"
                  ? "/placeholdermale.png"
                  : "/placeholderfemale.png"
              }
              alt="User"
              width={150}
              height={150}
              className="border-white border-4 rounded-full shadow-lg shadow-black/50"
            />
          </CardItem>
          <div className="w-[70%] flex flex-col justify-center pl-10 pb-2 relative">
            <CardItem
              translateZ={30}
              className="text-2xl font-bold text-gray-800"
            >
              {user.name}

              <hr
                style={{
                  border: "1px solid #1F419B",
                  borderRadius: "5px",
                  width: "100%",
                  margin: "2px auto",
                }}
              />
            </CardItem>

            <CardItem
              translateZ={30}
              className="text-lg font-light text-gray-500 pt-1"
            >
              {user.companyName}
            </CardItem>

            <CardItem translateZ={30} className="text-base pt-2">
              {user.employeeId}
            </CardItem>
            <CardItem
              translateZ={30}
              className="text-base font-xl text-gray-800"
            >
              {user.designation}
            </CardItem>
            <CardItem
              translateZ={30}
              className="text-base font-xl text-gray-800"
            >
              {user.employeeDepartment}
            </CardItem>
            <CardItem translateZ={30} className="mt-2 text-sm text-gray-600">
              <h1 className="text-xs text-blue-500 pt-2">Contact</h1>
              <CardItem translateZ={30} className="">
                <div className="flex gap-3 mt-2">
                  <a
                    href={`tel:${user.phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medium flex items-center"
                  >
                    <Image
                      src="/phonelogo.png"
                      alt="Phone Logo"
                      width={30}
                      height={30}
                      className="mr-1 size-7 transform transition-transform duration-200 hover:scale-110"
                    />
                  </a>
                  <a
                    href={`mailto:${user.emailId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email flex items-center"
                  >
                    <Image
                      src="/maillogo.png"
                      alt="Email Logo"
                      width={30}
                      height={30}
                      className="mr-1 size-7 transform transition-transform duration-200 hover:scale-110"
                    />
                  </a>
                </div>
              </CardItem>
              <h1 className="text-xs text-blue-500 pt-2">Digital Footprint</h1>

              {externalLinks && externalLinks.length > 0 && (
                <div className="flex mt-3 space-x-3 flex-wrap">
                  {externalLinks.map((externalLink) => {
                    console.log(externalLink); // Check each externalLink object
                    const IconComponent =
                      iconMapping[
                        externalLink.name as keyof typeof iconMapping
                      ] || FaGlobe;
                    return (
                      <a
                        key={externalLink.id}
                        href={externalLink.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center transform transition-transform duration-200 hover:scale-110 ${externalLink.name}`}
                      >
                        <IconComponent
                          className="mr-1"
                          style={{ fontSize: "24px" }}
                        />
                      </a>
                    );
                  })}
                </div>
              )}
            </CardItem>
            <CardItem
              translateZ={30}
              className="absolute bottom-1 right-5 text-blue-900"
            >
              <a
                id="save-btn"
                href="#"
                className="text-blue-500 text-sm hover:text-blue-700 flex items-center" 
              >
                <FaDownload className="mr-1" />
                Save contact
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Lgcard;
