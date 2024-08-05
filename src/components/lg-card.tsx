"use client";
import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { FaLinkedin, FaMedium, FaBehance, FaGithub, FaPhone, FaEnvelope, FaInstagram, FaDribbble, FaTwitter, FaYoutube, FaPinterest, FaFacebook, FaReddit, FaTiktok, FaGlobe } from 'react-icons/fa';
import { UserProps } from '@/user';

const Lgcard = ({ user }: { user: UserProps }) => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-white lg-card">
      <CardContainer className="inter-var">
        <CardBody className="lg-card bg-[url('../assets/lg-card.png')] bg-cover w-[50vw] h-[45vh] shadow-2xl rounded-3xl flex justify-center items-center p-9 bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
          <CardItem translateZ={10} className="w-[30%] flex justify-center items-center">
            <Image
              src={user.photo ? user.photo : (user.gender == "male" ?  "/placeholdermale.png" :  "/placeholderfemale.png" )}
              alt="User"
              width={150}
              height={150}
              className="border-white border-4 rounded-full shadow-lg shadow-black/50"
            />
          </CardItem>
          <div className="w-[70%] flex flex-col justify-center pl-4">
            <CardItem translateZ={30} className="text-2xl font-bold text-gray-800">
              {user.name}
            </CardItem>
            <CardItem translateZ={30} className="text-xl font-medium text-gray-600">
              {user.designation}
            </CardItem>
            <CardItem translateZ={30} className="text-lg font-light text-gray-500">
              {user.companyName}
            </CardItem>
            <CardItem translateZ={30} className="mt-2 text-sm text-gray-600">
              <p>{user.description}</p>
              <div className="flex mt-4 space-x-3 flex-wrap">
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
              <div className="flex gap-5 mt-3">
                <a href={`tel:${user.phoneNumber}`} target="_blank" rel="noopener noreferrer" className="medium flex items-center">
                  <FaPhone className="mr-1" /> Phone
                </a>
                <a href={`mailto:${user.emailId}`} target="_blank" rel="noopener noreferrer" className="github flex items-center">
                  <FaEnvelope className="mr-1" /> Email
                </a>
              </div>

            </CardItem>
          </div>
        </CardBody>
        <CardItem translateZ={30} className="absolute bottom-5 right-5 text-sm text-blue-600">
          <p>{user.CreatorName}</p>
        </CardItem>
      </CardContainer>
    </div>
  );
};

export default Lgcard;