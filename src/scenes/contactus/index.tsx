import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Graphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { type SyntheticEvent } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: SyntheticEvent) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="bg-white pb-32 pt-24">
      <motion.section
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="container"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="mb-6 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ratione
            dolorem ipsam explicabo fugiat, neque harum dolores, sed ad deleniti
            mollitia porro repellendus nobis commodi voluptatibus quaerat
            obcaecati iusto veritatis!
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 flex flex-col md:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex gap-8 md:w-3/5"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/3c7e213b025dc8a40fb4d32100d30d00"
            >
              <input
                type="text"
                className="mb-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && "This field is required."}
                  {errors.name.type === 'maxLength' && "Max length is 100 characters."}
                </p>
              )}

              <input
                type="email"
                className="mb-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' && "This field is required."}
                  {errors.email.type === 'pattern' && "You must provide a valid email address."}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                className="mb-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="MESSAGE"
                {...register('message', {
                  required: true,
                  maxLength: 2000
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === 'required' && "This field is required."}
                  {errors.message.type === 'maxLength' && "Max length is 2000 characters."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-300 hover:text-white"
              >SUBMIT</button>
            </form>
          </motion.div>

          <motion.div className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img className="relative z-20 w-full" src={Graphic} alt="graphic" />

            <div className="absolute -right-16 -bottom-28 hidden text-[160px] font-bold tracking-widest text-gray-50 md:block">
              EVOLVE
            </div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default ContactUs;
