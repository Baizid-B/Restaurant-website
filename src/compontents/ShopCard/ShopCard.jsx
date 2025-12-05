import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth/useAuth';
import './ShopCard.css'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';
import useCart from '../../hooks/useCart/useCart';

const ShopCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleCart = food =>{
        if (user && user.email) {
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    // refetch use to tanstock quray
                    refetch()
                }
            })
        }else{
            Swal.fire({
                title: "Please are not logged In!",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login
                    navigate('/login', {state: {from: location}})
                }
              });
        }
    }

    return (
        <div className="w-96 bg-base-100">
            <figure className="indicator">
                <img className="bg-cover rounded-none"
                src={image}
                alt="food Item" />
                <span className="food-card indicator-item text-xl px-6 py-2 bg-slate-700 text-white font-semibold">$ {price}</span>
            </figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{recipe}</p>
                <div className="justify-end">
                <button 
                onClick={() => handleCart(item)}
                className="btn btn-outline
                 border-0 border-b-2 uppercase
                text-[#bb8506] hover:text-[#bb953c]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;