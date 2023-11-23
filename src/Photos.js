import React, { useState } from "react";
import axios from "axios";

export default function Photos(props) {
  const [dataPhotos, setDataPhotos] = useState(null);
  function handlePhotos(response) {
    setDataPhotos(response.data.photos);
  }
  let apiKeyPexels = "nzwTr9hkNm6WGwJjgvrFIMAfgafT0R7kM429Qo6ltCBaa7G3EUPYnMjp";
  let headers = { Authorization: `${apiKeyPexels}` };
  let apiUrlPexels = `https://api.pexels.com/v1/search?query=${props.word}&per_page=9`;
  axios.get(apiUrlPexels, { headers: headers }).then(handlePhotos);

  if (dataPhotos) {
    return (
      <div className="section photo-gallery">
        {dataPhotos.map(function (showPhotos, index) {
          return (
            <div key={index}>
              <a
                href={showPhotos.src.original}
                target="_blank"
                rel="noreferrer"
              >
                <img src={showPhotos.src.tiny} alt={showPhotos.alt} />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}