import { achievements } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Achievements & Certifications"
          sub="🏆 Recognition and professional development"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {achievements.map((achievement, index) => (
            <GlowCard card={achievement} key={index} index={index}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <p className="font-bold text-lg">{achievement.title}</p>
                  <p className="text-white-50">{achievement.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
