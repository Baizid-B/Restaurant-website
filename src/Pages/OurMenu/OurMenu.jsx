
import { Helmet } from "react-helmet-async"; 
import Cover from "../Shared/Cover/Cover";
import menuCoverImg from "../../../src/assets/menu/banner3.jpg";
import menuCoverImg2 from "../../../src/assets/menu/dessert-bg.jpeg";
import menuCoverImg3 from "../../../src/assets/menu/pizza-bg.jpg";
import menuCoverImg4 from "../../../src/assets/menu/salad-bg.jpg";
import menuCoverImg5 from "../../../src/assets/menu/soup-bg.jpg";

import useMenu from "../../hooks/useMenu/useMenu";
import SectionTitle from "../../compontents/SectionTitle/SectionTitle";
import MenuCatagory from "./MenuCatagory/MenuCatagory";


const OurMenu = () => {
    const [menu,loading] = useMenu();
    
    const offeredItem = menu.filter(item => item.category === 'offered')
    const dessertItem = menu.filter(item => item.category === 'dessert')
    const pizzaItem = menu.filter(item => item.category === 'pizza')
    const saladItem = menu.filter(item => item.category === 'salad')
    const soupItem = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            
            <div>
                <div className='mb-24'>
                    <Cover img={menuCoverImg} title='our menu'/>
                </div>
                <SectionTitle
                    subHeading= "Don't miss"
                    Heading="TODAY'S OFFER"
                ></SectionTitle>
                <MenuCatagory items={offeredItem} ></MenuCatagory>
            </div>

            <div className='mb-24'>
                <MenuCatagory items={dessertItem} title='dessert' img={menuCoverImg2} ></MenuCatagory>
            </div>
            
            <div className='mb-24'>
                <MenuCatagory items={pizzaItem} img={menuCoverImg3} title='pizza' ></MenuCatagory>
            </div>

            <div className='mb-24'>
                <MenuCatagory items={saladItem} img={menuCoverImg4} title='salad' ></MenuCatagory>
            </div>

            <div className='mb-24'>
                <MenuCatagory items={soupItem} img={menuCoverImg5} title='soup' ></MenuCatagory>
            </div>
        </div>
    );
};

export default OurMenu;

