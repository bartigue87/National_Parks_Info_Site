import "./GuessGame.css";

export default function GuessGame() {
  return (
    <form className="form-container">
      <div className="category-container">
        <div className="question-div">
          <h3>Which National Park is the most visited?</h3>
        </div>
        <div className="answer-div">
          <input
            type="radio"
            name="most-visited"
            id="grand-cnyn"
            className="hidebox"
            value="grand-canyon"
          />
          <label htmlFor="grand-cnyn" className="selection-div incorrect">
            <h4>Grand Canyon</h4>
            <h5 className="answer-h5">Incorect, try again</h5>
            <p className="answer-p">
              Grand Canyon is 2nd with about 4,732,101 visitors in 2022
            </p>
          </label>
          <input
            type="radio"
            name="most-visited"
            id="smoky-mntns"
            className="hidebox"
            value="smoky-mtns"
          />
          <label htmlFor="smoky-mntns" className="selection-div correct">
            <h4>Great Smoky Mountains</h4>
            <h5 className="answer-h5">Correct!</h5>
            <p className="answer-p">
              Great Smoky Mountains tops the list with an astounding 12,937,633
              visitors in 2022
            </p>
          </label>
          <input
            type="radio"
            name="most-visited"
            id="yllwstn"
            className="hidebox"
            value="yellowstone"
          />
          <label htmlFor="yllwstn" className="selection-div incorrect">
            <h4>Yellowstone</h4>
            <h5 className="answer-h5">Incorect, try again</h5>
            <p className="answer-p">
              Surprisingly, Yellowstone is 7th with about 3,290,242 visitors in
              2022
            </p>
          </label>
          <input
            type="radio"
            name="most-visited"
            id="znp"
            className="hidebox"
            value="zion"
          />
          <label htmlFor="znp" className="selection-div incorrect">
            <h4>Zion</h4>
            <h5 className="answer-h5">Incorect, try again</h5>
            <p className="answer-p">
              Zion is 3rd with about 4,692,417 visitors in 2022
            </p>
          </label>
        </div>
      </div>
      <div className="category-container">
        <div className="question-div">
          <h3>Which State has the most National Parks?</h3>
        </div>
        <div className="answer-div">
          <input
            type="radio"
            name="most-parks"
            id="utah"
            className="hidebox"
            value="utah"
          />
          <label htmlFor="utah" className="selection-div incorrect">
            <h4>Utah</h4>
            <h5 className="answer-h5">Incorect, try again</h5>
            <p className="answer-p">Utah has 5 National Parks</p>
          </label>
          <input
            type="radio"
            name="most-parks"
            id="alaska"
            className="hidebox"
            value="alaska"
          />
          <label htmlFor="alaska" className="selection-div incorrect">
            <h4>Alaska</h4>
            <h5 className="answer-h5">Incorect, try again</h5>
            <p className="answer-p">
              Alaska has 8 National Parks, good for 2nd place.
            </p>
          </label>
          <input
            type="radio"
            name="most-parks"
            id="colorado"
            className="hidebox"
            value="colorado"
          />
          <label htmlFor="colorado" className="selection-div incorrect">
            <h4>Colorado</h4>
            <h5 className="answer-h5">Incorect, try again</h5>
            <p className="answer-p">Colorado has only 4 National Parks</p>
          </label>
          <input
            type="radio"
            name="most-parks"
            id="california"
            className="hidebox"
            value="california"
          />
          <label htmlFor="california" className="selection-div correct">
            <h4>California</h4>
            <h5 className="answer-h5">Correct!</h5>
            <p className="answer-p">California has the most with 9 total</p>
          </label>
        </div>
      </div>
    </form>
  );
}
