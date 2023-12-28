const dateName = new Date();
//dateNameを定義、dateNameという名前の変数にnew Date([2023,8,22])という値を代入

const date = () => {
//dateを定義
var year = dateName.getFullYear();
var month = dateName.getMonth() +1;
var day = dateName.getDate();
//year、month、dayという変数に格納

console.log (year + "年" + month + "月" + day + "日");
}

date();
