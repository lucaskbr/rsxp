import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  background: #fff;
  width: 100%;
  max-width: 1220px;
  margin: 80px auto;
  border-radius: 25px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #ff335b;
  text-align: center;
  margin: 55px 0;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const ChallengeList = styled.ul`
  position: relative;
  padding: 0 20px;
  display: inline-block;
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
  z-index: 999;
`;

export const ChallengeCard = styled.li`
  background: #fff;
  color: #000;
  margin: 30px 0;
  padding: 55px 20px 15px 20px;
  min-height: 200px;
  min-width: 470px;
  max-width: 470px;
  border: 1px solid #f7f3f3;
  border-radius: 14px;
  box-shadow: 0px 6px 10px #d4d4d4;
  position: relative;

  img {
    height: 75px;
    position: absolute;
    top: -30px;
    right: -25px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {
      color: #0fc8ed;
      font-size: 25px;
    }

    p {
      margin: 12px 0;
      font-size: 18px;
      text-align: justify;
    }

    h4 {
      width: 100%;
      font-size: 20px;
      color: #7427f1;
      margin: 12px 0;
      text-align: right;
      text-transform: uppercase;
    }

    button {
      background: #ff335b;
      border: 1px solid #ff335b;
      padding: 10px 15px;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
