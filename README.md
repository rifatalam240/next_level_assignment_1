Question_1:What are some differences between interfaces and types in TypeScript?
answer:interface hocche ekta object er structure..ekta object dekhte kemon hobe eta interfaces diye age declare kora hoyy,,orthat ekta object kemon hobe setar blueprint holo interface.
Type hocche datatype ta kemon hobe seta declare kora.

#re-opening
interface re-opening kora jay but type re-opening korle error dibe.
example:interface user{name:string;}
interface user{age:number;}
type user={name:string;}
type user={age:number;}//eita error dibe//type re-open allow na

#extending
interface extends diye onno interface extend kora jay
type intersection diye extend kora hoy
#complex type 
type:sokol khetre use kora jay
interface:sudu object er khetre kora jay


Question_2:Explain the differnce between any,unknown,never types in typescript
answer:
*any type mane holo typescript ke bola je tumi kono type check korba na
*unknown type holo sob type e use korte bole but age type check korte hobe typeof diye
*never type holo emon code jeta kokhono execution hobe na,,je function return kore na





