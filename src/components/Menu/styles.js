import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  background: #222;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 40px 0;
`;

export const FixedMenu = styled.div`
  position: fixed;
  top: 50px;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  border-radius: 50%;
`;

export const LinkList = styled.ul`
  width: 75%;
  list-style: none;
  font-style: none;
  padding: 35px;
  li {
    padding: 10px 0px;
    display: flex;
    align-items: center;
    transition: all 0.5s;

    :hover {
      transform: scale(1.1);
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const LinkMenu = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 500;

  :active {
    color: #fff;
  }
`;

export const ProfileButton = styled(Link)`
  width: 100%;
  text-decoration: none;
  background: #ff335b;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.5s;

  :hover {
    transition: scale(1.1);
    background: #d6193f;
  }
`;
