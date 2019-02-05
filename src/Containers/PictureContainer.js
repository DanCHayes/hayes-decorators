import React from 'react';
import Picture from '../Components/Picture';
import Post from '../Components/Post';

const PictureContainer =() => {
  return (
    <div className="PictureContainer">
    	<h1>Pic-container</h1>
    	<Picture />
    	<Post />
    </div>
  );
}

const styles = {};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

export default PictureContainer;