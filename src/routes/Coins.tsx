import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "./atoms";

const Container = styled.div`
  padding: 0px 10px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  color: ${(props) => props.theme.textColor};
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  padding: 20px;

  a {
    display: block;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 25px;
  width: 25px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface ICoinProps {}

function Coins({}: ICoinProps) {
  // setter function => value를 설정(set)하는 function
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>Coin</Title>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
              <Link to={{ pathname: `/${coin.id}`, state: { name: coin.name } }}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
