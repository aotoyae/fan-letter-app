import LetterBox from "components/LetterBox";
import ToHeader from "components/ToHeader";
import { useParams } from "react-router-dom";
import { memberData } from "shared/memberData";
import styled from "styled-components";

const StContainer = styled.div`
  height: 65vh;
`;

function Member({ letters, setLetters, activeMember, setActiveMember }) {
  const params = useParams();
  const foundData = memberData.find((member) => {
    return member.id === params.id;
  });

  const { name } = foundData;

  // 위에서 첫 글자가 대문자로 쓰여진 이름을 가지고 오는건데, activeMember 첫 글자만 대문자로 바꿔도 될 것 같다.
  // const name = activeMember.charAt(0).toUpperCase() + activeMember.slice(1);

  return (
    <StContainer>
      <ToHeader memberName={name} />
      <LetterBox
        letters={letters}
        setLetters={setLetters}
        activeMember={activeMember}
        setActiveMember={setActiveMember}
      />
    </StContainer>
  );
}

export default Member;
