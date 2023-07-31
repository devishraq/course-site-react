import Button from "./UI/Button";
import constants from "../../constant";

export default () => (
 <div className='h-screen w-full flex'>
  <div className=' w-2/3 flex items-center p-12'>
   <div>
    <div>
     <h1 className={constants.hero.heading.styles}>
      {constants.hero.heading.content}
     </h1>
     <p className={constants.hero.subheading.styles}>
      {constants.hero.subheading.content}
     </p>
    </div>
    <div className='mt-5 flex'>
     <Button type='Primary'>Get Started</Button>
     <Button type='Secondary'>Learn more</Button>
    </div>
   </div>
  </div>
  <div className='w-1/3 flex justify-end'>
   <img src='../assets/HeroPhoto.avif' className='h-full ' alt='hero image' />
  </div>
 </div>
);
