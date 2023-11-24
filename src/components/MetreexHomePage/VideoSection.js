import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const VideoSection = () => {
  const [videoSection, setVideoSection] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/video-sections`)
      .then((res) => res.json())
      .then((info) => setVideoSection(info));
  }, []);
  return (
    <>
      {videoSection.map((e) => (
        <section
          id="video-3"
          className="bg-indigo bg-map wide-60 video-section division"
        >
          <div className="container white-color">
            <div className="row d-flex align-items-center">
              <div className="col-lg-5">
                <div className="video-txt mb-40">
                  <h4 className="h4-lg">{e.videoHeading}</h4>

                  <p>{e.description}</p>
                </div>
              </div>
              <div className="col-lg-7 mb-40">
                <div className="video-link text-center">
                  <div className="play-btn play-btn-primary text-center">
                    <Link
                      className="video-popup3 video-play-button"
                      to={e.youtubeLink}
                    >
                      <span />
                    </Link>

                    <img
                      className="img-fluid"
                      src={e.ctaImage}
                      alt="video-preview"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default VideoSection;
