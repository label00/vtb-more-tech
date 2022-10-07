import { H5 } from 'src/shared/ui';

type NftCardProps = {
  img: string;
  title: string;
  price: string;
  icon: string;
};

export const NftCard = (props: NftCardProps) => {
  return (
    <div className="bg-[#F8F8F8] rounded-xl p-2.5">
      <img className="rounded-xl" height={237} src={props.img} />
      <div>
        <H5 className="my-5">{props.title}</H5>
        <div className="flex items-center gap-1.5 border-t border-t-gray-300/20 pt-3 pb-3">
          <img src={props.icon} />
          <span className="text-slate-400 text-xs font-semibold">{props.price}</span>
        </div>
      </div>
    </div>
  );
};
