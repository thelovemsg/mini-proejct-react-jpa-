import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";
import { useSelector } from "react-redux";
import Router from "next/router";
import { Router } from "next/dist/client/router";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }
  const followerList = [
    { nickname: "thelovemsg" },
    { nickname: "바보" },
    { nickname: "노드버스강의" },
  ];
  const followingList = [
    { nickname: "thelovemsg" },
    { nickname: "바보" },
    { nickname: "노드버스강의" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | Nodebird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
