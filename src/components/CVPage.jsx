import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';

// Tạo mảng dữ liệu dự án cho gọn
const projectsData = [
  {
    title: "SAMAR",
    url: "https://samar-html-css.vercel.app/",
    tech: "HTML, CSS, slick, count up,...",
    desc: "Xây dựng giao diện responsive, sử dụng thư viện hỗ trợ.",
    role: "Thực hiện cá nhân.",
  },
  {
    title: "SOLID",
    url: "https://solid-html-js-tailwindcss-hbgx.vercel.app/",
    tech: "HTML, TailwindCSS, slick, back-to-top,...",
    desc: "Xây dựng giao diện responsive, tập trung vào phần 'integrations' và các trang con.",
    role: "Thực hiện phần 'integrations' đến hết, các trang Blog, các Doc, Support.",
  },
  {
    title: "PHONE STORE",
    url: "https://phone-store-html-js-tailwindcss.vercel.app/",
    tech: "HTML, Tailwind, JavaScript, MockAPI",
    desc: "Shop điện thoại có trang quản trị, responsive, lọc, sắp xếp.",
    role: "Thực hiện trang quản lý sản phẩm.",
  },
  {
    title: "SHOES SHOP",
    url: "https://shoesshop-reactjs-tailwindcss-eiqy.vercel.app/",
    tech: "ReactJS, TailwindCSS",
    desc: "Shop bán giày, responsive, lọc, sắp xếp sản phẩm.",
    role: "Thực hiện cá nhân.",
  },
];

const skillsData = {
  hard: [
    { name: "Front End (sử dụng thành thạo)", techs: "HTML, CSS3, JavaScript(ES6), ReactJS, Tailwindcss" },
    { name: "Back End (có tiếp xúc và sử dụng được)", techs: "NodeJS, ExpressJS, MongoDB, Java" },
    { name: "Công cụ", techs: "Github, VsCode, Eclipse, Docker, Figmar" },
  ],
  soft: ["Giao tiếp", "Làm việc nhóm", "Đọc tài liệu tiếng Anh"]
};

const CVPage = () => {
  return (
    <div className="px-3 w-full">
      <Header />
      
      <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-16">
        <div className="md:col-span-2 space-y-16">
          <About />
          <Education />
          <Projects projects={projectsData} />
        </div>
        <div className="space-y-16">
          <Experience />
          <Skills skills={skillsData} />
        </div>
      </div>
      <footer className="text-center px-3 text-lg text-zinc-300 py-10 bg-zinc-800 rounded-t-3xl border-t border-zinc-700">
        © {new Date().getFullYear()} Lê Đức Kiên. CV dành cho vị trí Intern Front End.
      </footer>
    </div>
  );
};

export default CVPage;