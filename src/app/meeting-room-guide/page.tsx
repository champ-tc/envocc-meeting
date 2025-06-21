import Link from "next/link";
import Image from 'next/image';

export default function MeetingRoomGuide() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-blue-100">
                <div className="container mx-auto py-8 px-4 text-center space-y-4">
                    <div className="flex items-center justify-center">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg mr-4">
                            <span className="text-white text-2xl">📘</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">
                            วิธีการเปิดห้องประชุม
                        </h1>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                        กองโรคจากการประกอบอาชีพและสิ่งแวดล้อม
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        คู่มือขั้นตอนการจองและใช้งานห้องประชุมอย่างมีประสิทธิภาพ พร้อมเทคนิคและข้อแนะนำที่เป็นประโยชน์
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 space-y-8">
                <div className="flex items-center">
                    <Link href="/">
                        <button className="px-4 py-2 border border-blue-200 rounded-md bg-white hover:bg-blue-50 transition">
                            ← กลับหน้าหลัก
                        </button>
                    </Link>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-blue-700 mb-4">
                            1.เปิดคัทเอาท์
                        </h3>
                        <div className="relative w-full h-64 mb-4">
                            <Image
                                src="/images/meeting-room-guide/1.jpg"
                                alt="เปิดคัทเอาท์"
                                fill
                                className="object-contain rounded-xl border"
                            />
                        </div>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>เข้าสู่ระบบจองห้องผ่านเว็บไซต์</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-green-700 mb-4">🧹 การเตรียมห้องประชุมก่อนใช้งาน</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>ตรวจสอบความสะอาดของห้อง</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">🎤 การใช้งานระหว่างประชุม</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>เริ่มประชุมตรงเวลา</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">🔒 การปิดห้องประชุมหลังใช้งาน</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>ปิดอุปกรณ์ไฟฟ้าทุกชนิด</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}
