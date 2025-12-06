interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
  category?: string;
}

export default function PortfolioCard({ title, description, image, tags, link, category }: PortfolioCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#0D0E12] to-[#0A0A0D] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all group">
      <div className={`aspect-video bg-gradient-to-br ${image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full text-xs text-gray-400 mb-3">
            {category}
          </span>
        )}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-500 mb-4 text-sm">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a 
            href={link}
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
          >
            View Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
