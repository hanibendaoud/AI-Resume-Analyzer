import { usePuterStore } from "~/lib/puter";
import {Navigate, useLocation , useNavigate} from "react-router";
import { useEffect } from "react";
export const meta = () => {
  return [
    { title: "Auth - Resumind" },
    { name: "description", content: "Authentication Page for Resumind" },
  ];
};
const auth = () => {
  const { isLoading ,auth } = usePuterStore();
  const location = useLocation();
    const navigate = useNavigate();
    const next = location.search.split('next=')[1] || '/';

    useEffect(() => {
        if (auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next]);
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Login to continue you job journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse" disabled>
                Loading...
              </button>
            )  : (
              <>
              
                                {!auth.isAuthenticated && (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Login</p>
                                    </button>
                                ) }
                            
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
