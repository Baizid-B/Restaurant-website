import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItemShared from "../../Shared/MenuItem/MenuItemShared";


const MenuCatagory = ({items,title,img}) => {
    return (
        <div>
            <div className="mb-24">
                {title && <Cover img={img} title={title}/>}
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItemShared key={item._id} item={item} ></MenuItemShared>)
                }
            </div>

            <div className="mb-16 text-center">   
                <Link to={`/Shop/${title}`}>
                    <button className=" btn btn-outline border-0 uppercase mt-16 border-b-2 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCatagory;