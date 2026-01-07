export default function SkillBadge({ skill }) {
  return (
    <span className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-6 py-3 rounded-full text-base font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:hover:bg-opacity-30 transition">
      {skill}
    </span>
  );
}
