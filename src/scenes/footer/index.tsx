import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion'
import Logo from '@/assets/Logo.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <section id='footer' className='bg-primary-100'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className='container flex flex-col md:flex-row justify-between gap-12 py-16'
      >
        <div className='flex flex-col gap-4 flex-1 md:text-center'>
          <img className='w-24 md:inline-block md:mx-auto' src={Logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere fugiat delectus praesentium, aliquam omnis magni cumque officia accusantium sint!</p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>

        <div className='flex flex-col gap-4 flex-1 md:text-center'>
          <div className='font-bold'>Links</div>
          <a href="#">Lorem ipsum dolor sit amet.</a>
          <a href="#">Lorem ipsum dolor sit amet.</a>
          <a href="#">Lorem ipsum dolor sit amet.</a>
        </div>

        <div className='flex flex-col gap-4 flex-1 md:text-center'>
          <div className='font-bold'>Contact Us</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!</p>
          <div>(333)425-6825</div>
        </div>
      </motion.div>
    </section>
  )
}

export default Footer