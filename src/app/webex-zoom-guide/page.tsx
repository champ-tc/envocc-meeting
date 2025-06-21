import Link from "next/link";

export default function MeetingRoomGuide() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-blue-100">
                <div className="container mx-auto m-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <button className="px-4 py-2 border border-blue-200 rounded-md bg-white hover:bg-blue-50 transition">← กลับหน้าหลัก</button>
                        </Link>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg mr-6">
                                <span className="text-white text-2xl">📘</span>
                            </div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                วิธีการเปิดห้องประชุม
                            </h1>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            กองโรคจากการประกอบอาชีพและสิ่งแวดล้อม
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            คู่มือขั้นตอนการจองและใช้งานห้องประชุมอย่างมีประสิทธิภาพ
                            พร้อมเทคนิคและข้อแนะนำที่เป็นประโยชน์
                        </p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-blue-700 mb-4">🗓️ การจองห้องประชุมล่วงหน้า</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>เข้าสู่ระบบจองห้องผ่านเว็บไซต์</li>
                            <li>เลือกวันที่และช่วงเวลาที่ต้องการ</li>
                            <li>ระบุจำนวนผู้เข้าร่วมและวัตถุประสงค์</li>
                            <li>เลือกอุปกรณ์เสริมที่ต้องใช้</li>
                            <li>ยืนยันและรอการอนุมัติ</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-green-700 mb-4">🧹 การเตรียมห้องประชุมก่อนใช้งาน</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>ตรวจสอบความสะอาดของห้อง</li>
                            <li>จัดโต๊ะเก้าอี้ให้เหมาะสม</li>
                            <li>ทดสอบโปรเจกเตอร์และไมค์</li>
                            <li>ตรวจสอบสัญญาณอินเทอร์เน็ต</li>
                            <li>เตรียมเอกสารหรืออุปกรณ์ที่จำเป็น</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">🎤 การใช้งานระหว่างประชุม</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>เริ่มประชุมตรงเวลา</li>
                            <li>ใช้อุปกรณ์เสียงอย่างถูกต้อง</li>
                            <li>ดูแลให้การประชุมเป็นไปตามกำหนด</li>
                            <li>หลีกเลี่ยงการรบกวน</li>
                            <li>จดบันทึกหรือบันทึกวิดีโอหากจำเป็น</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">🔒 การปิดห้องประชุมหลังใช้งาน</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>ปิดอุปกรณ์ไฟฟ้าทุกชนิด</li>
                            <li>จัดโต๊ะเก้าอี้คืนตำแหน่งเดิม</li>
                            <li>เก็บของส่วนตัวให้เรียบร้อย</li>
                            <li>ทำความสะอาดเบื้องต้น</li>
                            <li>ล็อคประตูห้องประชุม</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}