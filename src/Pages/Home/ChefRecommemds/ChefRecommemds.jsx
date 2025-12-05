import chef1 from "../../../assets/home/slide1.jpg";
import chef2 from "../../../assets/home/slide2.jpg";
import chef3 from "../../../assets/home/slide3.jpg";

const ChefRecommemds = () => {
    return (
        <>
        <div className="grid md:grid-cols-3 gap-6 my-28">
            <div className="bg-base-100 w-auto">
                <figure>
                    <img className="w-[400px] h-[350px] bg-cover rounded-none"
                    src={chef1}
                    alt="food Item" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-xl">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="justify-end">
                    <button className="btn btn-outline border-0 border-b-2 uppercase text-[#bb8506] hover:text-[#bb953c]">add to cart</button>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className="bg-base-100 w-auto">
                <figure>
                    <img className="w-[400px] h-[350px] bg-cover rounded-none"
                    src={chef2}
                    alt="food Item" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-xl">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="justify-end">
                    <button className="btn btn-outline border-0 border-b-2 uppercase text-[#bb8506] hover:text-[#bb953c]">add to cart</button>
                    </div>
                </div>
            </div>


            {/*  */}

            <div className="bg-base-100 w-auto">
                <figure>
                    <img className="w-[400px] h-[350px] bg-cover rounded-none"
                    src={chef3}
                    alt="food Item" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-xl">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="justify-end">
                    <button className="btn btn-outline border-0 border-b-2 uppercase text-[#bb8506] hover:text-[#bb953c]">add to cart</button>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

export default ChefRecommemds;