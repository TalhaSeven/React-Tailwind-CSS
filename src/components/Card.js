import React from 'react'

const Card = () => {
  return (
    <div>
       <div className="flex justify-center items-center flex-col bg-backflex h-[94.5vh] bg-gradient-to-r from-blue-500 to-purple-700 text-white">
        <h2 className="mb-4 text-3xl font-bold text-white">Tailwind Lesson</h2>
        <div className="card flex flex-col bg-cardBack sm:w-1/2  rounded-3xl p-6">
          <div className="bg-buttonBack1 h-16 w-16 rounded-full flex justify-center items-center">
            <svg
              class="fill-cyan-500 hover:fill-cyan-700"
              xmlns="http://www.w3.org/2000/svg"
              height="2.5em"
              viewBox="0 0 512 512"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          </div>
          <div className="text-textColor">
            <h2 className="font-bold text-2xl mb-4">React Tailwind CSS!</h2>
            <p >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aut
              inventore magni hic, nulla praesentium laboriosam facilis vitae
              fuga illum facere et alias explicabo? Aspernatur sunt maiores
              accusantium deserunt eligendi.
            </p>
          </div>
          <div className="flex justify-between m-4">
            <button className="bg-buttonBack1 buttons">1</button>
            <button className="bg-buttonBack1 buttons">2</button>
            <button className="bg-buttonBack1 buttons">3</button>
            <button className="bg-buttonBack2 buttons">4</button>
            <button className="bg-buttonBack3 buttons">5</button>
          </div>
          <button className="text-buttonBack3 bg-buttonSubmit text-lg w-full p-3 rounded-full flex justify-center items-center ">SUBMIT</button>
        </div>
      </div> 
    </div>
  )
}

export default Card
