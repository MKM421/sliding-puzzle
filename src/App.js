import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"

function App() {
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  const photoData = [
    {
      url: 'http://placekitten.com/408/287'
    },
    {
      url: 'http://placekitten.com/200/138'
    },
    {
      url: 'http://placekitten.com/200/287'
    },
  ]

  return (
    <div className="App">
      <h1>Sliding puzzle</h1>

      <h3>Choose your image </h3>
      <div className="image-list">
        {photoData && photoData.map(item => {
          return (
          <div
            key={item}
            className="image-item"
            style={{ backgroundImage: `url(${item.url})` }}
            onClick={() =>{
              setImgUrl(`${item.url}`)
              window.history.replaceState("", "", updateURLParameter(window.location.href, "img", `${item.url}`))
            }}/>
          );
        })}
      </div>

      <Board imgUrl={imgUrl} />

    </div>
  );
}

export default App;
