

const MenuItemShared = ({item}) => {

    const {name, image, recipe, price} = item

    return (
        <div className="flex space-x-4 items-center">

            <img style={{borderRadius:'0px 200px 200px 300px'}} src={image} className="w-[100px]" alt="" />

            <div className="">
                <h3 className="font-semibold">{name}----------</h3>
                <h3>{recipe}</h3>
            </div>

            <p className="text-[#d48a04]">${price}</p>
        </div>
    );
};

export default MenuItemShared;