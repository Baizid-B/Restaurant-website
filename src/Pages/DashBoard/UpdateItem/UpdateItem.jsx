import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =  `https://api.imgbb.com/1/upload?&key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name,category,price,recipe,image,_id} = useLoaderData();
    // console.log(item);
    
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState:{errors}, reset } = useForm();

    const onSubmit = async(data) => {
            // img upload to imgbb and the get an url
            const imgFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imgFile, {
                headers:{
                    'content-Type':'multipart/form-data'
                }
            });
            if (res.data.success) {
                const addMenuItem ={
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image:res.data.data.display_url
                }
                const menuRes = await axiosSecure.patch(`/menu/${_id}`,addMenuItem)
                console.log(menuRes.data);
                if (menuRes.data.modifiedCount > 0) {
                    reset()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${data.name} is updated to the menu`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            }
            console.log(res.data);
        };
    return (
        <>
            <div>
                <Helmet>
                    <title>Bistro Boss | Update Items</title>
                </Helmet>
                <SectionTitle
                    subHeading='Refresh info'
                    Heading='UPDATE ITEM'
                ></SectionTitle>
            </div>

            <div className="p-12 ml-10">
                <form onSubmit={handleSubmit(onSubmit)}>
            
                    {/* recipe name */}
                    <div className=" mb-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe name*</span>
                            </div>
                            <input defaultValue={name} {...register("name", {required:true})} 
                            type="text" 
                            placeholder="Recipe name" 
                            className="input input-bordered w-full" />
                        </label>
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
            
                    {/* category and price */}
                    <div className="grid md:grid-cols-2 gap-7 mb-6">
                        <div>
                            <label>
                                <div className="label">
                                            <span className="label-text">Category*</span>
                                </div>
            
                                <select defaultValue={category} {...register("category", {required:true})}
                                    className="select select-bordered w-full">
                                    <option disabled value='default'>Select a Category</option>
                                    <option value="salad">salad</option>
                                    <option value="plzza">plzza</option>
                                    <option value="soup">soup</option>
                                    <option value="dessert">dessert</option>
                                    <option value="drinks">drinks</option>
                                </select>
                            </label>
                            {errors.category && <span className="text-red-600">This field is required</span>}
                        </div>
            
                        {/* price */}
                        <div>
                            <label>
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
            
                                <input defaultValue={price} {...register("price", {required:true})} 
                                type="number" 
                                placeholder="Price" 
                                className="input input-bordered w-full" />
                            </label>
                            {errors.price && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>
            
                    {/* recipe details */}
                    <div  className=" mb-6">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <textarea defaultValue={recipe} {...register("recipe",{required: true})}  className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        </label>
                        {errors.recipe && <span className="text-red-600">This field is required</span>}
                    </div>
            
                    {/* image */}
                    <div className="form-control w-full my-8">
                        <input {...register('image', {required:true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.image && <span className="text-red-600">This field is required</span>}
                    </div>
            
            
                    <button className="btn text-white font-bold text-lg bg-[#b17e2f]">
                        Update Recipe Details
                        <ImSpoonKnife />
                    </button>
                </form>
            </div>
        </>
    );
};

export default UpdateItem;