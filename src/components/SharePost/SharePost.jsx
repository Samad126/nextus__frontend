import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DefaultBtn } from "../../assets/components.styles";

function SharePost() {
  const [announcement, setAnnouncement] = useState({
    type: "",
    title: "",
    details: "",
  });

  const handleChange = (event) => {
    setAnnouncement({ ...announcement, type: event.target.value });
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const checkForm = (obj) => {
    return Object.values(obj).every((value) => value !== "");
  };

  useEffect(() => {
    setIsDisabled(!checkForm(announcement));
  }, [announcement]);

  return (
    <section id="share-post">
      <div className="share-post__container">
        <div className="share-post__top">
          <Link to="/profile">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M16.25 6.5L9.75 13L16.25 19.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          <div className="share-post__header">
            <h1>Share your announcement</h1>
            <p>Make sure you fill all the information correctly</p>
          </div>
        </div>
        <div className="share-post__bottom">
          <form>
            <FormControl>
              <Select
                value={announcement.type}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Select your post type</em>
                </MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </Select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Title of your post"
              variant="outlined"
              value={announcement.title}
              onChange={(e) =>
                setAnnouncement({ ...announcement, title: e.target.value })
              }
            />
          </form>

          <div className="share-post__textarea">
            <div className="share-post__textarea-header">
              <h1>Give us some details</h1>
              <p>
                Upload more information to make it clear for everyone. Make sure
                your file is proper.
              </p>
            </div>
            <div className="share-post__textarea-letter">
              <TextField
                id="outlined-multiline-flexible"
                label="More detail about your post"
                multiline
                maxRows={4}
                value={announcement.details}
                onChange={(e) =>
                  setAnnouncement({ ...announcement, details: e.target.value })
                }
              />
              <p>0/500</p>
            </div>
          </div>
          <DefaultBtn disabled={isDisabled}>Post</DefaultBtn>
        </div>
      </div>
    </section>
  );
}

export default SharePost;
