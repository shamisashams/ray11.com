import React, { useState } from "react";
import Highlight from "../assets/images/shapes/11.png";
import Highlight2 from "../assets/images/shapes/4.png";
import { SocialMedia } from "../components/SmallComps";
import Img1 from "../assets/images/raypages/16.png";
import Img2 from "../assets/images/raypages/14.png";
import Img3 from "../assets/images/raypages/15.png";
import Slider4 from "../components/Slider4";
import RaySection from "../components/RaySection";
import { videoGrid } from "../components/Data";
import PlayIcon from "../assets/images/svg/play.svg";
import VideoPopup from "../components/VideoPopup";

const RayAnimation = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section className="relative pt-40 pb-12">
        <div className="wrapper flex items-center justify-between lg:flex-row flex-col">
          <div className="lg:w-2/5 lg:mr-10 lg:mb-0 mb-10">
            <div className="relative 2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl bold w-fit">
              <img
                className="absolute -left-14 top-1/2 -translate-y-1/2 "
                src={Highlight}
                alt=""
              />
              <span className="relative">Animate your ideas with us</span>
            </div>
            <div className="highlight-title nun-bold relative sm:px-20 px-14 whitespace-nowrap w-fit text-custom-dark xl:text-5xl sm:text-4xl text-3xl sm:my-14 my-10">
              <img
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src={Highlight2}
                alt=""
              />
              <span className="relative">Ray animation</span>
            </div>
            <p className="opacity-30 ">
              The driving force of all speeches, we believe that creation should
              be the point around which any communication strategy revolves.
            </p>
            <div className="flex justify-start items-center mt-10 mb-8">
              <div className="text-lg whitespace-nowrap">Social media</div>
              <div className="w-28 h-0.5 bg-white mx-4"></div>
              <SocialMedia />
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={Img1} alt="" />
          </div>
        </div>
      </section>
      <section className="wrapper pb-20">
        <div className="bold text-2xl mb-14">Directions</div>
        <RaySection color="#3FA0CD" title="Video animation">
          <div className="bold text-xl mb-10">Projects</div>
          <Slider4 />
        </RaySection>
        <RaySection color="#3FA0CD" title="Animated series">
          <div className="flex items-start justify-between flex-col lg:flex-row">
            <div className="lg:max-w-xl opacity-50 lg:mr-5 mr-0 mb-10">
              <p className="mb-4">
                A podcast is a collection or series of digital audio files that
                are made available for downloading or listening via the
                Internet. Each individual audio recording is known as a podcast
                episode. Podcasts are typically hosted by an individual or
                individuals who lead a conversation, share stories, or report
                the news
              </p>
              <p className="mb-4">
                Music, video and other types of media files are prearranged and
                transmitted in sequential packets of data so they can be
                streamed instantaneously. And unlike traditional downloads that
                are stored on your device, media files are automatically deleted
                once you play them.
              </p>
              <p className="mb-4">
                All you need to stream is a reliable and fast high speed
                internet connection, access or subscription to a streaming
                service or app, and a compatible device. See speed
                recommendations below.
              </p>
            </div>
            <img className="mx-auto" src={Img2} alt="" />
          </div>
        </RaySection>
        <RaySection color="#3FA0CD" title="Grapgics & commercial">
          <div className="max-w-xl text-lg mb-10">
            From banking and insurance to wealth management and on securities
            distribution.
          </div>
          <div className="flex items-start justify-between flex-col lg:flex-row">
            <div className="grid grid-cols-2 sm:gap-10 gap-5 max-w-xl lg:mr-10 mr-0 mb-14 ">
              {videoGrid.map((item, index) => {
                return (
                  <div
                    onClick={() => setShowVideo(true)}
                    key={index}
                    className="cursor-pointer group"
                  >
                    <div className="w-full h-32 mb-5 relative">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt=""
                      />
                      <img
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:animate-pulse"
                        src={PlayIcon}
                        alt=""
                      />
                    </div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="max-w-xl opacity-50 lg:mx-auto">
              <p className="mb-5">
                {" "}
                Live streaming is the broadcast of an event over the internet as
                it happens. Awards shows, sports, boxing matches, video games
                and special one-time events are the most popular types of live
                streaming with an ever-growing menu of topics.
              </p>
              <p>
                Social media platforms and others broadcast everything from
                celebrity events, promotions and lifestreaming to streaming
                between users. You can live stream on any compatible smartphone,
                tablet, TV, computer or gaming console with a relatively fast
                internet connection.
              </p>
            </div>
          </div>
        </RaySection>
        <RaySection color="#3FA0CD" title="Character creation">
          <div className="flex items-start justify-between flex-col lg:flex-row">
            <div className="lg:max-w-xl opacity-50 lg:mr-5 mr-0 mb-10">
              <p className="mb-4">
                A podcast is a collection or series of digital audio files that
                are made available for downloading or listening via the
                Internet. Each individual audio recording is known as a podcast
                episode. Podcasts are typically hosted by an individual or
                individuals who lead a conversation, share stories, or report
                the news
              </p>
              <p className="mb-4">
                Music, video and other types of media files are prearranged and
                transmitted in sequential packets of data so they can be
                streamed instantaneously. And unlike traditional downloads that
                are stored on your device, media files are automatically deleted
                once you play them.
              </p>
              <p className="mb-4">
                All you need to stream is a reliable and fast high speed
                internet connection, access or subscription to a streaming
                service or app, and a compatible device. See speed
                recommendations below.
              </p>
            </div>
            <img className="mx-auto lg:w-1/2" src={Img3} alt="" />
          </div>
        </RaySection>
      </section>
      <VideoPopup
        open={showVideo}
        closeVideo={() => setShowVideo(false)}
        src="https://www.youtube.com/embed/xYrPGIJ2qoo"
      />
    </>
  );
};

export default RayAnimation;
