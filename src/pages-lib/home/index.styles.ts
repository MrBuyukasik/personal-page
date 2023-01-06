import styled from "styled-components";
import { Palette } from "../../../styles/theme/types";
import Typography from "../../components/Typography";
import Image from "next/image";
import SvgIcon from "../../components/ui-elements/SvgIcon";
import { mediaQuery } from "../../../styles/utils/media";
interface ContainerProps {
  theme?: Palette;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  ${mediaQuery.lessThan("desktop")`
    flex-direction: column;
  `}
`;

export const LeftSide = styled.div<ContainerProps>`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  flex: 0.2;
  padding: 10px;
`;

export const RightSide = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;

  padding-left: 50px;

  ${mediaQuery.lessThan("desktop")`
    padding-left:0;
    align-items: flex-start;
  `}
`;

export const Name = styled(Typography)`
  font-size: 45px;
  font-weight: 700;
  color: #343a40;

  ${mediaQuery.lessThan("desktop")`
         font-size: 30px;
         ;
  `};

  ${mediaQuery.lessThan("tablet")`
          font-size: 30px;

  `};

  ${mediaQuery.lessThan("smallest")`
          font-size: 25px;
  `};
`;

export const Surname = styled(Typography)`
  font-size: 45px;
  font-weight: 700;
  color: #a2a2a2 !important;
  margin-left: 10px;

  ${mediaQuery.lessThan("desktop")`
         font-size: 30px;
         
  `};

  ${mediaQuery.lessThan("tablet")`
         font-size: 30px;
  `};

  ${mediaQuery.lessThan("smallest")`
          font-size: 25px;
  `};
`;

export const NameWrapper = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  ${mediaQuery.lessThan("desktop")`
        margin-top:30px;
        justify-content: center;
  `}
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

  ${mediaQuery.lessThan("desktop")`
          font-size:20px;

     
  `}

  ${mediaQuery.lessThan("tablet")`
          font-size: 15px;

  `}
`;

export const MailText = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
  color: #a2a2a2 !important;

  ${mediaQuery.lessThan("desktop")`
         font-size:20px;
  `};

  ${mediaQuery.lessThan("tablet")`
          font-size: 15px;

  `};
`;

export const SubTextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 30px;

  ${mediaQuery.lessThan("desktop")`
        justify-content: center;
        align-items:center;
        flex-direction: column;
        gap:10px;
  `}

  ${mediaQuery.lessThan("tablet")`
        justify-content: center;
        align-items:center;
        flex-direction: column;
        gap:10px;
  `}
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

  ${mediaQuery.lessThan("tablet")`
        width: 50px;
        height: 50px;
        border-radius: 25px;

  `}
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  ${mediaQuery.lessThan("desktop")`
        justify-content: center;
  `}

  ${mediaQuery.lessThan("tablet")`
         gap: 10px;

  `}
`;

export const ProfileImg = styled(Image)`
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(30%);
  border-radius: 100px;
  width: 200px;
  height: 200px;

  ${mediaQuery.lessThan("desktop")`
         width: 150px;
         height: 150px;
         border-radius: 75px;
  `};
  ${mediaQuery.lessThan("tablet")`
         width: 100px;
         height: 100px;
  `};
`;

export const Svg = styled(SvgIcon)`
  width: 30px;
  height: 30px;

  ${mediaQuery.lessThan("tablet")`
         width: 20px;
         height: 20px;
  `}
`;
