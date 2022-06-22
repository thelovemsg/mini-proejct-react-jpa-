import { Outlet, useSearchParams } from "react-router-dom";

const Router2 = ({ match }) => {
  console.log(match);
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const password = searchParams.get("password");
  return (
    <>
      <div>
        router2
        <br />
        {id && `아이디 : ${id}`}
        {password && `비밀번호 : ${password}`}
        <button
          onClick={() => {
            setSearchParams({ password: "expired!" });
          }}
        >
          password change!
        </button>
        <Outlet />
      </div>
    </>
  );
};

export default Router2;
