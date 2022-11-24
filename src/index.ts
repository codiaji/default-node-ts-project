interface Person {
 firstName: string;
};
interface Person {
 lastName: string;
};
const me:Person = {firstName:"Amine",lastName:"El idrissi"};
console.log('me :>> ', me);
// The below code snippet will lead to error
/* type Window = {
    title: string
   }
   type Window = {
    ts: TypeScriptAPI
   } */