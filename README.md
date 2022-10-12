# 원티드 프리온보딩 사전과제



사전과제를 netlify를 통해 배포했습니다..(https://pre-course.netlify.app/)



## 1. 로그인 / 회원가입 페이지

로그인과 회원가입 두가지 기능을 별도로 두지 않고 하나의 페이지로 보이게 디자인했습니다.		

로그인과 회원가입은 동일하게 이메일과 비밀번호를 작성할 수 있는 input들과 제출할 수 있는 버튼이 있습니다.

이메일은 "@"를 반드시 포함해야 하고, 비밀번호는 8자 이상이 되어야 버튼이 활성화되어 클릭할 수 있습니다.  


![1](https://user-images.githubusercontent.com/80830981/195162701-50094a0c-d138-461f-94cd-c0a398a7c440.gif)  

</br>
회원가입과 로그인 결과에 따라 글자색깔이 달라지는 메시지를  제출버튼 상단에 두었습니다. (빨간색: 에러, 하얀색: 성공)
회원가입과 로그인에서 생길 수 있는 에러는 다음과 같이 정리될 수 있습니다.

<br/>


| 컴포넌트 |상황    | message                          |
| :------: | ---------------- | -------------------------------- |
| 회원가입 | 이미 동일한 이메일의 계정이 존재할 때  | 동일한 이메일이 이미 존재합니다. |
|  로그인  | 이메일 또는 비밀번호가 해당 계정과 맞지 않을 때 | 이메일 혹은 비밀번호를 확인해주세요                  |
|  로그인  | 존재하지 않는 이메일로 로그인 시도를 했을 때    | 해당 사용자가 존재하지 않습니다. |  


</br>

회원가입 성공 후에 해당 이메일과 비밀번호로 로그인하면 access_token을 받을 수 있고,

받은 access_token을 로컬 스토리지에 저장하고 화면은 "/todo" 페이지로 이동합니다. 




![2](https://user-images.githubusercontent.com/80830981/195253337-c4965a85-d65a-4c5c-b08a-c0542e0315ed.gif)




</br>
토큰의 유무에 따라 자동으로 리다이렉션이 되게 설정해두었습니다.  


토큰이 없는 채로 "/todo"에 접근시 로그인/회원가입 페이지로, 
토큰이 있는 채로 "/"에 접근 시에는 todo페이지로 자동으로 이동됩니다.



![3](https://user-images.githubusercontent.com/80830981/195254415-f6a957f9-25bb-4251-8242-02516a6ae004.gif)


 

## 2. 투두리스트 페이지

 투두페이지에서는 토큰을 통해 기존에 있던 투두리스트 내용을 받아오고 새로운 투두를 생성, 삭제, 수정이 가능합니다.
</br>
</br>

로그인에 성공하면 자동으로 페이지 이동이 일어나고 해당 토큰으로 기존 투두리스트를 받아옵니다.

상단에는 새로운 투두를 추가할 수 있는 input과 add버튼이 있어 새롭게 투두를 생성할 수 있습니다.

투두리스트의 투두는 완료 여부와 수정, 삭제 버튼을 가지고 있습니다. 


삭제 버튼으로 해당 투두를 삭제할 수 있습니다.  


![4](https://user-images.githubusercontent.com/80830981/195255092-2166532d-593a-440c-a2ea-84046a11bd8f.gif)

</br>

수정하기 버튼을 누르면, 해당 투두를 새롭게 작성할 수 있는 input과 

완료여부를 수정할 수 있는 "completed"와 "not yet" 두 개의 버튼, 

기존의 작성한 내용으로 돌아갈 수 있는 취소하기 버튼, 변경한 내용을 제출하는 제출하기 버튼이 나타납니다.


</br>
input창의 경우 비어둔 채로 제출할 경우 400 Bad Request 에러가 발생하기 때문에, 

제출되지 않고 '내용이 비어있습니다.😅'로 input의 placeholder 내용을 변경해 새로운 내용을 작성할 수 있게 안내합니다.

</br>
 
"completed"와 "not yet" 버튼은 클릭 시 배경색이 바뀌어 선택한 버튼을 표시해 줍니다.

</br>
 
취소하기 버튼은 누를 시에 바로 전의 내용으로 돌아 갈 수 있으며, 제출하기버튼을 누르면 변경된 내용을 서버와 UI에 업데이트합니다. 


![5](https://user-images.githubusercontent.com/80830981/195255554-22fab375-2ce5-42a5-862c-91e009107660.gif)





