 const setMapGenerator = (sets) => {
   return (convState,message) => {
     var setFunc = sets[convState.set]
     if(!convState.set)
        setFunc = sets["welcome"]
     return (setFunc ? setFunc(convState,message):Object.assign({},convState,{payload:{error:"UNKNOWN_SET"}}))
   }
 }

 const messageGenerator = (messageSets) => {
   return (convState) => {
     const setFunc = messageSets[convState.set]
     return (setFunc ? setFunc(convState):null)
   }
 }

 export default {setMapGenerator,messageGenerator}
