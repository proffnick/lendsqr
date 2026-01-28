import { FiLogIn } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('demo@yourapp.com');
  const [pass, setPass] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: auth, then:
    nav('/app');
  };
// grid place-items-center p-4 
  return (
    <main className="min-h-screen">
      <div className="min-h-screen flex flex-row m-0 p-0">
      {/* Left */}
      <div className="h-full min-h-screen w-full xl:w-[50%]">
        <div className="pt-[26.5px] mb-[34.75px]">
          {/* logo */}
        </div>
      </div>

      {/* Right */}
      <div className="h-full min-h-screen bg-white w-full xl:w-[50%] grid place-items-center p-4">
        <div className="flex items-center justify-center h-full">
          {/* right content */}
          <div className="card w-full max-w-md p-6 login  md:p-8 border-0 shadow-none ">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold">Welcome</h1>
              <p className="text-muted mt-1 text-sm">
                Enter details to login.
              </p>
            </div>

            <form className="space-y-4" onSubmit={submit}>
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
              </div>
              <div>
                <label className="block mb-1 text-sm">Password</label>
                <input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
              </div>
              <button className="btn-primary w-full gap-2" type="submit">
                <FiLogIn /> Sign in
              </button>
            </form>

            <p className="text-center text-xs text-muted mt-4">
              By continuing you agree to our Terms & Privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
