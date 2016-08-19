 const setMapGenerator = (sets) => {
   return (userState,message) => {
     const setFunc = sets[userState.set]
     return (setFunc ? setFunc(userState,message):Object.assign({},userState,{payload:{error:"UNKNOWN_SET"}}))
   }
 }

 export default {setMapGenerator}
