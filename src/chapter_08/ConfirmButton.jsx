import React, { useState } from "react";

// 함수 컴포넌트 방식 -> 요즘 많이 씀
function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  )
}
// class 컴포넌트 방식 -> 요즘 잘 안씀
// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     };
//     // 확인 여부를 저장하기 위해 isConfirmed 변수를 state에서 선언/초기화

//     // this.handleConfirm = this.handleConfirm.bind(this);
//   }

//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }

//   render() {
//     return (
//       <button
//         onClick={this.handleConfirm}
//         disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//         </button>
//     );
//   }
// }

export default ConfirmButton;