"use client";
import React from "react";
import Image from "next/image";
import user, { UserProps } from "../user";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import {
  FaLinkedin,
  FaBehance,
  FaMedium,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaDribbble,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaPinterest,
  FaReddit,
  FaTiktok,
  FaTwitter,
  FaYoutube,
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

const Smcard = ({ user }: { user: UserProps }) => {
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
            </CardItem>
            <CardItem
              translateZ={40}
              className="text-md font-light text-gray-500"
            >
              {user.companyName}
            </CardItem>
            <CardItem translateZ={30} className="text-base  pt-2">
              {user.employeeid}
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
            
                <div className="flex  gap-3 mt-2 justify-center items-center ">
                  <div className="">
                    <a
                      href={`tel:${user.phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex  justify-center items-center"
                    >
                      <Image
                        src="/phonelogo.png"
                        alt="Phone Logo"
                        width={25}
                        height={25}
                        className="mr-1 size-6 transform transition-transform duration-200 hover:scale-105 justify-center items-center"
                      />
                    </a>
                  </div>
                  <div className="">
                    <a
                      href={`mailto:${user.emailId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="email flex  justify-center items-center"
                    >
                      <Image
                        src="/maillogo.png"
                        alt="Email Logo"
                        width={25}
                        height={25}
                        className="mr-1 size-6 transform transition-transform duration-200 hover:scale-105 justify-center items-center"
                      />
                    </a>
                  </div>
                </div>
              <h1 className="text-xs text-blue-500 pt-1 text-center">
                Digital Footprint
              </h1>
              <div className="flex mt-3 space-x-3 flex-wrap justify-center items-baseline">
                {user.externalLinks?.linkedin && (
                  <a
                    href={user.externalLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaLinkedin className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.behance && (
                  <a
                    href={user.externalLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="behance flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaBehance className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.medium && (
                  <a
                    href={user.externalLinks.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medium flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaMedium className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.github && (
                  <a
                    href={user.externalLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaGithub className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.facebook && (
                  <a
                    href={user.externalLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaFacebook className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.instagram && (
                  <a
                    href={user.externalLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaInstagram className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.dribbble && (
                  <a
                    href={user.externalLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dribbble flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaDribbble className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.X && (
                  <a
                    href={user.externalLinks.X}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaTwitter className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.youtube && (
                  <a
                    href={user.externalLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaYoutube className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.pinterest && (
                  <a
                    href={user.externalLinks.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pinterest flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaPinterest className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.reddit && (
                  <a
                    href={user.externalLinks.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reddit flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaReddit className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.tiktok && (
                  <a
                    href={user.externalLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tiktok flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaTiktok className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.website && (
                  <a
                    href={user.externalLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaGlobe className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.quora && (
                  <a
                    href={user.externalLinks.quora}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quora flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaQuora className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.discord && (
                  <a
                    href={user.externalLinks.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="discord flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaDiscord className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.yelp && (
                  <a
                    href={user.externalLinks.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yelp flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaYelp className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.tripAdvisor && (
                  <a
                    href={user.externalLinks.tripAdvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tripAdvisor flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaTripadvisor className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.glassdoor && (
                  <a
                    href={user.externalLinks.glassdoor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glassdoor flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaDoorOpen className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.wechat && (
                  <a
                    href={user.externalLinks.wechat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wechat flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaWeixin className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.telegram && (
                  <a
                    href={user.externalLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="telegram flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaTelegram className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.vimeo && (
                  <a
                    href={user.externalLinks.vimeo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vimeo flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaVimeo className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.flickr && (
                  <a
                    href={user.externalLinks.flickr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flickr flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaFlickr className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.xing && (
                  <a
                    href={user.externalLinks.xing}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="xing flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaXing className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.viadeo && (
                  <a
                    href={user.externalLinks.viadeo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="viadeo flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaViadeo className="mr-1 size-6" />
                  </a>
                )}
                {user.externalLinks?.snapchat && (
                  <a
                    href={user.externalLinks.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="snapchat flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    <FaSnapchat className="mr-1 size-6" />
                  </a>
                )}
              </div>
            </CardItem>
            <CardItem
              translateZ={20}
              className="flex justify-end text-sm text-blue-600 pt-2 mt-5"
            >
              <p>{user.CreatorName}</p>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Smcard;
