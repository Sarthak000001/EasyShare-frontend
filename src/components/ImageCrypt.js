import React from 'react';
import './ImageCrypt.css';

const ImageCrypt = () => {
  return (
    <div className='wrapper-container'>
            <div className="imagecrypt-container">
            <h1 className="imagecrypt-title">ImageCrypt - Secure Your Image Files</h1>
            <p className="imagecrypt-description">
                Protect your images with <strong>ImageCrypt</strong>. With the help of ImageCrypt, you can easily encrypt your images before sharing, ensuring that only the recipient with the correct key can decrypt and view the original image.
            </p>
            <div className="imagecrypt-actions">
                <a href='https://sarthak001.pythonanywhere.com/' className="imagecrypt-button encrypt-btn" target='_blank'>
                Click Here
                </a>
            </div>
         </div>
    </div>
  );
};

export default ImageCrypt;
