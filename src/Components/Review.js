import React from 'react'

const Review = () => {
  document.body.style.background = "#f5f5f5"
  return (
    <body>
      <form data-multi-step class="multi-step-form">
        <div class="card" data-step>
          <h3 class="sub-title">This is step 1</h3>
          <div class="radio-form-group">
            <label for="rating">How would you rate the accessibility accommodations of the selected building?</label>
            <input type="radio" value="value1" name="rating-radio-1" id="rating-radio-1"></input>
            <label for="rating-radio">1</label>
            <input type="radio" value="value2" name="rating-radio-2" id="rating-radio-2"></input>
            <label for="rating-radio-2">2</label>
            <input type="radio" value="value3" name="rating-radio-3" id="rating-radio-3"></input>
            <label for="rating-radio-3">3</label>
            <input type="radio" value="value4" name="rating-radio-4" id="rating-radio-4"></input>
            <label for="rating-radio-4">4</label>
            <input type="radio" value="value5" name="rating-radio-5" id="rating-radio-5"></input>
            <label for="rating-radio-5">5</label>
          </div>
          <div class="form-group">
            <label for="rating-explanation">You can leave a further explanation of your rating here:</label>
            <input type="text" name="rating-explanation" id="rating-explanation"></input>
          </div>
          <div class="form-group">
            <label for="other">Would you like to comment further on specific features?</label>
            <input type="radio" value="value6" name="other" id="other"></input>
            <input type="radio" value="value7" name="other" id="other"></input>
          </div>
          <button type="button" data-next>Next</button>
          <div class="card" data-step="2"></div>
          <div class="card" data-step="3">
              <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </body>
  )
}

export default Review