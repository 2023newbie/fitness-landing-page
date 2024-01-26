import { Cl } from "."

const Class = ({ name, image, description }: Cl) => {
  return (
    <div className="relative min-w-96 h-full group text-slate-50">
      <div className="group-hover:opacity-100 group-hover:bg-primary-500/80 transition duration-300 flex-col justify-center items-center flex opacity-0 absolute top-0 bottom-0 left-0 right-0 p-4">
        <div className="mb-4 font-semibold text-xl">{name}</div>
        <div>{description}</div>
      </div>
      <img className="w-full" src={image} alt={name} />
    </div>
  )
}

export default Class