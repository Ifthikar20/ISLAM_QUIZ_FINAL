"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from 'next/link'

// import Typed from 'typed.js';

export default function Home() {
  const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['<i>Tailwind</i> CSS.', '&amp; React', 'Typescript'],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);


  return (
    <>
      <main>
        {/* point 1 */}

        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              <span className="font-semibold">بِسْمِ اللَّهِ</span> - Welcome to an <span className="font-semibold">Islamic platform</span> filled with knowledge and fun! <br className="hidden lg:block" /> Explore interactive quizzes and challenges for all ages.
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Strengthen your understanding of the deen with engaging activities, quizzes, and resources designed to <br className="hidden lg:block" /> make learning about Islam enjoyable and enriching for everyone.
            </p>

          </div>
          <div className="relative w-full mt-4 lg:mt-0 lg:w-1/2">
            {/* Image */}
            <Image
              src="/svg-islamic.png"
              alt="Islamic Design"
              width={600} // Replace with your image dimensions
              height={400}
              className="rounded-lg"
            />

            {/* Fading Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent animate-fade"></div>
          </div>
        </section>


        {/* point 1 end */}





        <section className="text-gray-600 dark:text-gray-50 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="text-4xl pb-8 mb-4 font-bold text-center">Quiz Topics</h2>
            <div className="flex flex-wrap -m-4">
              {/* Seerah (Before Hijri) Card */}

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">SEERAH</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">Before Hijri</h1>
                  <p className="leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
                    Explore the life of Prophet Muhammad (ﷺ) before the migration to Madinah, including his early years and revelations in Makkah.
                  </p>
                  <Link href="/quiz/before-seerah">
                    <button className="px-6 py-2 bg-gray-900 text-white border border-gray-300 rounded-lg hover:bg-white hover:text-gray-900">
                      Start Quiz
                    </button>
                  </Link>
                  <div className="text-center mt-4 flex flex-col items-center space-y-2">
                    <div className="flex space-x-4">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Difficulty: Easy-Advance
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        30 Questions
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Quiz for:</span>
                      <span className="px-3 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                        Adults
                      </span>
                      <span className="px-3 py-0.5 bg-green-300 text-gray-800 text-xs font-medium rounded-full">
                        Kids
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seerah (After Hijri) Card */}
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">SEERAH</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">After Hijri</h1>
                  <p className="leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
                    Learn about the events after the migration to Madinah, including key battles, treaties, and the establishment of the Islamic state.
                  </p>
                  <Link href="/quiz/after-seerah">
                    <button className="px-6 py-2 bg-gray-900 text-white border border-gray-300 rounded-lg hover:bg-white hover:text-gray-900">
                      Start Quiz
                    </button>
                  </Link>
                  <div className="text-center mt-4 flex flex-col items-center space-y-2">
                    <div className="flex space-x-4">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Difficulty: Intermediate
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        30 Questions
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Quiz for:</span>
                      <span className="px-3 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                        Adults
                      </span>
                      <span className="px-3 py-0.5 bg-green-300 text-gray-800 text-xs font-medium rounded-full">
                        Kids
                      </span>
                    </div>
                  </div>


                </div>
              </div>

              {/* Beginner to Islam Card */}
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">ISLAM 101</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">Beginner to Islam</h1>
                  <p className="leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
                    A foundational quiz for those new to Islam, covering essential beliefs, practices, and the five pillars of Islam.
                  </p>
                  <button className="px-6 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white">
                    Start Quiz
                  </button>
                  
                  <div className="text-center mt-4 flex flex-col items-center space-y-2">
                    <div className="flex space-x-4">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Difficulty: Intermediate
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        30 Questions
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Quiz for:</span>
                      <span className="px-3 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                        Adults
                      </span>
                      <span className="px-3 py-0.5 bg-green-300 text-gray-800 text-xs font-medium rounded-full">
                        Kids
                      </span>
                    </div>
                  </div>

                </div>
              </div>
               {/* Beginner to Islam Card */}
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">ISLAM 101</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">Beginner to Islam</h1>
                  <p className="leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
                    A foundational quiz for those new to Islam, covering essential beliefs, practices, and the five pillars of Islam.
                  </p>
                  <button className="px-6 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white">
                    Start Quiz
                  </button>
                  
                  <div className="text-center mt-4 flex flex-col items-center space-y-2">
                    <div className="flex space-x-4">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Difficulty: Intermediate
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        30 Questions
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Quiz for:</span>
                      <span className="px-3 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                        Adults
                      </span>
                      <span className="px-3 py-0.5 bg-green-300 text-gray-800 text-xs font-medium rounded-full">
                        Kids
                      </span>
                    </div>
                  </div>
                  

                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">ISLAM 101</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">Beginner to Islam</h1>
                  <p className="leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
                    A foundational quiz for those new to Islam, covering essential beliefs, practices, and the five pillars of Islam.
                  </p>
                  <button className="px-6 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white">
                    Start Quiz
                  </button>
                  
                  <div className="text-center mt-4 flex flex-col items-center space-y-2">
                    <div className="flex space-x-4">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Difficulty: Intermediate
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        30 Questions
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Quiz for:</span>
                      <span className="px-3 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                        Adults
                      </span>
                      <span className="px-3 py-0.5 bg-green-300 text-gray-800 text-xs font-medium rounded-full">
                        Kids
                      </span>
                    </div>
                  </div>
                  

                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">ISLAM 101</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">Beginner to Islam</h1>
                  <p className="leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
                    A foundational quiz for those new to Islam, covering essential beliefs, practices, and the five pillars of Islam.
                  </p>
                  <button className="px-6 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-900 hover:text-white">
                    Start Quiz
                  </button>
                  
                  <div className="text-center mt-4 flex flex-col items-center space-y-2">
                    <div className="flex space-x-4">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Difficulty: Intermediate
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        30 Questions
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Quiz for:</span>
                      <span className="px-3 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                        Adults
                      </span>
                      <span className="px-3 py-0.5 bg-green-300 text-gray-800 text-xs font-medium rounded-full">
                        Kids
                      </span>
                    </div>
                  </div>
                  

                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} Islamic Knowledge Platform. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">

            </div>
          </div>
        </section>
      </main>



    </>

  );
}
