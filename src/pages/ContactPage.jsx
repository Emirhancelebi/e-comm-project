import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Redo, Twitter } from "lucide-react"

import { contact } from "@images"
import Footer from "../layout/Footer"

import InnerHeader from "../components/InnerHeader";


function ContactPage() {

    return (
        <div>
            <InnerHeader />

            <section className="container flex flex-col text-center py-28 gap-20   lg:flex-row lg:text-left ">
                <div className="">
                    <h5 className="text-h5 text-primary gap-9">CONTACT US</h5><br />
                    <h1 className="text-h1 text-primary gap-9">Get in touch
                        today!</h1><br />
                    <h4 className="text-h4 text-secondary gap-9">We know how large objects will act,
                        but things on a small scale</h4><br />
                    <h3 className="text-h3 text-primary gap-9">Phone ; +451 215 215 </h3><br />
                    <h3 className="text-h3 text-primary gap-9">Fax : +451 215 215</h3><br />
                    <div className="flex justify-center flex-row gap-8 p-3 lg:justify-normal">
                        <Twitter />
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                    </div>
                </div>

                <div>
                    <img src={contact} alt="" />
                </div>


            </section>

            <div className="container">

                <div className=" text-center">
                    <h6 className="text-h6li text-primary">VISIT OUR OFFICE</h6>
                    <h2 className="text-h2 text-primary">We help small businesses
                        with big ideas</h2>

                </div>

                <div className="flex flex-col lg:flex-row py-28 gap-20">
                    {/*Phone */}

                    <section className=" ">
                        <div className=" flex flex-col w-80 h-96 text-center py-12 px-10 gap-4 justify-center items-center " >
                            <Phone className="text-blu " size={72} />
                            <div className="text-primary text-h6li">
                                <h6 className="text-h6li text-primary">georgia.young@ple.com</h6>
                                <h6 className="text-h6li text-primary">georgia.young@example.com</h6>
                            </div>
                            <h5 className="text-h5 text-primary">Get Support</h5>
                            <button className="text-btn text-blu rounded-full  border border-blu w-[193px] h-14 ">Submit Request</button>
                        </div>
                    </section>
                    {/*Map */}

                    <section className=" ">
                        <div className=" flex flex-col w-80 h-96 text-center py-12 px-10 gap-4 justify-center items-center bg-primary " >
                            <MapPin className="text-blu " size={72} />
                            <div className="text-light text-h6li">
                                <h6 className="text-h6li text-light">georgia.young@ple.com</h6>
                                <h6 className="text-h6li text-light">georgia.young@example.com</h6>
                            </div>
                            <h5 className="text-h5 text-light">Get Support</h5>
                            <button className="text-btn text-blu rounded-full  border border-blu w-[193px] h-14 ">Submit Request</button>
                        </div>
                    </section>
                    {/*Mail */}
                    <section className=" ">
                        <div className=" flex flex-col w-80 h-96 text-center py-12 px-10 gap-4 justify-center items-center " >
                            <Mail className="text-blu " size={72} />
                            <div className="text-primary text-h6li">
                                <h6 className="text-h6li text-primary">georgia.young@ple.com</h6>
                                <h6 className="text-h6li text-primary">georgia.young@example.com</h6>
                            </div>
                            <h5 className="text-h5 text-primary">Get Support</h5>
                            <button className="text-btn text-blu rounded-full  border border-blu w-[193px] h-14 ">Submit Request</button>
                        </div>
                    </section>
                </div>

                <div className="py-20 gap-24">

                    <section className="flex justify-center items-center pb-5 rotate-45">
                        <Redo className="text-blu" size={72} />
                    </section>
                    <div className="container flex flex-col  justify-center items-center gap-4">
                        <h5 className="text-h5 text-primary">WE Can't WAIT TO MEET YOU</h5>
                        <h1 className="text-h1 text-primary">Let’s Talk</h1>
                        <button className="bg-blu text-btn text-light w-[186px] h-[52px] rounded-sm ">Try it free now</button>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default ContactPage