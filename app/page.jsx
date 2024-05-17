import Navbar from "@/componante/Navbar/Navbar";
import Link from "next/link";
import Footer from "@/componante/Footer/Footer";
import Featured from "@/componante/featured/Featured";
import BlogPage from "@/componante/BlogPage";
import CardList from "@/componante/CardList/CardList";

export default function Home() {
  return <div>
    <Featured/>
    <CardList/>
    </div>;
}
