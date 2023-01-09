import { BsThreeDots } from 'react-icons/bs';
import * as S from './style';

const TrendingTopic = () => {
  return (
    <S.Wrapper>
      <S.Subject>
        <S.FadedText>Assuntos do momento</S.FadedText>
        <a href=''>
          <BsThreeDots />
        </a>
      </S.Subject>
      <h4>Paula Fernandes</h4>
      <S.FadedText>1702 Tweets</S.FadedText>
    </S.Wrapper>
  );
};

export default TrendingTopic;
