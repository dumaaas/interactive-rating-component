import React, {useState} from 'react';
import starIcon from './icon-star.svg';
import illustration from './illustration-thank-you.svg'

function App() {
  const [isSubmitted, setIsSubmittet] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <div className="App bg-very-dark-blue h-screen w-screen flex justify-center items-center">
      <div className="bg-dark-blue p-[30px] rounded-[20px] max-w-[375px] mx-[30px]">
      {!isSubmitted && 
        <div className="flex gap-[25px] flex-col items-start ">
          <div className="flex items-center rounded-full bg-light-grey bg-opacity-[0.15] p-[14px]">
            <img src={starIcon} alt="icon"/>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-white text-[26px] font-medium">
              How did we do? Samo radi testa
            </h1>
            <p className="text-[15px] text-medium-grey">
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="flex gap-[6px] items-center justify-between w-full">
            <span style={{background: rating === 1 ? 'hsl(25, 97%, 53%)' : '', color: rating === 1 ? 'white' : '',}} onClick={() => setRating(1)} className="hover:bg-opacity-100 hover:text-white cursor-pointer flex items-center justify-center rounded-full bg-light-grey bg-opacity-[0.15] w-[45px] h-[45px] text-[15px] text-medium-grey">1</span>
            <span style={{background: rating === 2 ? 'hsl(25, 97%, 53%)' : '', color: rating === 2 ? 'white' : '',}} onClick={() => setRating(2)} className="hover:bg-opacity-100 hover:text-white cursor-pointer flex items-center justify-center rounded-full bg-light-grey bg-opacity-[0.15] w-[45px] h-[45px] text-[15px] text-medium-grey">2</span>
            <span style={{background: rating === 3 ? 'hsl(25, 97%, 53%)' : '', color: rating === 3 ? 'white' : '',}} onClick={() => setRating(3)} className="hover:bg-opacity-100 hover:text-white cursor-pointer flex items-center justify-center rounded-full bg-light-grey bg-opacity-[0.15] w-[45px] h-[45px] text-[15px] text-medium-grey">3</span>
            <span style={{background: rating === 4 ? 'hsl(25, 97%, 53%)' : '', color: rating === 4 ? 'white' : '',}} onClick={() => setRating(4)} className="hover:bg-opacity-100 hover:text-white cursor-pointer flex items-center justify-center rounded-full bg-light-grey bg-opacity-[0.15] w-[45px] h-[45px] text-[15px] text-medium-grey">4</span>
            <span style={{background: rating === 5 ? 'hsl(25, 97%, 53%)' : '', color: rating === 5 ? 'white' : '',}} onClick={() => setRating(5)} className="hover:bg-opacity-100 hover:text-white cursor-pointer flex items-center justify-center rounded-full bg-light-grey bg-opacity-[0.15] w-[45px] h-[45px] text-[15px] text-medium-grey">5</span>
          </div>
          <button disabled={!rating} onClick={() => setIsSubmittet(true)} className="hover:bg-white hover:text-primary py-[9px] tracking-widest font-normal w-full rounded-[20px] uppercase text-white text-[15px] bg-primary">
            Submit
          </button>
        </div>
      }    
      {isSubmitted && 
        <div className="flex gap-[25px] flex-col items-center justify-center py-[20px]">
          <img src={illustration} alt="illustration"/>
          <p className="text-primary text-[15px] text-center px-[18px] rounded-[20px] py-[4px] bg-light-grey bg-opacity-[0.15]">You selected {rating} out of 5</p>
          <div className="flex flex-col text-center gap-[10px]">
            <h1 className="text-white text-[26px] font-medium">
              Thank you!
            </h1>
            <p className="text-[15px] text-medium-grey">
              We appreciate you taking the time to give a rating.
              If you ever need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      }    
      </div>
    </div>
  );
}

export default App;
