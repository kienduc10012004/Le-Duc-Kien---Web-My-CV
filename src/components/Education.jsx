import React from 'react';

const Education = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold border-b-4 border-teal-500 pb-2 mb-6 inline-block">HỌC VẤN</h2>
      <div className="bg-zinc-800 p-6 rounded-xl space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">Trường Đại học Công Nghiệp thành phố Hồ Chí Minh</h3>
          <p className="text-zinc-400 text-xl"><i>2022 – 2026 | Chuyên ngành: Công Nghệ Thông Tin</i></p>
        </div>
        <ul className="list-disc list-outside ml-6 text-zinc-300 space-y-1">
          <li className='text-xl'>Xếp loại: Khá - GPA: 2.8/4.0</li>
          <li className='text-xl'>Môn học liên quan: Hệ Thống Công Nghệ Web, Lập Trình Công Nghệ Web Nâng Cao, Lập Trình và Tích Hợp Nâng Cao.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;