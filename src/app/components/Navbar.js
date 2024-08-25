import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";


const NavBar = () => {
    const router = useRouter();

    const handleLogout = async () => {
      await signOut(auth);
      router.push("/sign~in");
    };

  return (
    <nav className="fixed top-[10px] w-full bg-purple-800 to-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/" className="relative inline-block group">
            <span className="relative text-white font-bold group-hover:text-gray-200 transition-colors duration-300 transform group-hover:scale-105">
              AlphaBI 
              <span className="absolute left-0 bottom-0 block w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Link>
        </div>
        <button onClick={handleLogout} className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red via-red-600 to-red-700 rounded-full overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          <span className="absolute inset-0 bg-red-800 opacity-30 rounded-full"></span>
          <span className="relative">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
