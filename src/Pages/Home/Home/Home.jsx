import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Categary from "../categary/Categary";
import ChefRecommemds from "../ChefRecommemds/ChefRecommemds";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularManu";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {

    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="">
                <Categary></Categary>
            </div>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <ChefRecommemds></ChefRecommemds>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;