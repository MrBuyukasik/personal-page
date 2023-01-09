import { InferGetStaticPropsType, NextPage } from "next";

import * as S from "./index.styles";
import { homePageStaticProps } from "./staticProps";
import Picture from "../../../public/images/profile.png";
import SvgIcon from "../../components/ui-elements/SvgIcon";
import { iconMap } from "../../components/ui-elements/SvgIcon/icons";
import YouTube, { YouTubeProps } from "react-youtube";
import { mediaQuery } from "../../../styles/utils/media";
import useWindowSize from "../../hooks/useWindowSize";

const Home: NextPage<
  InferGetStaticPropsType<typeof homePageStaticProps>
> = () => {
  const { isMobileScreen, isSmallScreen, isSmallestScreen } = useWindowSize();

  const socialMediaIcons = [
    {
      name: "YoutubeIcon",
      url: "https://www.youtube.com/@hasancanbuyukasik",
    },
    {
      name: "GithubIcon",
      url: "https://github.com/MrBuyukasik",
    },
    {
      name: "LinkedinIcon",
      url: "https://www.linkedin.com/in/hasancanbuyukasik",
    },
    {
      name: "TwitterIcon",
      url: "https://twitter.com/MrBuyukasik",
    },
    {
      name: "InstagramIcon",
      url: "https://www.instagram.com/h.can.buyukasik",
    },
  ];

  const handleHeight = () => {
    if (isSmallScreen) {
      return "300";
    }
    if (isMobileScreen) {
      return "400";
    }

    if (isSmallestScreen) {
      return "300";
    }

    return "390";
  };

  const handleWidth = () => {
    if (isSmallScreen) {
      return "500";
    }
    if (isMobileScreen) {
      return "300";
    }

    if (isSmallestScreen) {
      return "300";
    }

    return "640";
  };

  const opts = {
    height: handleHeight(),
    width: handleWidth(),
  };

  const _onReady = (event: any) => {
    event.target.pauseVideo();
  };
  return (
    <S.Container>
      <S.LeftSide>
        <S.ProfileImg priority src={Picture} alt="Profile Picture" />
      </S.LeftSide>
      <S.RightSide>
        <S.ContentWrapper>
          <S.NameWrapper>
            <S.Name>HASAN CAN</S.Name>
            <S.Surname>BUYUKASIK</S.Surname>
          </S.NameWrapper>
          <S.SubTextWrapper>
            <S.SubText>SOFTWARE ENGINEER · BUSINESS INQUIRIES:</S.SubText>
            <S.MailTo href="mailto:hasancanbuyukasik@gmail.com">
              <S.MailText>HASANCANBUYUKASIK@GMAIL.COM</S.MailText>
            </S.MailTo>
          </S.SubTextWrapper>
          <S.SocialMediaIcons>
            {socialMediaIcons.map((item, index) => {
              return (
                <a
                  key={`icon-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  href={item.url}
                >
                  <S.Circle>
                    <S.Svg iconName={item.name as any} />
                  </S.Circle>
                </a>
              );
            })}
          </S.SocialMediaIcons>
          <S.VideoContainer>
            <YouTube videoId="vTKBpUGIpcE" opts={opts} onReady={_onReady} />
          </S.VideoContainer>
        </S.ContentWrapper>
      </S.RightSide>
    </S.Container>
  );
};

export default Home;
export const getServerSideProps = homePageStaticProps;
