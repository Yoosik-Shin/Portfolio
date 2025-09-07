import styled from "styled-components";

export const MenuContainer = styled("div")``;

export const MenuTrigger = styled("div")`
  img {
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    cursor: pointer;
    background-color: #a0a0a0c9;
  }
`;

// export const TriggerImg = styled("img")`
//   border-radius: 25px;
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   height: 60px;
//   width: 60px;
//   overflow: hidden;
//   cursor: pointer;
// `

export const DropdownMenu = styled("div")`
  position: absolute;
  top: 100px;
  left: 20px;
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 10px 20px;
  width: 200px;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY();
    transition: var(--speed) ease;
  }

  &.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: var(--speed) ease;
  }



  //메뉴박스 위쪽 뾰족한부분
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 20px;
    height: 20px;
    width: 20px;
    background: var(--secondary-bg);
    transform: rotate(45deg);
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 600;
    font-size: 18px;
    color: var(--primary-text-color);
    line-height: 1.2rem;
  }

  h3 span {
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;

  }

  ul li {
    display: flex;
    margin: 10px auto;

    //li 구분 얇은 선??????
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    list-style: none;
    display: flex;
    align-items: center;


    &:hover a {
      color: rgb(212, 33, 9);
      cursor: pointer;
    }

    &:hover img {
      opacity: 1;
      cursor: pointer;
    }
    img {
      max-width: 25px;
      margin-right: 20px;
      margin-left: 10px;
      opacity: 0.5;
      transition: var(--speed);
    }

    a {
      max-width: 100px;
      margin-left: 15px;
      transition: var(--speed);
    }
  }
`;
