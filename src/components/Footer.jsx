export default function Footer({ isDark }) {
  const bgColor = isDark ? 'bg-gray-950' : 'bg-gray-800';
  
  return (
    <footer className={`${bgColor} text-white text-center py-6`}>
      <p>&copy; 2025 Graeme Nelson. All rights reserved.</p>
    </footer>
  );
}
