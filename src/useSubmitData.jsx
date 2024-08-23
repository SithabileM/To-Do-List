const useSubmitData=((title,taskList)=>{
  const newList={
    "title": title,
    "items":
    taskList.map((task) =>({
      "task":task, "status": "pending"}
      )
      ),
    "date": new Date().toLocaleDateString()
  }
  fetch('https://2a356f81-14b6-4528-9cf5-585880122305-00-2xrlpjkpluv5u.riker.replit.dev:8000/tasks',{
    method : 'POST',
    headers : {
      'Content-Type' :
'application/json'
      },
    body : JSON.stringify(newList)
  }).then(()=>{
    console.log("success")
 } )
});
export default useSubmitData;