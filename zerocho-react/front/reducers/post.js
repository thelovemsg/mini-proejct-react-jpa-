export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "thelovemsg",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        { src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg" },
        { src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg" },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "개정판 짱짱맨",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "사자사자",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "i'm dummy dater",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
