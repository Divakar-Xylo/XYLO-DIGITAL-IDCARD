"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
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
  FaWeixin,
  FaTelegram,
  FaVimeo,
  FaFlickr,
  FaXing,
  FaViadeo,
  FaSnapchat,
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
  weixin: FaWeixin,
  telegram: FaTelegram,
  vimeo: FaVimeo,
  flickr: FaFlickr,
  xing: FaXing,
  viadeo: FaViadeo,
  snapchat: FaSnapchat,
};

const Smcard = ({ user, externalLinks }: CardProps) => {
  useEffect(() => {
    console.log("External Links:", externalLinks);
  }, [externalLinks]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 sm-card">
      <CardContainer className="inter-var">
        <CardBody className="bg-[url('../assets/sm-og.png')] bg-cover w-[90vw] h-auto shadow-2xl rounded-3xl flex flex-col justify-center items-center p-4 bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
          <CardItem
            translateZ={10}
            className="w-full flex justify-center items-center mb-4"
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
          <div className="w-full flex flex-col justify-center items-center text-center">
            <CardItem
              translateZ={30}
              className="text-xl font-bold text-gray-800"
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
              className="text-md font-light text-gray-500"
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

            <CardItem
              translateZ={30}
              className="mt-2 text-sm text-justify p-5 text-gray-600"
            >
              <h1 className="text-xs text-blue-500 text-center">Contact</h1>

              <div className="flex gap-3 mt-2 justify-center items-center">
                <div className="">
                  <a
                    href={`tel:${user.phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <Image
                      src="/phonelogo.png"
                      alt="Phone Logo"
                      width={25}
                      height={25}
                      className="mr-1 size-7 transform transition-transform duration-200 hover:scale-105 justify-center items-center"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    href={`mailto:${user.emailId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email flex justify-center items-center"
                  >
                    <Image
                      src="/maillogo.png"
                      alt="Email Logo"
                      width={25}
                      height={25}
                      className="mr-1 size-7 transform transition-transform duration-200 hover:scale-105 justify-center items-center"
                    />
                  </a>
                </div>
              </div>
              <h1 className="text-xs text-blue-500 pt-1 text-center">
                Digital Footprint
              </h1>

              {externalLinks && externalLinks.length > 0 && (
                <div className="flex mt-3 space-x-3 flex-wrap justify-center items-baseline">
                  {externalLinks.map((externalLink) => {
                    const IconComponent =
                      iconMapping[externalLink.name as keyof typeof iconMapping] ||
                      FaGlobe;
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
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Smcard;
