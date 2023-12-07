import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogHome(props) {
  const navigate = useNavigate();
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const blogs = [{ id: 1, title: "My first blog" }];
  if (params.id < 1 || params.id > blogs.length)
    return (
      <div className="m-5 text-center text-3xl text-light-theme">
        Blog Unavailable
      </div>
    );
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center overflow-x-hidden overflow-y-scroll">
      {!params.id ? (
        <div className="w-[600px]">
          <p className={`m-5 text-3xl text-light-theme`}>My Blogs</p>
          <div className="flex flex-col items-start">
            {blogs.map((blog, i) => (
              <p
                key={blog.id}
                onClick={() => {
                  navigate(`/blogs/${blog.id}`);
                }}
                className="cursor-pointer duration-100 hover:scale-105"
              >
                {i + 1 + ". " + blog.title}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <>
          <p className="text-slate-100 m-3 text-3xl">
            {blogs[params.id - 1].title}
          </p>
          <div className="text-white container m-5 p-5 text-center text-lg">
            Hello guys It's me your coder kallu XD.
            <br /> For those of you who don't know me I am Kalyan and my insta
            id is coder_kallu, kallu being a short name for kalyan.
            <br />
            It's a name inspired from the movie DJ tillu one of my fav tollywood
            films.
            <br />I am a guy who loves to code. Let me tell you a little story
            that will give some context about what type of guy I am.
            <br />
            Now who doesn't love to bunk classes and have fun during college
            right? This story is one of those moments when i decided to bunk
            class
            <br />I was in the 4th semester of college and it was data
            structures and algorithms lab.
            <br />
            <br />I have learned about binary trees on that day and i was so
            excited to finally implement the binary tree data structure from
            scratch using c<br />I was coding and coding and the time for the
            lab ran out. I loved it so much that i couldn't stop coding.
            <br />
            Fortunately Whenever we code programs in our college, we connect to
            a college's ubuntu server using our accounts and save our programs,
            <br />
            in that server so I can access it from anywhere.
            <br />
            So what now? I have bunked all the classes for that day, went
            straight to the library and continued coding for the rest of the
            day.
            <br />
            And this is not the only time. I used to bunk classes and go to
            library and try to solve algorithmic questions all the time.
            <br />
            The feeling i used to get once i figured the solution is just
            SWARGAM.
            <br />I had only 1 goal in college. To get a remote job for 12 lpa
            and enjoy life doing the things i love i.e coding, learning new
            things
            <br />
            and most importantly playing games and guess what? I was living the
            same exact life I wanted 3 years ago
            <br />I bought a PS 5 I was a coder at day and gamer at night. Life
            was beautiful.
            <span className="flex h-screen items-center justify-center">
              The End
            </span>
            <br />
            Except it is not the end. But the beginning.
            <br />I don't know when exactly things started going south. Coding
            was not the fun activity anymore.
            <br />
            The feeling called "SWARGAM" is no longer a thing.
            <br /> Coding became boring.
            <br /> I had no energy to code. Even the simplest of coding tasks
            feels like the biggest task ever.
            <br />I have questioned myself 1000s of times what's happening?
            what's wrong with me?
            <br />
            This was the life that i dreamed of and now it's here why am i not
            happy?
            <br />
            At this point of time I have been coding daily for the past 3 years.
            I was so burnt out and decided that I needed a break.
            <br />
            This was july of 2023. The job market is so down at this point of
            time and unemployment is a serious issue
            <br /> And I made the most logical decision ever to take a break
            from coding. <br />
            The first 2 months after leaving my job, I don't even know how time
            flew by I was so happy,
            <br /> I had all the time and money in the world. I was partying
            traveling places and had the best time of my life.
            <br />
            Here is my fav picture from my recent trip to kerala. Hehe the image
            was sooo good that i had to share it:
            <img
              className="h-6/12 lg:h-3/12 m-10 w-6/12 lg:w-3/12"
              src={require("../../assets/kalyanblog1.jpg")}
            />
            I was listening to some LO-FI songs chilling on the top of the
            mountains, touching those clouds.
            <br />
            And suddenly I have realized that i have been jobless since the past
            2 months. <br />I decided that i have taken a long enough break and
            it would be really ugly to ask money from your parents at this point
            <br />
            of time in life and here I am today more motivated and passionate
            than ever to get a job XD
            <br />
            <span className="h-20" />
            So what i wanted to say was even if you love something so much that
            you can't live without it,
            <br /> You still need to take breaks once in a while.
            <br /> This break is definitely one of the best decisions I have
            taken in my life.
            <br /> I even got to experience unemployment XD. JK.
            <br />I don't know how to end this blog or article or whatever this
            thing my brain randomly decided to do is called.
            <br /> I guess I'll just say byeee..... until my brain decides to do
            a part 2
          </div>
        </>
      )}
    </div>
  );
}
