 const setMapGenerator = (sets) => {
   return (userState,message) => {
     var setFunc = sets[userState.set]
     if(!userState.set)
        setFunc = sets["welcome"]
     return (setFunc ? setFunc(userState,message):Object.assign({},userState,{payload:{error:"UNKNOWN_SET"}}))
   }
 }

 const messageGenerator = (messageSets) => {
   return (userState) => {
     const setFunc = messageSets[userState.set]
     return (setFunc ? setFunc(userState):null)
   }
 }

 export default {setMapGenerator,messageGenerator}
