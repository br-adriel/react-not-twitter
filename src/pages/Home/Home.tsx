import { useSelector } from 'react-redux';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import { selectAuth } from '../../store/authSlice';
import Explore from '../Explore';
import Feed from './Feed';
import * as S from './style';

const Home = () => {
  const { user } = useSelector(selectAuth);

  if (!user) return <Explore />;
  return (
    <S.Wrapper>
      <Header />
      <Feed />
      <Aside />
    </S.Wrapper>
  );
};

export default Home;
