export default function ProjectCard({ title, description, tags, isDark }) {
  const bgColor = isDark ? 'bg-gray-700' : 'bg-white';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-600';
  
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition m-48`}>
      <h3 className="text-xl font-bold mb-3 text-indigo-600">{title}</h3>
      <p className={`${textColor} mb-4`}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-indigo-600 text-white px-3 py-1 max-w-full text-xs font-small">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
