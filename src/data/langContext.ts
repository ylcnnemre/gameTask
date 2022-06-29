
 export  type TlangProps = {
   ad : string,
   text : string 
}

  
  interface Ilangs {
    tr : TlangProps,
    en : TlangProps
}

 export const langs:Ilangs={
     tr : {
        ad : "Benim Adım Yasin",
        text :  "Merhaba Dünya"
     },
     en : {
        ad : "My Name is Yasin",
        text : "Hello World"
     }
}



