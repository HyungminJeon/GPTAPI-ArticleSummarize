import React from "react";

import { avatar_profile } from "../assets";
import { name_logo } from "../assets";

const MainPage = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <span className="flex flex-row" >
        <button onClick={() =>
            window.open("https://www.threads.net/@julianhyungmin", "_blank")
          }>
        <img src={avatar_profile} className='w-28 ' />
        <span className="flex flex-row">
        <img src={name_logo} className='h-14' />
        </span>
        </button>
        </span>
        
      </nav>
      <br/>
      <div className="w-full flex"> {/* Add this line */}
        <span className="flex flex-col mr-20"> {/* Add margin-right to this span */}
        <br/>
        <br/>
        <br/>
        <br/>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/HyungminJeon/", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
        <br/>
        <button
          type='button'
          onClick={() =>
            window.open("https://open.spotify.com/user/31b5xhl7ea4zf64d43kfujchklym", "_blank")
          }
          className='spotify_btn'
        >
          Spotify
        </button>
        <br/>
        </span>

        <div className="flex-col ml-24"> {/* Add this line */}
          <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='blue_gradient '>OpenAI GPT-4</span>
          </h1>
          <h2 className='desc'>
            Simplify your reading with an open-source article summarizer
            that transforms lengthy articles into clear and concise summaries
          </h2>
        </div>
      </div> {/* Add this line */}

      {/* <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2> */}
    </header>
  );
};

export default MainPage;
