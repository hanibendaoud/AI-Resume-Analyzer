import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to Resumind!" },
  ];
}
export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('../../public/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1  className="mt-10">Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        <ResumeCard />
      </section>
      <button
        onClick={auth.signOut}
        className="
    fixed
    bottom-5
    left-5
    bg-red-500
    text-white
    px-5
    py-3
    rounded-full
    shadow-lg
    hover:bg-red-600
    active:scale-95
    transition
    duration-200
    font-semibold
    z-50
    cursor-pointer
  "
      >
        Log Out
      </button>
    </main>
  );
}
