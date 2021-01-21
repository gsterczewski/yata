export default function useLocalStore(storeName){
  const getItems = () => {
    try{
      const items = localStorage.getItem(storeName);
      if(items){
        return JSON.parse(items)
      }
      return false
    } catch(err){
      console.error(err)
      return false
    }
  }
  const saveItems = items => {
    try{
      localStorage.setItem(storeName, JSON.stringify(items))
     
    }
    catch(err){
      console.error(err)
      return false
    }
  }
  const deleteItems = () => {
    try {
      localStorage.removeItem(storeName)
    } catch (err) {
      console.error(err)
      return false;
    }
  }
  return{
    getAll: getItems,
    save: saveItems,
    purge: deleteItems
  }
}