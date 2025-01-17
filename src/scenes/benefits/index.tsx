import React from 'react'
import { SelectedPage,benefitType } from '@/shared/types';
import HText  from '@/shared/HText';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import {motion} from 'framer-motion'
import Benefit from './Benefit';
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
// type benefitType = {
//     icon: JSX.Element;
//     title:string;
//     description:string;
// }
const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}
const benefits: Array<benefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
     {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
     {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]

const Benefits = ({setSelectedPage}: Props) => {
 return <section id="benefits"
 className='mx-auto min-h-full w-5/6 py-20'
 >
<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
    {/* HEADER */}
<motion.div  initial="hidden" 
                whileInView="visible" 
                viewport={{once: true, amount: 0.5}} 
                transition={{duration: 0.5}} 
                variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
                 className='md:w-3/5 md:my-5'>
    <HText>MORE THAN JUST A GUM</HText>
    <p className='my-5 text-sm text-grey-500'>We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.</p>
</motion.div>

{/* BENEFITS */}
<motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{once:true,amount:0.5}}
 variants={container}
 className='md:flex items-center justify-between gap-8 mt-5'>
    {benefits.map((benefit:benefitType) =>
        <Benefit
        key={benefit.title}
        title={benefit.title} 
        description={benefit.description} 
        icon={benefit.icon}
        setSelectedPage={setSelectedPage}/>
    )}
</motion.div>
{/* GRAPHICS AND DESCRIPTION */}
<div className='mt-16 item-center justify-between gap-20 md:mt-28 md:flex'>
    {/* GRAPHICS */}
    <img className='mx-auto' src={BenefitPageGraphic} alt="benefits-page-graphic"/>
    <div>
        {/* Title */}
        <div className='relative'>
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
            <motion.div initial="hidden" 
            whileInView="visible" 
            viewport={{once:true,amount:0.5}} 
            transition={{duration:0.5}} 
            variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}}}>
                <HText>MILLIONS OF HAPPY MEMBERS GETTING  <span className='text-primary-500'>FIT</span></HText>
            </motion.div>
          </div>
        </div>
        {/* DESCRIPTION */}
        <motion.div initial="hidden" 
            whileInView="visible" 
            viewport={{once:true,amount:0.5}} 
            transition={{delay:0.2, duration:0.5}} 
            variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}}}>
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
        </motion.div>
        <div className='relative mt-16'>
         <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
         </div>
        </div>
    </div>
</div>
</motion.div>
 </section>
}

export default Benefits