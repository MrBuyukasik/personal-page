import styled from "styled-components";
import { Palette } from "../../../styles/theme/types";
import Typography from "../../components/Typography";
import Image from "next/image";
import SvgIcon from "../../components/ui-elements/SvgIcon";
interface ContainerProps {
  theme?: Palette;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
`;

export const LeftSide = styled.div<ContainerProps>`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  flex: 0.2;
`;

export const RightSide = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 50px;
`;

export const Name = styled(Typography)`
  font-size: 45px;
  font-weight: 700;
  color: #343a40;
`;

export const Surname = styled(Typography)`
  font-size: 45px;
  font-weight: 700;
  color: #a2a2a2 !important;
  margin-left: 10px;
`;

export const NameWrapper = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SubText = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  color: #343a40;
`;

export const MailText = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
  color: #a2a2a2 !important;
`;

export const SubTextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Circle = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: grey;
  width: 70px;
  height: 70px;
  border-radius: 35px;

  :hover {
    background-color: black;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ProfileImg = styled(Image)`
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(30%);
  border-radius: 100px;
  border-color: green;
`;

export const Svg = styled(SvgIcon)``;
