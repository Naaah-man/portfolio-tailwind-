import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return <section className="bg-white py-20" id="about">
    <div className="align-element grid md:grid-cols-2 items-center gap-16">
      <img src={aboutSvg} className="w-full h-64"/>
      <article>
        <SectionTitle text="About Myself" />
        <p className='text-slate-600 mt-8 leading-loose'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At similique perspiciatis eveniet sequi. Minus, suscipit quam corporis iure eos voluptatibus eveniet officiis vitae voluptatum harum modi molestiae tenetur eius. Vitae?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto corrupti ad unde eveniet totam et veniam maiores fuga, deserunt provident temporibus rem sit aperiam id officia? Vero animi nulla assumenda.
          
        </p>

      </article>
    </div>
  </section>;
};
export default About;
