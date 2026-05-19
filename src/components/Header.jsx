import React from 'react';
import avatarImg from '../assets/avatar.png'; // Nhớ thêm ảnh vàoassets/avatar.jpg
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="grid md:grid-cols-3 items-center gap-8 bg-zinc-800 p-8 shadow-xl rounded-b-3xl">
      <div className="md:col-span-1 flex justify-center">
        <img 
          src={avatarImg} 
          alt="Lê Đức Kiên" 
          className="w-60 h-60 object-cover rounded-full border-8 border-teal-500 shadow-lg"
        />
      </div>
      <div className="md:col-span-2 space-y-4 md:text-left">
        <h1 className="text-5xl font-extrabold text-teal-400 text-center sm:text-left">Lê Đức Kiên</h1>
        <p className="text-3xl font-semibold text-zinc-300 text-center sm:text-left">Intern Front End Developer</p>
        <div className="grid text-xl grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 text-zinc-400 min-w-0">
          <p><span className="font-semibold text-zinc-200">Ngày sinh:</span> 10/01/2004</p>
          <p><span className="font-semibold text-zinc-200">Giới tính:</span> Nam</p>
          
          <a href='tel:0358974178' className="flex items-center gap-2 truncate">
            <span className="font-semibold text-zinc-200 flex gap-2 justify-center items-center">
              <FaPhoneAlt className="shrink-0" />Điện thoại:
            </span>
            <span className='truncate'>0358974178</span>
          </a>
          
          <a href='mailto:kienduc10012004@gmail.com' className="flex items-center gap-2 break-words overflow-hidden">
            <span className="font-semibold text-zinc-200 flex gap-2 justify-center items-center">
              <FaEnvelope className="shrink-0" />Email:
            </span>
            <span className="truncate"> kienduc10012004@gmail.com</span>
          </a>
          
          <p className="flex items-center gap-2">
            <span className="font-semibold text-zinc-200 flex gap-2 justify-center items-center">
              <FaMapMarkerAlt className="shrink-0" />
              <span className='truncate'>Địa chỉ:</span>
            </span>
            <span className='truncate'>
              Bình Tân, TP.HCM
            </span>
          </p>
          
          <a href="https://github.com/kienduc10012004" className="flex hover:text-white duration-150 items-center gap-2 break-all">
            <span className="font-semibold text-zinc-200 flex gap-2 justify-center items-center">
              <FaGithub className="shrink-0" /> 
              <p className='truncate'>Github:</p>
            </span>
            <span className="truncate">https://github.com/kienduc10012004</span>
          </a> 
        </div>
      </div>
    </header>
  );
};

export default Header;