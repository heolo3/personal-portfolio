export default function Section({ id, title, isDark, children }) {
  const bgColor = isDark ? 'bg-gray-900' : 'bg-white';
  const alternateBgColor = isDark ? 'bg-gray-800' : 'bg-gray-50';
  const isAlternate = ['portfolio', 'other'].includes(id);
  
  return (
    <section id={id} className={`py-32 px-8 ${isAlternate ? alternateBgColor : bgColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-indigo-600 border-b-4 border-indigo-600 pb-4 inline-block">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
