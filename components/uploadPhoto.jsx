import { useState } from 'react';
import { Button } from '@/components/ui/button';

const UploadPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-sm">
      <h2 className="text-xl font-normal mb-4 text-left">Upload Your Photo</h2>
      {selectedImage ? (
        <div className="flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full h-auto max-h-[100px] object-contain mb-4"
          />
          <Button
            onClick={handleRemoveImage}
            className="opacity-85 bg-red-700 hover:bg-red-800"
          >
            Remove
          </Button>
        </div>
      ) : (
        <div className="text-left">
          <label
            htmlFor="image-upload"
            className="opacity-85 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300"
          >
            Upload
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;