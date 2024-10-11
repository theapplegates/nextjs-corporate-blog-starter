import { FunctionComponent } from "react";

export const FullWidthHero: FunctionComponent<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="pt-16 pb-12 ">
      <h1 className="text-6xl font-semibold text-center my-6">{title}</h1>
      <div className="text-center text-balance max-w-xl mx-auto text-lg">
        {description}
      </div>
    </div>
  );
};
