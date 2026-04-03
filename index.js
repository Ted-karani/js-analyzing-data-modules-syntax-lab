require('datejs')
function combineUsers(...args){
   const combinedObject = {
    users : []
   };
   for( let name of args){
    combinedObject.users.push(...name);
   }
   combinedObject.merge_date = Date.parse('today').toString('M/d/yyyy');

 
  return combinedObject;

}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};