import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const About = () => {
  return <div className="px-5 flex flex-col ">
    <h2 className="text-center md:text-left md:text-2xl font-semibold text-xl">About JustBuy</h2>
    <article>
      <h3 className="font-medium text-lg">Our story</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe quia eos, quibusdam, itaque provident non fuga sequi ipsam recusandae expedita veniam numquam. Et dolorum qui error dolor rem, quia aspernatur sapiente cumque quae pariatur hic impedit aperiam natus earum eveniet molestiae rerum nulla, voluptatibus eos totam praesentium ea harum!</p>
    </article>
    {testimonial && <article>
      <h3>Customer Testimonials</h3>
      <div>
        <h4>{username}</h4>
        <p>{date}</p>
        {}
        <p>{comment}</p>
        <div className="flex gap-6">
          <button><FaThumbsUp /></button>
          <button><FaThumbsDown /></button>
        </div>
      </div>
    </article>}
  </div>;
};

export default About;
