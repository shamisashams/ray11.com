import React from "react";
import Layout from "../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { FiArrowDownRight } from "react-icons/fi";
//import { team } from "../components/Data";
import { TeamBox } from "../components/SmallComps";

const Team = ({ seo }) => {

    const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

    const {team, localizations} = usePage().props;

    let links = function (links) {
        let rows = [];
        {
            links.map(function (item, index) {
                if (index > 0 && index < links.length - 1) {
                    rows.push(
                        <Link
                            href={item.url}
                            className={
                                item.active
                                    ? "text-decoration-line: underline bold mx-2 "
                                    : "bold mx-2"
                            }
                        >
                            <span style={{ padding: "5px" }}>{item.label}</span>
                        </Link>
                    );
                }
            });
        }
        return <div className="nums"> {rows.length > 1 ? rows : null} </div>;
    };

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
                            {__('client.team_header', localizations)}
                        </div>
                        <p className="opacity-50 max-w-md">
                            {renderHTML(__('client.team_text',localizations).newLineToBr())}
                        </p>
                    </div>
                    <img
                        className="lg:w-1/2 mx-auto"
                        src="/assets/images/team/10.png"
                        alt=""
                    />
                </div>
                <div className="grid sm:gap-x-5 gap-x-3 gap-y-10 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-20">
                    {team.data.map((item, index) => {
                        return (
                            <TeamBox
                                key={index}
                                img={item.latest_image ? item.latest_image.full_url:null}
                                name={item.name + ' ' + item.surname}
                                position={item.position}
                            />
                        );
                    })}
                </div>
                <div className="text-center border-custom-dark py-5">
                    {/*<button className="bold mx-2">1</button>
                    <button className="bold mx-2 opacity-50">2</button>
                    <button className="bold mx-2 opacity-50">3</button>
                    <button className="bold mx-2 opacity-50">4</button>*/}
                    {links(team.links)}
                </div>
            </section>
        </Layout>
    );
};

export default Team;
