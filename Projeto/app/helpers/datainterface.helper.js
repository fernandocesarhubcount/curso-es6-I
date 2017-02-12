class DataInterface{

  constructor(){
    throw new Error("Classe sem instancia!");
  }

  static txtToData(txt){
    if(!/\d{4}-\d{2}-\d{2}/.test(txt)) throw new Error('Formato de data errado! Formato correto: aaaa-mm-dd');
    return new Date(...txt.split("-").map((item, i)=>item - i%2));
  }

  static dataToTxt(data){
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }
}
