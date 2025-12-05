

const SectionTitle = ({Heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className=" text-yellow-600">---{subHeading}---</p>
            <h2 className="border-y-2 py-2 uppercase text-2xl">{Heading}</h2>
        </div>
    );
};

export default SectionTitle;