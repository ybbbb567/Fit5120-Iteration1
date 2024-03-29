import React, { useEffect } from "react";
import { Button, Img } from "components";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import { useNavigate } from "react-router-dom";


<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>;

const HomepagePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Daily Fraud Fight"
  }, []);


  return (


    <>
      <Navigationbar fixed />
      <main className="navbar_color">


        <section className=" top-20 header relative pt-16 items-center flex h-full max-h-960-px">

          <div className="z-10 container relative mx-auto">
            <div className=" items-center flex flex-wrap">
              <div className=" w-full lg:w-11/12 px-6 ml-auto mr-auto text-center">
                <div className="pr-10">
                  <h3 className="text-white font-semibold text-3xl">
                    Let's check the security of the website you will browse <br></br>
                  </h3>
                  <p className="mt-4  text-base leading-relaxed text-white">
                    <br></br>
                    {/* The internet makes it easy for scammers to trick
                    people into <br></br> */}
                    Scams for money and personal information are common on the Internet<br></br>
                    {/* giving away their money and personal information */}
                  </p>
                  <div className="mt-10">

                    <Button className="btn cta bg"
                      onClick={() => navigate("/searchpage")}
                    >
                      Start Website Check
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute top-0 w-full height-170 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('images/Homepage_mainpicture.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="h-full w-full  absolute opacity-40 bg-black"
            ></span>
          </div>

        </section>

        <section className="top-14 pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
          </div>

          <div className="justify-around container mx-auto px-4 pt-72 ">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">

              </div>
            </div>
            <div className=" flex flex-wrap mt-12 justify-around">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-credit-card fa-beat fa-lg"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Card Fraud
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  In 2021-2022, 11.5% of people between 15-24 years experienced card fraud,
                  and that is higher than any other age groups.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-user-secret fa-lg"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Identity Theft
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  18600 people between 15-24 years experienced identity theft in 2021-2022.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-regular fa-globe fa-lg style=" color="#8a0ec4"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Online impersonation
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  18% of people between 15-24 years experienced online impersonation in 2021-2022, which is higher than other age groups in 2021-2022
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="relative py-20">


          <div className="container mx-auto px-4">
            <div className="items-center flex ">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Img
                  src="images/img_quiz.png"
                  className="md:flex-1 h-[663px] sm:h-auto object-cover w-auto md:w-full"
                  alt="quiz"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">

                  <h3 className="text-3xl font-semibold text-blueGray"> Knowledge Quiz
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed ">
                    {/* Here&#39;s a simple test of your knowledge of phishing
                    scams, and online shopping fraud. Take this quiz to find
                    out how to protect yourself from internet fraud. */}
                    Simply test of your knowledge of phishing scams
                    and online shopping frauds. Take some quizzes to 
                    find out how to protect yourself from the internet fraud.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <Button className="btn cta bg"

                          onClick={() => navigate("/quiz")}
                        >
                          Start Quiz
                        </Button>
                      </div>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">


          <div className="container mx-auto px-4">
            <div className="items-center flex ">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">

                  <h3 className="text-3xl font-semibold text-blueGray"> Email Risk Identification
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed ">
                    {/* Email Detector identifies scam texts by analyzing their content.
                    It detects suspicious links, requests for personal info, and common scam phrases.
                    This helps users stay safe from fraud. */}
                    Email Detector identifies scam by analyzing text content 
                    with suspicious links, personal information, or common scam phrases.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <Button className="btn cta bg"

                          onClick={() => navigate("/smsdetector")}
                        >
                          Start Email Detect
                        </Button>
                      </div>

                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Img
                  src="images/Spam.png"
                  className="md:flex-1 h-[663px] sm:h-auto object-cover w-auto md:w-full"
                  alt="quiz"
                />
              </div>

            </div>
          </div>
        </section>



        <section className="relative py-20">


          <div className="container mx-auto px-4">
            <div className="items-center flex ">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Img
                  src="images/Map.png"
                  className="md:flex-1 h-[663px] sm:h-auto object-cover w-auto md:w-full"
                  alt="quiz"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">

                  <h3 className="text-3xl font-semibold text-blueGray"> Scam Happened in Australia
                  {/* A Map to visualize the number of people who have fallen victim to scams */}





                  </h3>
                  <p className="mt-4 text-lg leading-relaxed ">
                    {/* The scam victim map visualizes the number of scam victims in a region. It collects data from various sources to display the concentration of victims.
                    The tool is useful for individuals to prevent scams. It provides insights to make informed decisions to protect oneself and the community. */}
                    a Map to show the number of people fallen victim to scams in different areas of Australia
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <Button className="btn cta bg"

                          onClick={() => navigate("/map")}
                        >
                          View Map
                        </Button>
                      </div>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="relative py-20">


<div className="container mx-auto px-4">
  <div className="items-center flex ">
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">

        <h3 className="text-3xl font-semibold text-blueGray"> 
        {/* What you need to know about online scam */}
        Relative Information on Online Scam
        
        </h3>

        <p className="mt-4 text-lg leading-relaxed ">
        {/* The  section is where fraud relative information is provided for users. 
        It not only has the correct reporting channels for fraud, 
        but also has links to relevant courses and lectures provided by the government 
        and anti-fraud-related organizations, so that people can 
        learn about different types of fraud and how to avoid them by accessing those contents. */}
        Relative fraud information provided for users on efficient reporting fraud channels, 
        and links about relevant courses certified by the government 
        and anti-fraud-related organizations to help people learn about fraud types and how to get rid of them
        </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <Button className="btn cta bg"

                onClick={() => navigate("/information")}
              >
                Start Information Check
              </Button>
            </div>

          </li>
        </ul>
      </div>
    </div>

    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <Img
        src="images/Information.png"
        className="md:flex-1 h-[663px] sm:h-auto object-cover w-auto md:w-full"
        alt="information"
      />
    </div>

  </div>
</div>
</section>




<section className="relative py-20">


          <div className="container mx-auto px-4">
            <div className="items-center flex ">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Img
                  src="images/Simulation.png"
                  className="md:flex-1 h-[663px] sm:h-auto object-cover w-auto md:w-full"
                  alt="simulation"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">

                  <h3 className="text-3xl font-semibold text-blueGray"> Simulate a Real-Life Scam Scenario

                  </h3>
                  <p className="mt-4 text-lg leading-relaxed ">
                  Our simulation is based on ChatGPT as an intelligent simulated dialogue designed by an anonymous fraudster. 
                  The aim is to help users identify some real or fictitious fraud instances, so as to increase their vigilance when encountering fraudulent conversations in the real world and avoid fraud crises.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <Button className="btn cta bg"

                          onClick={() => navigate("/simulate")}
                        > Start simulation</Button>
                      </div>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>






      </main>
      <Footer />


    </>
  );
};

export default HomepagePage;
