import { useRouter } from "next/router";

export default function BoardsMovedPage() {
  const router = useRouter();
  return (
    <>
      <div>ㅎㅇ 게시판 상세 동적페이지입니다.</div>
      <div>게시글 아이디: {router.query.boardId}</div>
    </>
  );
}

export const getServerSideProps = () => {
  // 만약 서버사이드 렌더링을 하는 페이지라면? out 폴더로 생성 불가
  //                                 이런 경우, next.config.js에서 exportPathMap으로 현재페이지 제외 시키기
};
