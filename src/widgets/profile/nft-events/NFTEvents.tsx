import { H2 } from 'src/shared/ui';
import { NftCard } from 'src/widgets/profile/nft-events/NFTCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';
import { BattlePass } from 'src/widgets/profile/nft-events/BattlePass';


type BlockHeaderProps = {
  title: string;
  count: number | string;
};
export const BlockHeader = (props: BlockHeaderProps) => {
  return (
    <div className="w-full mb-6 flex justify-between">
      <H2>Мои NFT</H2>
      <Link className="flex items-center text-sm font-semibold text-slate-400" to="./">
        <span className="mr-2.5">Все 32</span>
        <ChevronRight className="stroke-slate-400" size={12} />
      </Link>
    </div>
  );
};

type NftEventsProps = {};
export const NftEvents = (props: NftEventsProps) => {


  return (
    <div className="w-full">
      <div className="mb-8">
        <BattlePass />
      </div>

      <div className="mb-8">
        <BlockHeader title="Мои NFT" count={32} />

        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
        </div>
      </div>

      <div className="mb-8">
        <BlockHeader title="Еще предстоит получить" count={32} />

        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
        </div>
      </div>

      <div className="mb-8">
        <BlockHeader title="VTB NFT" count={432} />


        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
          <NftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC" />
        </div>
      </div>

    </div>
  );
};
