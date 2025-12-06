interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content?: string;
  testimonial?: string;
  avatar?: string;
  image?: string;
  rating?: number;
  category?: string;
}

export default function TestimonialCard({ name, role, company, content, testimonial, avatar, image, rating = 5 }: TestimonialCardProps) {
  const displayContent = content || testimonial || '';
  const displayAvatar = avatar || image || name.charAt(0);
  
  return (
    <div className="bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.12] transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
          {displayAvatar.length === 1 ? displayAvatar : displayAvatar.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-400 leading-relaxed">&quot;{displayContent}&quot;</p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
