import Author from "@/components/homepage/Author";
import Banner from "@/components/homepage/Banner";
import FeatureBooks from "@/components/homepage/FeatureBooks";
import LatestNews from "@/components/homepage/LatestNews";
import MarqueePage from "@/components/homepage/Marquee";
import Offer from "@/components/homepage/Offer";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Banner></Banner>
      <MarqueePage></MarqueePage>
      <FeatureBooks></FeatureBooks>
      <Offer></Offer>
      <Author></Author>
      <LatestNews></LatestNews>
    </div>
  );
}
