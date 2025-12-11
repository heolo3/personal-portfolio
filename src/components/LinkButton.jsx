export default function LinkButton({ href, label }) {
  return (
    <a
      href={href}
      className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-purple-600 transform hover:scale-105 transition"
    >
      {label}
    </a>
  );
}
