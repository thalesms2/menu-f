import MenuList from '../components/MenuList';
import { useGetMenuQuery } from '../services/api';
import Loading from '../components/Loading';

export default function MenuPage() {
  const { data, error, isLoading } = useGetMenuQuery();

  return(
  <>
    { error ? (
      <>Erro</>
    ) : isLoading ? (
      <Loading />
    ) : data ? (
      <MenuList itens={data} />
    ) : null}
  </>
  )
}