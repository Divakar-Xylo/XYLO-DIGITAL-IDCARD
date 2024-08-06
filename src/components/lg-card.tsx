"use client";
import React from "react";
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
} from "react-icons/fa";
import { UserProps } from "@/user";

const Lgcard = ({ user }: { user: UserProps }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white lg-card">
      <CardContainer className="inter-var">
        <CardBody className="lg-card bg-[url('../assets/lg-card.png')] bg-cover w-[50vw] h-[45vh] shadow-2xl rounded-3xl flex justify-center items-center p-9 bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
          <CardItem
            translateZ={10}
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
          <div className="w-[70%] flex flex-col justify-center pl-4 pb-2">
            <CardItem
              translateZ={30}
              className="text-2xl font-bold text-gray-800"
            >
              {user.name}
              
              <hr style={{ border: '1px solid #1F419B', borderRadius: '5px', width: '100%', margin: '2px auto' }} />

            </CardItem>
            
            <CardItem
              translateZ={30}
              className="text-lg font-light text-gray-500 pt-1"
            >
              {user.companyName}
            </CardItem>
            
            <CardItem
              translateZ={30}
              className="text-base  pt-2"
            >
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
            <CardItem translateZ={30} className="mt-2 text-sm text-gray-600">
              {/* <p>{user.description}</p> */}
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
                      width={25}
                      height={25}
                      className="mr-1 size-6 transform transition-transform duration-200 hover:scale-105"
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
                      width={25}
                      height={25}
                      className="mr-1 size-6 transform transition-transform duration-200 hover:scale-105"
                    />
                  </a>
                </div>
              </CardItem>
              <h1 className="text-xs text-blue-500 pt-2">Digital Footprint</h1>
              <div className="flex mt-3 space-x-3 flex-wrap">
                {user.externalLinks?.mobile && (
                  <a
                    href={`tel:${user.externalLinks.mobile}`}
                    className="mobile flex items-center"
                  >
                    <FaPhone className="mr-1 size-5" />
                  </a>
                )}
                {user.externalLinks?.email && (
                  <a
                    href={`mailto:${user.externalLinks.email}`}
                    className="email flex items-center transform transition-transform duration-200 hover:scale-105"
                  >
                    <FaEnvelope className="mr-1 size-5" />
                  </a>
                )}
                {user.externalLinks?.facebook && (
                  <a
                    href={user.externalLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook flex items-center"
                  >
                    <FaFacebook className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.twitter && (
                  <a
                    href={user.externalLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter flex items-center"
                  >
                    <FaTwitter className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.instagram && (
                  <a
                    href={user.externalLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram flex items-center"
                  >
                    <FaInstagram className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.linkedin && (
                  <a
                    href={user.externalLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin flex items-center transform transition-transform duration-200 hover:scale-105"
                  >
                    <FaLinkedin className="mr-1 size-5" />
                  </a>
                )}
                {user.externalLinks?.snapchat && (
                  <a
                    href={user.externalLinks.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="snapchat flex items-center"
                  >
                    <FaSnapchat className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.pinterest && (
                  <a
                    href={user.externalLinks.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pinterest flex items-center"
                  >
                    <FaPinterest className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.reddit && (
                  <a
                    href={user.externalLinks.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reddit flex items-center"
                  >
                    <FaReddit className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.tiktok && (
                  <a
                    href={user.externalLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tiktok flex items-center"
                  >
                    <FaTiktok className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.youtube && (
                  <a
                    href={user.externalLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube flex items-center"
                  >
                    <FaYoutube className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.whatsapp && (
                  <a
                    href={`https://wa.me/${user.externalLinks.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp flex items-center"
                  >
                    <FaWhatsapp className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.whatsappBusiness && (
                  <a
                    href={`https://wa.me/${user.externalLinks.whatsappBusiness}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsappBusiness flex items-center"
                  >
                    <FaWhatsapp className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}

                {user.externalLinks?.wechat && (
                  <a
                    href={user.externalLinks.wechat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wechat flex items-center"
                  >
                    <FaWeixin className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.telegram && (
                  <a
                    href={user.externalLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="telegram flex items-center"
                  >
                    <FaTelegram className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.vimeo && (
                  <a
                    href={user.externalLinks.vimeo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vimeo flex items-center"
                  >
                    <FaVimeo className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}

                {user.externalLinks?.flickr && (
                  <a
                    href={user.externalLinks.flickr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flickr flex items-center"
                  >
                    <FaFlickr className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.xing && (
                  <a
                    href={user.externalLinks.xing}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="xing flex items-center"
                  >
                    <FaXing className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.viadeo && (
                  <a
                    href={user.externalLinks.viadeo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="viadeo flex items-center"
                  >
                    <FaViadeo className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.quora && (
                  <a
                    href={user.externalLinks.quora}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quora flex items-center"
                  >
                    <FaQuora className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.discord && (
                  <a
                    href={user.externalLinks.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="discord flex items-center"
                  >
                    <FaDiscord className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.git && (
                  <a
                    href={user.externalLinks.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="git flex items-center"
                  >
                    <FaGithub className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.yelp && (
                  <a
                    href={user.externalLinks.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yelp flex items-center"
                  >
                    <FaYelp className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.tripAdvisor && (
                  <a
                    href={user.externalLinks.tripAdvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tripAdvisor flex items-center"
                  >
                    <FaTripadvisor className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.glassdoor && (
                  <a
                    href={user.externalLinks.glassdoor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glassdoor flex items-center"
                  >
                    <FaDoorOpen className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.behance && (
                  <a
                    href={user.externalLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="behance flex items-center"
                  >
                    <FaBehance className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.medium && (
                  <a
                    href={user.externalLinks.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medium flex items-center"
                  >
                    <FaMedium className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.dribbble && (
                  <a
                    href={user.externalLinks.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dribbble flex items-center"
                  >
                    <FaDribbble className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.github && (
                  <a
                    href={user.externalLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github flex items-center"
                  >
                    <FaGithub className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
                {user.externalLinks?.website && (
                  <a
                    href={user.externalLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website flex items-center"
                  >
                    <FaGlobe className="mr-1 size-5 transform transition-transform duration-200 hover:scale-105" />
                  </a>
                )}
              </div>
            </CardItem>
          </div>
        </CardBody>
        <CardItem
          translateZ={30}
          className="absolute bottom-5 right-5 text-sm text-blue-600"
        >
          <p>{user.CreatorName}</p>
        </CardItem>
      </CardContainer>
    </div>
  );
};

export default Lgcard;
