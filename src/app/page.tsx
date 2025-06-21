"use client";

import Link from "next/link";
import React from 'react'

const guides = [
  {
    id: 1,
    title: "วิธีการเปิดห้องประชุมกองโรคจากการประกอบอาชีพและสิ่งแวดล้อม",
    description: "จอ, ไมล์, ลำโพง",
    icon: "📘",
    path: "/meeting-room-guide",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
    shadowColor: "shadow-emerald-200"
  },
  {
    id: 2,
    title: "วิธีใช้งานอุปกรณ์ของ IT ในการเปิด Webex Zoom",
    description: "ไมล์, กล้อง, ขากล้อง, usb adapter",
    icon: "📹",
    path: "/it-equipment-guide",
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    bgGradient: "from-violet-50 via-purple-50 to-indigo-50",
    shadowColor: "shadow-violet-200"
  },
  {
    id: 3,
    title: "วิธีใช้งาน Webex Zoom",
    description: "วิธีใช้ระบบ Webex และ Zoom",
    icon: "🎓",
    path: "/webex-zoom-guide",
    gradient: "from-rose-400 via-pink-500 to-red-600",
    bgGradient: "from-rose-50 via-pink-50 to-red-50",
    shadowColor: "shadow-rose-200"
  }
];


function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="bg-white/90 backdrop-blur-xl shadow-xl border-b border-blue-100">
        <div className="container mx-auto m-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">ระบบคู่มือการใช้งาน</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => {
            const isEquipmentList = guide.description.includes(",");

            return (
              <div
                key={guide.id}
                className={`p-6 rounded-3xl bg-gradient-to-br ${guide.bgGradient} ${guide.shadowColor} shadow-lg group flex flex-col`}
              >
                <div className={`bg-gradient-to-r ${guide.gradient} p-4 rounded-2xl w-fit mb-4 text-white text-2xl`}>
                  {guide.icon}
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-3">{guide.title}</h2>

                {isEquipmentList ? (
                  <>
                    <p className="text-sm text-gray-600 mb-2 font-medium">อุปกรณ์มี:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.description.split(",").map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-white/80 text-gray-700 text-sm rounded-xl px-4 py-2 shadow-inner border border-gray-100"
                        >
                          {item.trim()}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-700 bg-white/80 rounded-xl px-4 py-3 shadow-inner border border-gray-100 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                )}

                {/* ✅ ปุ่มอยู่ชิดล่าง และขนาดพอดี ไม่เต็มความกว้าง */}
                <Link
                  href={guide.path}
                  className={`inline-flex items-center text-white font-medium px-4 py-2 rounded-xl bg-gradient-to-r ${guide.gradient} hover:shadow-xl transition-all mt-auto self-start`}
                >
                  เริ่มต้นอ่านคู่มือ
                  <span className="ml-2">➡️</span>
                </Link>
              </div>


            );
          })}
        </div>
      </main>
    </div>
  );
}


export default IndexPage