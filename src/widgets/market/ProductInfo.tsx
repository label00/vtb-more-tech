import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const ProductInfo = () => {
  return (
    <div className={style.containerGen}>
      <div className={style.item1}>
        <div className={style.container}>
          <div className={style.block1}>
            {/* @ts-ignore*/}
            <Link to={-1} className={style.textOne}>Назад</Link><br/>
            <hr className={style.line}/>
          </div>
          <div className={style.block3}>
            <img
              src="https://sun1-25.userapi.com/impg/kx5cWZNC3uIeeeK5LoswpCdFEtTdIDHjFlphVQ/CYv9LF_KZeY.jpg?size=483x483&quality=95&sign=42c48d7021e31aaba8f6330d0650478f&type=album"
              className={style.imgOne}
            />
            <div>
              <div className={style.blockedOne}>
                <div>
                  <img
                    src="https://sun9-20.userapi.com/impg/VdVD0IfW-1boPIrdtuu_5hA0YUYGCNGKQkuW7g/i25x_GnmRrU.jpg?size=114x114&quality=95&sign=3394a20180154e5f41d4dad009e20330&type=album"
                    className={style.imgTwo}
                  />
                </div>
                <div>
                  <img
                    src="https://sun9-58.userapi.com/impg/PK2PTpvoobOQgvg5CT1wqYXPp99ah8_gD13ZFQ/_5oACCdEclI.jpg?size=114x114&quality=95&sign=66f6bfa54b425a13715d22bcb4e3a113&type=album"
                    className={style.imgThree}
                  />
                </div>
                <div>
                  <img
                    src="https://sun9-33.userapi.com/impg/IdsGuX7Ofp71FxB2lui5gUsqSj-1fOaBivsZ1A/hjXiLhXKceo.jpg?size=114x114&quality=95&sign=b5b6c9123fe326874ec24daa8cbdb68b&type=album"
                    className={style.imgThree}
                  />
                </div>
                <div>
                  <img
                    src="https://sun9-51.userapi.com/impg/GSb-SVg-0q8Im8uCabBgl47ZMPyr1yTTiQbLgQ/5JVdRzSRMBQ.jpg?size=114x114&quality=95&sign=f34074eaafad8a715ea3a2cd6cab0911&type=album"
                    className={style.imgThree}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.block4}>
            <div className={style.infoOne}>
              0x432d....4325
            </div>
            <div className={style.infoTwo}>
              Cybergirl #4534
            </div>
            <div className={style.infoThree}>
              Современная куртка представлена в единном экземпляре,<br/>
              вещь будет произведена после сжигания токена, под ваши<br/>
              размеры и пожелания
            </div>
            <div className={style.infoThree}>
              <img
                src="https://sun9-81.userapi.com/impg/FRC77F_4S0FKP1VtOctqUGt1jgGJeHuMR4MsBA/93BLCAVaotE.jpg?size=16x16&quality=95&sign=37968f33779ee0f617039210dd389fea&type=album"
                className={style.imgFour}
              />
              <p className={style.textPrice}>0.435 MATIC</p>
            </div>
            <div className={style.infoFour}>
              <button className={style.btnP}>
                Продать
              </button>
              <button className={style.btnK}>
                Подарить
              </button>
            </div>
            <hr className={style.lineFour}/>
            <div className={style.infoFive}>
              <p className={style.textTwo}>О товаре</p>
            </div>
            <div className={style.infoSex}>
              <div className={style.podBlockOne}>
                <p className={style.textParam}>Вес:</p>
                <p className={style.textParam}>Размер:</p>
                <p className={style.textParam}>Цвет:</p>
                <p className={style.textParam}>Материал:</p>
                <p className={style.textParam}>Тираж:</p>
                <p className={style.textParam}>Номер вещи в тираже:</p>
              </div>
              <div className={style.podBlockTwo}>
                <p className={style.textParams}>1 кг.</p>
                <p className={style.textParams}>XS (Либо свой размер)</p>
                <p className={style.textParams}>Белый, зелёный</p>
                <p className={style.textParams}>Пластик, Ткань</p>
                <p className={style.textParams}>10 штук</p>
                <p className={style.textParams}>1 из 10</p>
              </div>
            </div>
            <div className={style.infoSeven}>
              <p className={style.dopInfoOne}>Дополнительная информация</p>
              <p className={style.dopInfoTwo}>Компания партнер произведет только одну куртку по вашему запросу, о
                компании: Благодаря развитию digital-коммуникаций и переводу части
                показов в онлайн дизайнеры перешли на новые способы коммуникации
                с клиентами, включая принцип see now buy now, когда люксовые бренды предлагают
                пользователям социальных сетей первыми купить модели из
                новой коллекции. То, что вчера показали на подиумах, сегодня – уже на
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;
