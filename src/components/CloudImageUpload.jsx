import React, { useState } from "react";
import axios from "axios";

const CLOUD_NAME = "your_cloud_name"; // Replace with yours
const UPLOAD_PRESET = "species_upload_preset"; // Replace with your unsigned preset

function CloudImageUpload({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      setUploading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      const url = response.data.secure_url;
      setImageURL(url);
      onUpload(url); // Pass image URL back to parent
    } catch (error) {
      console.error("Upload error:", error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
      {imageURL && (
        <img src={imageURL} alt="Uploaded" className="mt-2 h-40 object-contain rounded-lg" />
      )}
    </div>
  );
}

export default CloudImageUpload;
