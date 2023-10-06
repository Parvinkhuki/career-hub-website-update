import user from '../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero bg-cover w-full "style={{ backgroundImage: 'url("../assets/images/user.png")' }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={user} className="w-[60%] rounded-lg" />
          <div className='text-center lg:text-left w-full'>
            <h1 className="text-5xl font-bold ">One Step Close <br /> to Your <br />
        <span className='text-[darkblue]'>Dream Job</span></h1>
            <p className="py-6">A career involves continuous learning and skill development. As individuals progress in their career, they typically acquire new knowledge, skills, and expertise related to their chosen field. This growth can come from formal education, on-the-job training, workshops, and self-directed learning.</p>
            <button className="btn btn-primary bg-[darkblue] text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;