import type { IMenuCardProps } from '../types/menu';

export default function MenuCard(props: IMenuCardProps) {
  const priceFixed = props.price.toFixed(2).replace('.', ',');
  return(
    <div className="p-2 border rounded-lg border-slate-600 relative flex flex-col shadow-md min-h-[80px] lg:min-h-[130px]">
        <h2 className="font-medium text-lg tracking-wide mb-2">
          {props.name}
        </h2>
        <span className='font-light text-sm tracking-wide'>
          {props.description}
        </span>
      <div className="absolute right-2 top-2">
        <span className='font-extralight'>
          R${priceFixed}
        </span>
      </div>
    </div>
  )
}