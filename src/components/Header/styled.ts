import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 83px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #0000001a;
  opacity: 1;
  margin-bottom: 22px;
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 0px;

  .red-border {
    width: 62px;
    height: 16px;
    border: none;
    background-color: transparent;
    color: #656469;
    font-weight: bold;
    font-size: 12px;
  }

  .outline-btn {
    width: 100px;
    width: 84px;
    height: 36px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 2px solid #7b89f4;
    border-radius: 13px;
    opacity: 1;
    text-align: center;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    height: 213px;
    width: 100%;
    margin: 0;
    padding: 0px;
  }
`;

export const Input = styled.input`
  width: 151px;
  border: none;
  background-color: transparent;
  font: normal normal bold 12px/15px Segoe UI;
  letter-spacing: 0.96px;
  color: #656469;
  opacity: 1;
  display: flex;
`;

export const Box = styled.div`
  width: 1440px;
  flex-direction: row;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    max-width: 360px;
    flex-direction: column;
    display: flex;
    align-items: center;
    height: 203px;
  }
`;

export const Logo = styled.h1`
  font: normal normal 600 24px/32px Segoe UI;
  letter-spacing: 0.96px;
  color: #313136;
  opacity: 1;
  display: flex;

  h1 {
    font-size: 24px;
  }
  span {
    margin-top: 10px;
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const Button = styled.button`
  height: 21px;
  text-align: left;
  font: normal normal bold 16px/21px Segoe UI;
  color: #7b89f4;
  opacity: 1;
  border: transparent;
  background-color: transparent;
  margin-left: 28px;
`;

export const IconSearch = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 3px;
`;

export const IconMap = styled.div`
  display: flex;
  cursor: pointer;
  margin: 5px;
`;

export const IconCalendar = styled.div`
  cursor: pointer;
  display: flex;
  margin: 5px;
`;

export const BoxCalendar = styled.div`
  cursor: pointer;
  display: flex;
`;

export const BoxMap = styled.div`
  justify-content: center;
  display: flex;
`;
