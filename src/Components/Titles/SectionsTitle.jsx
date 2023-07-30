

const SectionsTitle = ({Heading, subHeading,clsNameH,  clsNameS}) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
            <p className={`${clsNameS} text-2xl mt-16 text-lime-500 mb-2 border border-lime-600`}>** { subHeading} **</p>
            <h3 className={`${clsNameH}text-3xl uppercase border-b-4 border-lime-500 py-41`}>{Heading}</h3>
        </div>
    );
};

export default SectionsTitle;