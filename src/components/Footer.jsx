export default function Footer() {
  return (
    <div className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2026 Task Manager. All rights reserved.
        </p>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
