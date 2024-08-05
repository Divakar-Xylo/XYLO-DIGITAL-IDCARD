"use client";
import React from 'react';
import Image from 'next/image';
import user, { UserProps } from '../user';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { FaLinkedin, FaBehance, FaMedium, FaGithub, FaPhone, FaEnvelope, FaDribbble, FaFacebook, FaGlobe, FaInstagram, FaPinterest, FaReddit, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const Smcard = ({ user }: { user: UserProps }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 sm-card">
      <CardContainer className="inter-var">
        <CardBody className="bg-[url('../assets/sm-og.png')] bg-cover w-[90%] h-auto shadow-2xl rounded-3xl flex flex-col justify-center items-center p-4 bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
          <CardItem translateZ={10} className="w-full flex justify-center items-center mb-4">
          <Image
              src={user.photo ? user.photo : (user.gender == "male" ?  "/placeholdermale.png" :  "/placeholderfemale.png" )}
              alt="User"
              width={150}
              height={150}
              className="border-white border-4 rounded-full shadow-lg shadow-black/50"
            />
          </CardItem>
          <div className="w-full flex flex-col justify-center items-center text-center">
            <CardItem translateZ={30} className="text-xl font-bold text-gray-800">
              {user.name}
            </CardItem>
            <CardItem translateZ={30} className="text-lg font-medium text-gray-600">
              {user.designation}
            </CardItem>
            <CardItem translateZ={40} className="text-md font-light text-gray-500">
              {user.companyName}
            </CardItem>
            <CardItem translateZ={30} className="mt-2 text-sm text-justify p-5 text-gray-600">
              <p>{user.description}</p>
              <div className="flex mt-4 space-x-3 flex-wrap justify-center items-center">
                {user.externalLinks?.linkedin && (
                  <a href={user.externalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin flex items-center">
                    <FaLinkedin className="mr-1" /> LinkedIn
                  </a>
                )}
                {user.externalLinks?.behance && (
                  <a href={user.externalLinks.behance} target="_blank" rel="noopener noreferrer" className="behance flex items-center">
                    <FaBehance className="mr-1" /> Behance
                  </a>
                )}
                {user.externalLinks?.medium && (
                  <a href={user.externalLinks.medium} target="_blank" rel="noopener noreferrer" className="medium flex items-center">
                    <FaMedium className="mr-1" /> Medium
                  </a>
                )}
                {user.externalLinks?.github && (
                  <a href={user.externalLinks.github} target="_blank" rel="noopener noreferrer" className="github flex items-center">
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                )}
                {user.externalLinks?.facebook && (
                  <a href={user.externalLinks.facebook} target="_blank" rel="noopener noreferrer" className="facebook flex items-center">
                    <FaFacebook className="mr-1" /> Facebook
                  </a>
                )}
                {user.externalLinks?.instagram && (
                  <a href={user.externalLinks.instagram} target="_blank" rel="noopener noreferrer" className="instagram flex items-center">
                    <FaInstagram className="mr-1" /> Instagram
                  </a>
                )}
                {user.externalLinks?.dribbble && (
                  <a href={user.externalLinks.dribbble} target="_blank" rel="noopener noreferrer" className="dribbble flex items-center">
                    <FaDribbble className="mr-1" /> Dribbble
                  </a>
                )}
                {user.externalLinks?.twitter && (
                  <a href={user.externalLinks.twitter} target="_blank" rel="noopener noreferrer" className="twitter flex items-center">
                    <FaTwitter className="mr-1" /> Twitter
                  </a>
                )}
                {user.externalLinks?.youtube && (
                  <a href={user.externalLinks.youtube} target="_blank" rel="noopener noreferrer" className="youtube flex items-center">
                    <FaYoutube className="mr-1" /> YouTube
                  </a>
                )}
                {user.externalLinks?.pinterest && (
                  <a href={user.externalLinks.pinterest} target="_blank" rel="noopener noreferrer" className="pinterest flex items-center">
                    <FaPinterest className="mr-1" /> Pinterest
                  </a>
                )}
                {user.externalLinks?.reddit && (
                  <a href={user.externalLinks.reddit} target="_blank" rel="noopener noreferrer" className="reddit flex items-center">
                    <FaReddit className="mr-1" /> Reddit
                  </a>
                )}
                {user.externalLinks?.tiktok && (
                  <a href={user.externalLinks.tiktok} target="_blank" rel="noopener noreferrer" className="tiktok flex items-center">
                    <FaTiktok className="mr-1" /> TikTok
                  </a>
                )}
                {user.externalLinks?.website && (
                  <a href={user.externalLinks.website} target="_blank" rel="noopener noreferrer" className="website flex items-center">
                    <FaGlobe className="mr-1" /> Website
                  </a>
                )}
              </div>
              <div className="flex gap-5 mt-3 justify-center items-center">
                <a href={`tel:${user.phoneNumber}`} target="_blank" rel="noopener noreferrer" className="medium flex items-center">
                  <FaPhone className="mr-1" /> Phone
                </a>
                <a href={user.emailId} target="_blank" rel="noopener noreferrer" className="github flex items-center">
                  <FaEnvelope className="mr-1" /> Email
                </a>
              </div>
            </CardItem>
            <CardItem translateZ={20} className="flex justify-end text-sm text-blue-600 pt-2 mt-5">
              <p>{user.CreatorName}</p>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Smcard;
