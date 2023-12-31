import { useRef } from "react";
import {styled} from "styled-components"

const Test = () => {
  const test = useRef();
  const fill = useRef();

  const onClickPlus = () => {
    console.log(test.current)

    // ref로 input아래에 쓴 거 보여주기
    const text = test.current.value
    fill.current.innerText = text

  };

  const onClickBTN = () => {
    console.log(test.current.value);

    // value는 input 같은 애들 쓸 때 가능함
    // 그니까 div에 뭘 적었다고 걔가 value가 되는 게 아니라
    // 원래 html에서도 input에는 value가 있었잖니
    // 그 value를 의미하는듯

    // test.current => input
    // test.current.value => input.value
  };

  return (
    <Wrapper>
      {/* 이렇게만 해도 textbox에 뭐 적으면 나타남
                왜지? input을 test가 지배해서 그런가...? */}
      <input ref={test} placeholder="write message"></input>
      <button onClick={onClickBTN}>button</button>
      <button onClick={onClickPlus}>show</button>
      <View ref={fill}></View>
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  margin: 20px;
`

const View = styled.h1`

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: lightgray;
  border: 1px solid ;
  position : absolute;
`