import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section className='bg-white'>
      <motion.section
        id="benefits"
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className='container'
      >
        123
      </motion.section>
    </section>
  )
}

export default ContactUs