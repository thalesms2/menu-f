import MenuCard from './MenuCard'
import type { IMenu, IMenuListProps } from '../types/menu'

export default function MenuList({ itens }: IMenuListProps) {
  const styleDiv = 'grid grid-cols-1 lg:grid-cols-2 gap-3';
  const styleH2 = 'mx-2 my-2';

  return(
    <>
      <h2 className={styleH2}>Entradas</h2>
      <div className={styleDiv}>
        {itens.ENTRY.map((item: IMenu) => 
          <MenuCard
            key={item.id}
            name={item.name} 
            description={item.description}
            price={item.price}
            category={item.category}
          />
        )}
      </div>
      <h2 className={styleH2}>Pratos principais</h2>
      <div className={styleDiv}>
        {itens.MAIN_DISH.map((item: IMenu) => 
          <MenuCard
            key={item.id}
            name={item.name} 
            description={item.description}
            price={item.price}
            category={item.category}
          />
        )}
      </div>
      <h2 className={styleH2}>Sobremesas</h2>
      <div className={styleDiv}>
        {itens.DESSERT.map((item: IMenu) => 
          <MenuCard
            key={item.id}
            name={item.name} 
            description={item.description}
            price={item.price}
            category={item.category}
          />
        )}
      </div>
      <h2 className={styleH2}>Bebidas</h2>
      <div className={styleDiv}>
        {itens.DRINK.map((item: IMenu) => 
          <MenuCard
            key={item.id}
            name={item.name} 
            description={item.description}
            price={item.price}
            category={item.category}
          />
        )}
      </div>
    </>
  )
}