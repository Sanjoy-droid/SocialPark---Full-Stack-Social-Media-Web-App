import React, { useState, useRef } from "react";

import { Upload } from "lucide-react";

const page = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-2 border-2 border-dashed border-gray-300 rounded-lg w-full max-w-md mx-auto bg-gray-50 mt-2">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-28 h-28 flex items-center justify-center text-gray-500 bg-gray-100 rounded-full">
                <Upload className="w-20 h-20 " />
              </div>
            </div>

            {/* Image  */}
            {/* {imageUrls.map((url) => ( */}
            <div
              // key={url}
              className="relative flex-1 basis-[300px] h-[200px] pt-8"
            >
              {/* <Image */}
              {/*   loader={({ src, width }) => { */}
              {/*     return src; */}
              {/*   }} */}
              {/*   src={url} */}
              {/*   alt="upload image" */}
              {/*   className="w-24 h-24 object-cover" */}
              {/*   fill */}
              {/* /> */}
            </div>
            {/* ))} */}
          </div>
          <h2 className="text-lg font-medium text-gray-700">Upload an Image</h2>
          <p className="text-sm text-gray-500">
            Drag and drop or click to browse
          </p>
          <label
            htmlFor="file-upload"
            className="cursor-pointer px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <button
              // onClick={() => {
              //   fileInputRef.current?.click();
              // }}
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Updoad Image"}
            </button>
            <input
              // ref={fileInputRef}
              id="file-upload"
              disabled={isUploading}
              type="file"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0] as File;
                setIsUploading(true);
                const data = new FormData();
                data.set("file", file);

                const response = await fetch("/api/files", {
                  method: "POST",
                  body: data,
                });
                const signedUrl = await response.json();
                // setImageUrls((prev) => [...prev, signedUrl]);
                setIsUploading(false);
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default page;
