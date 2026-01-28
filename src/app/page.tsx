import s from "../styles/page.module.scss";
import '../styles/globals.css';
import Menu from "@/components/Menu";
import LandingContent from "@/components/LandingContent";
import Blog from "@/components/Blog";
import Map from "@/components/Map/Map"
import Footer from "@/components/Footer";
import { fetchAllCoworkings } from "@/api/coworkings";

export default async function Home() {
    const coworkings = await fetchAllCoworkings()
    return (
        <div className={s.page}>
            <Menu />
            <LandingContent />
            <Blog />
            <Map coworkings={coworkings} />
            <Footer />
        </div>
    );
}


