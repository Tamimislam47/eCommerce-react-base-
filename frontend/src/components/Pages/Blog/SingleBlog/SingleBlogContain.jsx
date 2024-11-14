import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";

import { useLocation } from "react-router-dom";

export default function SingleBlogContain({ ...props }) {
  const { img, date, author, title } = props.blog || {};
  console.log(props);

  return (
    <div className="flex w-full flex-col items-center p-3 sm:w-[80%] lg:w-[70%]">
      <div className="flex w-full flex-col items-center justify-center gap-5 sm:w-[90%] xl:w-[65%]">
        <div className="h-[40vh] w-full rounded-xl sm:w-[90%] xl:w-[80%]">
          <img src={img} className="h-full w-full" alt="" />
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="text-[20px] text-blue">
                <SlCalender />
              </span>
              <span className="text-[12px] sm:text-[17px]"> {date} </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[20px] text-blue">
                <IoPersonSharp />
              </span>
              <span className="text-[12px] sm:text-[17px]"> {author} </span>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <p className="text-xl">
            Psychology principles can significantly enhance the design,
            functionality, and user experience of smart products, making them
            more intuitive, engaging, and appealing to users. A key principle to
            keep in mind is user-centered design, which focuses on understanding
            users' needs, behaviors, and preferences. By creating products that
            align with how users think and behave, designers can ensure a more
            seamless experience. Observing users in real-world contexts and
            incorporating their feedback helps tailor the product to match their
            mental models, increasing satisfaction and engagement. Another
            important consideration is cognitive load reduction. Users tend to
            prefer simple, easy-to-navigate interfaces that don’t overwhelm them
            with information. By minimizing steps and streamlining processes,
            smart products become easier to use, encouraging more frequent
            interaction and greater user satisfaction.
          </p>
          <p className="text-xl">
            Additionally, habit formation plays a crucial role in driving
            engagement. Smart products that align with users' existing habits or
            help build new ones can foster long-term use. Implementing
            reminders, rewards, or personalized tips based on past behavior can
            encourage users to incorporate the product into their daily
            routines. Complementing this is the importance of feedback and
            positive reinforcement. Providing users with clear, immediate
            feedback helps them understand that their actions were successful,
            while rewards and recognition for achievements create a sense of
            accomplishment, encouraging continued use.
          </p>
          <p className="text-xl">
            Emotional design is another critical element in creating a lasting
            bond with users. People are naturally drawn to products that make
            them feel good, so incorporating elements like pleasant colors,
            engaging animations, and supportive messaging can enhance the
            emotional appeal of a product. By eliciting positive emotions, smart
            products can foster stronger connections with users, resulting in
            higher satisfaction and loyalty. Personalization and customization
            also play a significant role in making the user experience more
            relevant and enjoyable. Allowing users to tailor the product to
            their preferences makes them feel valued and increases engagement,
            whether through customized settings, recommendations, or features
            based on past usage.
          </p>
          <p className="text-xl">
            To build trust and ensure continued use, it is essential to focus on
            transparency and privacy. Users must feel secure using the product,
            so clear communication about data handling practices, privacy
            settings, and how their data is used is critical. This transparency
            fosters trust and gives users more control over their experience.
            Additionally, social proof and community building can enhance the
            product’s appeal. People are influenced by the behavior of others,
            so features like reviews, ratings, and social sharing can encourage
            users to engage more deeply with the product. Building a sense of
            community through shared challenges or forums also creates a more
            immersive and social experience.
          </p>
          <p className="text-xl">
            Incorporating gamification elements can significantly boost
            engagement. By integrating game-like features such as levels,
            achievements, and rewards, smart products can make the user
            experience more fun and motivating. These elements tap into users’
            intrinsic desire for accomplishment and competition, leading to
            increased interaction. Finally, progress indicators provide users
            with a visual representation of their achievements, whether it’s
            completing a task or meeting a goal. Seeing their progress helps
            users stay motivated and encourages them to continue using the
            product to reach their objectives.
          </p>
          <p className="text-xl">
            By applying these psychology-based principles, smart products can
            become more user-friendly, emotionally engaging, and effective in
            fostering long-term user loyalty and interaction. Understanding and
            integrating the psychological drivers behind user behavior can
            significantly improve the overall product experience.
          </p>
        </div>
      </div>
    </div>
  );
}
