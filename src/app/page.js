import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Manage Your Tasks <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Like a Pro 🚀
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mb-8">
          Stay organized, track progress, and boost productivity with our
          powerful task management system.
        </p>

        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-medium shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            href="/tasks"
            className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
          >
            View Tasks
          </Link>
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">📋 Task Management</h3>
            <p className="text-gray-400">
              Create, update, and delete tasks easily.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast & Responsive</h3>
            <p className="text-gray-400">
              Built with Next.js for high performance.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
            <p className="text-gray-400">Your data is safe and protected.</p>
          </div>
        </div>
      </section>

      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to boost your productivity?
        </h2>

        <Link
          href="/dashboard"
          className="inline-block mt-4 px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
        >
          Go to Dashboard
        </Link>
      </section>

      <Footer />
    </div>
  );
}
