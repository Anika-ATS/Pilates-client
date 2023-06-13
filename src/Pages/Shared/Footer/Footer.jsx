import logo from '../../../assets/yoga-and-meditation-logo-free-png.webp'

const Footer = () => {
    return (


        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 ">
            <div className="items-center">
                <div className='flex justify-between '>
                    <img className='w-14 h-14 p-1 space-x-3 rounded-full  '
                        src={logo} alt="" /> 
                <p className='text-base mt-3'>Pilates Butterfly</p> </div>
                <p>An amazing service provider for Body and mental health since 2023.<br/><br/>
                 <span className='text-black'>Copyright © 2023 - All right reserved by Pilates Butterfly Authority.</span></p>
            </div>



            <a className=" mt-14 text-purple-800 text-lg ">
                <label htmlFor="my-modal-3" >About Us</label>


                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Congratulations Nyama Hoard user!</h3>
                        <p className="py-4">We're dedicated to serve our people with differents kinds of classes .We haven't any other brach .</p>
                    </div>
                </div>


            </a>
            <a className=" mt-14 text-purple-800 text-lg">Home</a>
            <a className=" mt-14 text-purple-800 text-lg">Blog</a>
            <a className=" mt-14 text-purple-800 text-lg">
                {/* The button to open modal */}
                <label htmlFor="my-modal-5" >Contact Us</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <label htmlFor="my-modal-5" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h3 className="text-lg font-bold">Congratulations Pilates Butterflys!</h3>
                        <p className="py-4">You can follow us on facebook and instagram.Our Email is also open for contact.</p>
                    </label>
                </label>

            </a>


            <div className=" mt-12 relative py-2">
                <input type="text" placeholder="Your Email address" className="input input-bordered w-full pr-16" />
                <button className="btn btn-base absolute top-2 right-0 rounded rounded-l-none">Submit</button>
            </div>



            <div className="lg:mt-12 md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <a className='py-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg></a>

                    <a className='py-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>
        </footer>



    );
};

export default Footer;