import { AdaptiveImage } from "@/components/adaptive-image";
import { BlurryCircle } from "@/components/blurry-circle";
import timetrackerLight from "public/time-tracker-light.png";
import timetracker from "public/time-tracker.png";

export function SectionThree() {
  return (
    <section className="relative">
      <div className="border border-border rounded-2xl container bg-white dark:bg-[#121212] p-6 md:p-10 md:pb-0">
        <div className="flex flex-col md:space-x-12 md:flex-row">
          <div className="md:mt-6">
            <h3 className="font-medium text-2xl	mb-4">
              Time track your projects
            </h3>

            <p className="text-[#878787] mb-4">
              Effortlessly boost productivity and collaboration with our
              advanced <br />
              time tracking solution: gain insightful project overviews and
              foster
              <br />
              seamless collaboration amongst your team for optimal efficiency
              and
              <br />
              success.
            </p>

            <div className="flex space-x-2 items-center mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={13}
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
                />
              </svg>
              <span className="text-[#878787]">Live time tracking</span>
            </div>
            <div className="flex space-x-2 items-center mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={13}
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M6.55 13 .85 7.3l1.425-1.425L6.55 10.15 15.725.975 17.15 2.4 6.55 13Z"
                />
              </svg>
              <span className="text-[#878787]">Share with your clients</span>
            </div>
          </div>

          <AdaptiveImage
            darkSrc={timetracker}
            lightSrc={timetrackerLight}
            height={400}
            className="-mb-[24px] md:-mb-[1px] !ml-auto object-contain mt-8 md:mt-0"
            quality={100}
          />
        </div>
      </div>
      <BlurryCircle className="absolute -top-[50px] -left-[100px] bg-[#F59F95]/5 -z-10" />
      <BlurryCircle className="absolute -bottom-[50px] -right-[100px] bg-[#A1F5CD]/5 -z-10" />
    </section>
  );
}
