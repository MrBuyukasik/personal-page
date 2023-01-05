import { InferGetStaticPropsType, NextPage } from "next";
import Typography from "../../components/Typography";

import * as S from "./index.styles";
import { homePageStaticProps } from "./staticProps";

const Home: NextPage<
  InferGetStaticPropsType<typeof homePageStaticProps>
> = () => {
  return (
    <S.Container>
      <S.LeftSide></S.LeftSide>
      <S.RightSide>
        <S.ContentWrapper>
          <S.NameWrapper>
            <S.Name>HASAN CAN</S.Name>
            <S.Surname>BUYUKASIK</S.Surname>
          </S.NameWrapper>
          <S.SubTextWrapper>
            <S.SubText>
              SOFTWARE ENGINEER, YOUTUBER · BUSINESS INQUIRIES:
            </S.SubText>
            <S.MailText>HASANCANBUYUKASIK@GMAIL.COM</S.MailText>
          </S.SubTextWrapper>
        </S.ContentWrapper>
      </S.RightSide>
    </S.Container>
  );
};

export default Home;
export const getServerSideProps = homePageStaticProps;
