import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { FileText, Download, Heart, MessageCircle, Share2, Tag, ChevronLeft, Calendar, Eye, Bookmark, X } from 'lucide-react';

// Mock Data
const MOCK_POST = {
  id: '1',
  title: 'สรุปสูตรฟิสิกส์ ม.4 เทอม 1 ฉบับเตรียมสอบ',
  author: {
    name: 'Nuttapong P.',
    avatar: 'https://i.pravatar.cc/150?u=nuttapong',
    role: 'ผู้เชี่ยวชาญ (Level 5)'
  },
  coverImage: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80',
  category: 'ฟิสิกส์',
  level: 'มัธยมศึกษาตอนปลาย',
  createdAt: '2 วันที่แล้ว',
  views: 1240,
  likes: 342,
  hashtags: ['#ฟิสิกส์', '#ม4', '#สรุปสูตร', '#เตรียมสอบ'],
  details: `
    <p>สวัสดีครับทุกคน! 👋 วันนี้ผมเอาสรุปสูตรฟิสิกส์ ม.4 เทอม 1 มาแจกครับ</p>
    <p>สรุปนี้เหมาะสำหรับคนที่กำลังเตรียมตัวสอบปลายภาค หรือเตรียมตัวสอบเข้ามหาวิทยาลัยครับ ผมได้รวบรวมสูตรที่สำคัญๆ และเทคนิคการจำมาให้หมดแล้ว!</p>
    <h3>เนื้อหาประกอบด้วย:</h3>
    <ul>
      <li>การเคลื่อนที่แนวตรง (1D Motion)</li>
      <li>กฎการเคลื่อนที่ของนิวตัน (Newton's Laws)</li>
      <li>งานและพลังงาน (Work and Energy)</li>
    </ul>
    <p>หวังว่าจะเป็นประโยชน์กับทุกคนนะครับ ถ้าชอบก็ฝากกดไลก์เป็นกำลังใจให้ด้วยนะครับ 🙏</p>
  `,
  pdf: {
    name: 'physics_m4_summary.pdf',
    size: '2.4 MB',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  images: [
    'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80'
  ]
};

export default function PostDetails() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // In a real app, you would fetch the post data based on `id`
  const post = MOCK_POST;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      {/* Back Button */}
      <Link to="/home" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-6 font-medium">
        <ChevronLeft className="h-5 w-5" /> กลับไปหน้าหลัก
      </Link>

      <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden">

        {/* Cover Image */}
        <div className="w-full aspect-video sm:h-[400px] bg-slate-100 relative">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-bold shadow-sm">
              {post.category}
            </span>
            <span className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm text-white rounded-full text-xs font-bold shadow-sm">
              {post.level}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <p className="font-bold text-slate-900">{post.author.name}</p>
                  <p className="text-xs font-medium text-slate-500">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.createdAt}</span>
                <span className="flex items-center gap-1.5"><Eye className="h-4 w-4" /> {post.views} ครั้ง</span>
              </div>
            </div>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.hashtags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-semibold flex items-center gap-1">
                <Tag className="h-3.5 w-3.5" /> {tag}
              </span>
            ))}
          </div>

          {/* Details (Rich Text) */}
          <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-headings:text-slate-900 prose-a:text-primary mb-10">
            <div dangerouslySetInnerHTML={{ __html: post.details }} />
          </div>

          {/* PDF Section */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> ไฟล์เอกสารแนบ ({post.pdf.name})
              </h3>
              <a href={post.pdf.url} download className="px-5 py-2.5 bg-blue-50 text-primary border border-blue-100 rounded-xl font-bold shadow-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2 text-sm">
                <Download className="h-4 w-4" /> ดาวน์โหลด ({post.pdf.size})
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="w-full h-[600px] sm:h-[800px] rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 shadow-inner relative">
              <iframe
                src={`${post.pdf.url}#toolbar=0`}
                className="w-full h-full border-0"
                title="PDF Document Viewer"
              />
            </div>
          </div>

          {/* Image Gallery */}
          {post.images && post.images.length > 0 && (
            <div className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">รูปภาพประกอบ ({post.images.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {post.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-slate-200" onClick={() => setPreviewImage(img)}>
                    <img src={img} alt={`gallery-${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Action Footer */}
        <div className="bg-slate-50 border-t border-slate-100 p-6 sm:px-10 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors shadow-sm border ${isLiked ? 'bg-rose-50 text-rose-500 border-rose-100' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'}`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-rose-500' : ''}`} /> {isLiked ? post.likes + 1 : post.likes}
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-sm">
              <MessageCircle className="h-5 w-5" /> 12
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center justify-center p-3 rounded-xl font-bold transition-colors shadow-sm border ${isBookmarked ? 'bg-amber-50 text-amber-500 border-amber-100' : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-100'}`}
              title="บันทึก"
            >
              <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-sm">
              <Share2 className="h-5 w-5" /> แชร์โพสต์
            </button>
          </div>
        </div>

      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setPreviewImage(null)}>
          <button onClick={() => setPreviewImage(null)} className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10">
            <X className="h-8 w-8" />
          </button>
          <img src={previewImage} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
