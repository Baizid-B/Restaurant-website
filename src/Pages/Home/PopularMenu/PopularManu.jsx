import { useEffect, useState } from "react";
import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import MenuItemShared from "../../Shared/MenuItem/MenuItemShared";
import useMenu from "../../../hooks/useMenu/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();  {/* custom hooks use */}
    const popularItems = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('Menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //         // console.log(setMenu)
    //     })
    // },[])
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={'Check it out'}
                Heading={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItemShared key={item._id} item={item} ></MenuItemShared>)
                }
            </div>

            <div className="mb-16 text-center">   
                <button className="btn btn-outline border-0 uppercase mt-16 border-b-2 border-black">
                     view full menu 
                </button>
            </div>

            <div className="bg-black text-white text-center py-20 text-4xl">
                <h1>Call Us: +88 01822811044</h1>
            </div>
        </section>
    );
};

export default PopularMenu;