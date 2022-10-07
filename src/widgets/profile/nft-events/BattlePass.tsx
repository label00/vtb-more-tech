import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BattlePass.css';
import { Calendar, Star } from 'react-feather';

type Props = {};
export const BattlePass = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex font-bold items-center gap-2 text-sm">
          <Star size={14}/> NFT Событие месяца
        </div>

        <div className="flex font-bold items-center gap-2 text-sm">
          <Calendar size={14}/> 21 день осталось
        </div>
      </div>

      <div className="bg-slate-200">
        <Slider arrows {...settings}>
          <div>
            <h3>2</h3>
          </div>

          <div>
            <h3>3</h3>
          </div>

          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};
