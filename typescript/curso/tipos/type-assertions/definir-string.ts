const productName: any = "controle";
let item = productName as string; //define como string

const timeCamisa: any = "M";
let time;
time = timeCamisa; //vai continuar como any, vai dar ERRADO

// -----------------------------

let timeCerto = <string>timeCamisa;



