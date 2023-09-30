import styled from 'styled-components';
import Text from '../../ui/Text/Text';
import { Link } from 'react-router-dom';
import Wrap from '../../ui/Wrap/Wrap';
import Image from '../../ui/Image/Image';
import CartIcon from '../../../assets/images/cart_icon.svg';
console.log(CartIcon)
const EmptyCartCard = () => {
  return (
		<EmptyCartWrap>
			<ImgWrap>
				<Image imageSrc={CartIcon} altText='장바구니 아이콘'/>
			</ImgWrap>
      <Text text="장바구니가 비었습니다." />
      <Link to="/">상품 담으러 가기</Link>
    </EmptyCartWrap>
  );
};

export default EmptyCartCard;

const EmptyCartWrap = styled(Wrap)`
  display: flex;
  gap: 20px;
  margin:10px auto;
  padding: 80px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
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
`