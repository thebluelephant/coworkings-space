import s from "./index.module.scss";
import LandingContent from "@/components/LandingContent";
import Blog from "@/components/Blog";
import Map from "@/components/Map/Map";
import '../styles/globals.css';
import Menu from "@/components/Menu";
import { Posts } from "@/utils/types";

export default function Home({ data }) {
    return (
        <div className={s.page}>
            <Menu />
            <LandingContent />
            <Blog posts={data} />
            <Map />
        </div>
    );
}

export async function getServerSideProps(context) {
    const {
        req,
    } = context

    const acceptLanguage = req.headers['accept-language'] || ''
    const locale = acceptLanguage.split(',')[0]
    const lang = locale.startsWith('fr') ? 'fr' : 'en'
    const res = await fetch(`https://blog.coworkings.space/wp-json/wp/v2/posts?language=${lang}&_embed&_fields=id,slug,title,link,_links,_embedded&per_page=3`);
    const data: Posts = await res.json();
    return {
        props: { data },
    };
}

