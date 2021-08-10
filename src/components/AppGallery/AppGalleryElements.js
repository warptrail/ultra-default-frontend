import styled from 'styled-components';
import { FaTruck, FaOtter } from 'react-icons/fa';

import { Link as LinkRouter } from 'react-router-dom';

export const AppGalleryContainer = styled.div`
  min-height: 95vh;
  width: 90%;
  border: 1px solid black;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;

export const AppGalleryCardLink = styled(LinkRouter)`
  display: flex;
  text-decoration: none;
`;

export const AppGalleryCard = styled.div`
  background: #2c1a5f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 10px;
  /* height: 400px; */
  width: 300px;
  padding: 30px;
  margin: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const AGCardH2 = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 34px;
  color: #9dbf00;
  margin-bottom: 20px;
`;

export const AGCardIcon = styled(FaTruck)`
  color: #fff;
  font-size: 80px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const AGCardIcon2 = styled(FaOtter)`
  color: #fff;
  font-size: 80px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const AGCardText = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 28px;
`;
