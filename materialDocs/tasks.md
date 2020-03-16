# 추가해야할 사항들

## Functional

1. **ToDoTempalate**

   ~~1. _Form-Input_ : 아이템을 추가할 것, 아이템이 갖는 기본 Value는 [id(시+분+초), text, checked] 추가적으로 추후 날짜별로 할일들을 분류하기 위해서 writedate라는 값을 추가로 준다.~~

   ~~2. _Remove_ : ToDoItem에서 '✖'를 눌렀을 때 아이템이 삭제되도록 localStorage와 배열 조작~~

   ~~3. _Check_ : ToDoItem에서 '✔'를 눌렀을 때 아이템 text의 색깔이 회색으로 바뀌며 가운데 취소선이 그어지도록 하는 기능~~

2. **ToDoItem functions**

   ~~1. _Delete Button_: 아이템을 id로 판별하여 삭제 후 state 및 localStorage 갱신~~

   ~~2. _Check Button_ : CSS부분 말고도 checked라는 속성 값이 false 일때 누르면 true로 바꿀 것, true일때 누르면 false로 바꿀 것~~

## CSS

1. **App**

   ~~1. _Header_ : "My Day"(ReactApp)의 이름을 담은 Header~~

   2. _SideBar_ : 날짜를 쭉 볼 수 있는 SideBar

2) **ToDoTemplate**

   ~~1. _Form_ : 할일을 입력하는 칸~~

   ~~2. _ToDoItems_ : 할일들이 일정 간격을 유지하여 출력~~

3) **ToDoItem events**

   1. _onmouseenter_ & _onmouseleave_ : 아이템에 마우스를 올렸을 때 background Color 바뀌게 할 것

   ~~2. _Check Button_ : 완료된 할 일에 대해서 클릭 한 경우 글씨색 회색 및 가운데 줄 긋기, 완료된 할 일을 한 번 더 누르면 다시 기존 상태로 되돌릴 것~~
