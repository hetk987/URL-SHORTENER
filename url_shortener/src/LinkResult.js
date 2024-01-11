import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");

  useEffect(() => {
    if(inputValue.length) {
      setShortenLink(inputValue);
    }
  }, [inputValue]);

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
          >
            <button>Copy</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default LinkResult