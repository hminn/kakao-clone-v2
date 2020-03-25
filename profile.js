// function createBg(event) {
//   const profileBg = document.createElement("div");
//   console.log(event);
//   console.log(profileBg);
// }

// function clickAvatar() {
//   const avatar = document.querySelectorAll(".friend__avatar");
//   const g_avatar = document.querySelector(".g-avatar");

//   if (avatar.length !== 0) {
//     avatar.forEach(addEventListener("click", createBg));
//   } else {
//     g_avatar.forEach(addEventListener("click", createBg));
//   }
// }

// Friends 화면의 li 태그를 눌렀을 때 해당 유저의 프로필 창이 나타나도록!
// chat 화면의 avatar를 눌렀을 때 해당 유저의 프로필 창이 나타나도록
// ++ 프로필 화면의 아바타를 눌렀을 때에는 사진이 확대

function init() {
  clickAvatar();
}
init();
