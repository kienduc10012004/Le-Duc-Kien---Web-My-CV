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
      <div className="md:col-span-2 space-y-4 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-teal-400">Lê Đức Kiên</h1>
        <p className="text-3xl font-semibold text-zinc-300">Intern Front End Developer</p>
        <div className="grid text-xl grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 text-sm text-zinc-400">
          <p><span className="font-semibold text-zinc-200">Ngày sinh:</span> 10/01/2004</p>
          <p><span className="font-semibold text-zinc-200">Giới tính:</span> Nam</p>
          <p className="flex items-center gap-2"><FaPhoneAlt /> 0358974178</p>
          <p className="flex items-center gap-2"><FaEnvelope /> kienduc10012004@gmail.com</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Bình Tân, TP.HCM</p>
          <a href='https://github.com/kienduc10012004' className="flex hover:text-white duration-150 items-center gap-2"><FaGithub /> https://github.com/kienduc10012004 </a> 
        </div>
      </div>
    </header>
  );
};

export default Header;