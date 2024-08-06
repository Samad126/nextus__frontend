import React, { useEffect, useRef, useState } from "react";
import { DefaultBtn, PageSection } from "../../assets/components.styles";
import CopyToClipboard from "react-copy-to-clipboard";
import { TextField } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Card from "../Card/Card";
import { courses, posts } from "../../constants";
import ProfileContent from "./ProfileContent";
import PostCard from "../Card/PostCard";

function Profile({ userData }) {
  const [copiedText, setCopiedText] = useState({
    value: "www.linkedin.com/in/ilaha-maharramova-61a782298",
    copied: false,
  });

  const [description, setDescription] = useState(
    "Passionate UX/UI Designer dedicated to creating visually compelling and user-friendly designs, specialized in translating complex concepts into seamless digital experiences. A collaborative team player, I am passionate about contributing to project success. Let's connect and elevate your design projects. #UXDesign #UIDesign"
  );
  const [editable, setEditable] = useState(false);
  const [editBackground, setEditBackground] = useState(
    "https://miro.medium.com/v2/resize:fit:1400/0*VN3fRVHbM1r__dtx"
  );
  const [editProfilePicture, setEditProfilePicture] = useState(
    "https://i.pinimg.com/736x/d2/98/4e/d2984ec4b65a8568eab3dc2b640fc58e.jpg"
  );

  const [tooltipActive, setTooltipActive] = useState(false);
  const timeoutRef = useRef(null);
  const handleChangeBackgroundImage = (e) => {
    const file = e.target.files[0];
    setEditBackground(URL.createObjectURL(file));
  };

  const handleChangeProfilePicture = (e) => {
    const file = e.target.files[0];
    setEditProfilePicture(URL.createObjectURL(file));
    console.log(editBackground);
  };

  const handleTooltipClick = () => {
    setTooltipActive(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setInterval(() => {
      setTooltipActive(false);
    }, 1000);
  };

  return (
    <section id="profile">
      <div className="profile__container">
        <ProfileContent
          userData={userData}
          handleChangeBackgroundImage={handleChangeBackgroundImage}
          editBackground={editBackground}
          editProfilePicture={editProfilePicture}
          setEditable={setEditable}
          handleChangeProfilePicture={handleChangeProfilePicture}
          editable={editable}
          copiedText={copiedText}
          tooltipActive={tooltipActive}
          handleTooltipClick={handleTooltipClick}
          description={description}
          setCopiedText={setCopiedText}
          setDescription={setDescription}
        />

        <PageSection className="page__section">
          <div className="page__section-top">
            <h1>Bookings</h1>
            <Link>See all</Link>
          </div>
          <div className="page__section-bottom">
            {/* {courses.map((course, index) =>
              index < 3 ? <Card key={index} course={course} /> : ""
            )} */}
          </div>
        </PageSection>
        <PageSection className="page__section">
          <div className="page__section-top">
            <h1>Posts</h1>
            <Link>See all</Link>
          </div>
          <div className="page__section-bottom">
            {/* {posts.map((post, index) =>
              index < 3 ? <PostCard key={index} post={post} /> : ""
            )} */}
          </div>
        </PageSection>
      </div>
    </section>
  );
}

export default Profile;
