import React from "react";
import Layout from "../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { FiArrowDownRight } from "react-icons/fi";
import { team } from "../components/Data";
import { TeamBox } from "../components/SmallComps";

const Team = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <section className="wrapper lg:pt-20 pt-32">
                <div className="flex justify-start items-center relative mb-20 flex-col lg:flex-row">
                    <img
                        className="-z-10 absolute -left-32 top-20 opacity-20"
                        src="/assets/images/patterns/2.png"
                        alt=""
                    />
                    <div>
                        <div className="md:text-4xl text-2xl whitespace-nowrap mb-6 md:pl-10 mr-10">
                            <FiArrowDownRight className="md:text-7xl text-4xl inline-block " />{" "}
                            Meet our Team
                        </div>
                        <p className="opacity-50 max-w-md">
                            From banking and insurance to wealth management and
                            on securities distribution, we dedicated financial
                            services them the teams serve all major sectors. of
                            the industry. From banking and insurance to wealth
                            management and on securities distribution, we
                            dedicated financial services them the teams serve
                            all major sectors. of the industry.
                        </p>
                    </div>
                    <img
                        className="lg:w-1/2 mx-auto"
                        src="/assets/images/team/10.png"
                        alt=""
                    />
                </div>
                <div className="grid sm:gap-x-5 gap-x-3 gap-y-10 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-20">
                    {team.map((item, index) => {
                        return (
                            <TeamBox
                                key={index}
                                img={item.img}
                                name={item.name}
                                position={item.position}
                            />
                        );
                    })}
                </div>
                <div className="text-center border-custom-dark py-5">
                    <button className="bold mx-2">1</button>
                    <button className="bold mx-2 opacity-50">2</button>
                    <button className="bold mx-2 opacity-50">3</button>
                    <button className="bold mx-2 opacity-50">4</button>
                </div>
            </section>
        </Layout>
    );
};

export default Team;
