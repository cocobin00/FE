import Image from '../ui/Image/Image';
import Wrap from '../ui/Wrap/Wrap';
import styled from 'styled-components';
import Text from '../ui/Text/Text';
import { Link } from 'react-router-dom';
const EmptyDataCard = ({ imageSrc, text, toPath, linkText }) => {
  return (
    <CardItemWrap>
      <ImgWrap>
        <Image imageSrc={imageSrc} />
      </ImgWrap>
      <Text text={text} /> 
      <Link to={toPath}>{linkText}</Link>
    </CardItemWrap>
  );
};

export default EmptyDataCard;

const CardItemWrap = styled(Wrap)`
  display: flex;
  padding: 120px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #e2e2e2;
  gap: 20px;
  p {
    color: #707070;
  }
  a {
    color: #bcbbbb;
    text-decoration: none;
  }
  a:hover {
    color: #000;
    text-decoration: underline;
  }
`;
const ImgWrap = styled(Wrap)`
  width: 60px;
  height: 60px;
`;
