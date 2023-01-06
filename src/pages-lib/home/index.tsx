import { InferGetStaticPropsType, NextPage } from "next";
import Typography from "../../components/Typography";

import * as S from "./index.styles";
import { homePageStaticProps } from "./staticProps";
import Picture from "../../../public/images/profile.png";
import SvgIcon from "../../components/ui-elements/SvgIcon";
import { iconMap } from "../../components/ui-elements/SvgIcon/icons";

const Home: NextPage<
  InferGetStaticPropsType<typeof homePageStaticProps>
> = () => {
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
  return (
    <S.Container>
      <S.LeftSide>
        <S.ProfileImg
          src={Picture}
          alt="Profile Picture"
          width={200}
          height={200}
        />
      </S.LeftSide>
      <S.RightSide>
        <S.ContentWrapper>
          <S.NameWrapper>
            <S.Name>HASAN CAN</S.Name>
            <S.Surname>BUYUKASIK</S.Surname>
          </S.NameWrapper>
          <S.SubTextWrapper>
            <S.SubText>SOFTWARE ENGINEER · BUSINESS INQUIRIES:</S.SubText>
            <S.MailText>HASANCANBUYUKASIK@GMAIL.COM</S.MailText>
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
                    <S.Svg iconName={item.name as any} width={30} height={30} />
                  </S.Circle>
                </a>
              );
            })}
          </S.SocialMediaIcons>
        </S.ContentWrapper>
      </S.RightSide>
    </S.Container>
  );
};

export default Home;
export const getServerSideProps = homePageStaticProps;
