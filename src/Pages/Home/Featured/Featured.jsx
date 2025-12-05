import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import featuredPhoto from "../../../assets/home/featured.jpg";
import './Featured.css'


const Featured = () => {

    return (
        <div className="featured-item !bg-fixed">
            <SectionTitle 
                Heading= 'FROM OUR MENU'
                subHeading= 'Check it out'
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-32 gap-16">
                <div><img className="" src={featuredPhoto} alt="" /></div>

                <div className="md:ml-10 text-white">
                    <p className="mb-2">March 20, {new Date().getFullYear()}</p>
                    <p className="uppercase mb-2">WHERE CAN I GET SOME?</p>
                    <p className=" mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod 
                        nobis quas quasi. Eaque repellat recusandae ad laudantium
                        tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline border-0 border-b-2 text-white">Order New</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;