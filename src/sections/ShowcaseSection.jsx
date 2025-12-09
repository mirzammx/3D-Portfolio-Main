import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="images/project1.png" alt="SaaS AI Agent Platform" />
            </div>
            <div className="text-content">
              <h2>
                SaaS AI Agent Platform - AI-Powered Video Calls with Custom Agents
              </h2>
              <p className="text-white-50 md:text-xl">
                Platform for AI-powered video calls with summaries, transcripts, and post-call playback. Built with Next.js, React, and Better Auth.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="images/project2.png"
                  alt="Enterprise FAQ Automation"
                />
              </div>
              <h2>Enterprise FAQ Automation - RAG-Based Q&A System</h2>
              <p className="text-white-50">Python, LangChain, FAISS, Streamlit</p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="images/project3.png" alt="DineDash Restaurant System" />
              </div>
              <h2>DineDash - Full-Stack Restaurant Management</h2>
              <p className="text-white-50">Spring Boot, Thymeleaf, MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
