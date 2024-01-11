import { nanoid } from 'nanoid';
import { getDatabase,ref, set } from 'firebase/database'

function InputURL({ setInputValue }) {

    var longURL = ''
    var errors = [];
    var errorMessage = {};
    const setValue = (value) => {
        longURL = value
    }

    const handleClick = () => {
        console.log('HERE')
        setInputValue(generateShortLink(longURL));
        longURL = ''

    }

    function isRealURL(string) {
        try {
          new URL(string);
          return true;
        } catch (err) {
          return false;
        }
      }
      

    function validateURL(url) {
        if (url.length===0){
            errors.push("longURL");
            errorMessage["longURL"] = "Please enter your URL";
            console.log("Please enter your URL")
            return false;
        }
        else if(!isRealURL(longURL)){
            errors.push("longURL");
            errorMessage["longURL"] = "Please a URL in the form https://www....";
            console.log("Please a URL in the form https://www....")
            return false;
        }
        else{
            return true;
        }
    }

    function generateShortLink() {
        if (validateURL(longURL)) {
            var generatedKey = nanoid(5);
            var generateURL = "127.0.0.1:5000/" + generatedKey;

            const db = getDatabase()
            set(ref(db, '/' + generatedKey), {
                
                generatedKey: generatedKey,
                longURL: longURL,
                generateURL: generateURL
            }).catch((e) => {
                console.log('FAILED')
            })
            return generateURL
        }
        else{
            console.log("ERROR")
        }

    }

    return (
        <div className='inputContainer'>
            <h1>URL <span>Shortener</span></h1>
            <div class="container">
                <input
                    id="input"
                    type="input"
                    class="inputfield"
                    placeholder="Your URL"
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={handleClick} type="button-1" class="btn">Submit</button>
            </div>
        </div>
    )
}

export default InputURL
