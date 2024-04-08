"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !description) {
        alert("이름 또는 내용이 입력되지 않았습니다.");
        return;
    }
    try{
       const res = await fetch("http://localhost:3000/api", {
          method: "POST",
          headers: {
            "Content-type" : "application/json"
          },
          body: JSON.stringify({ title, description })
       });
       if(res.ok){
          router.push("/");
          router.refresh("/");
       }else{
          throw new Error("입력오류");
       }
    }catch(error){
        console.log(error);
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
       <input type="text"
              className="border border-slate-500 px-8 py-2"
              placeholder="제목을 쓰세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
       />   
       <textarea
              rows="8" 
              className="border border-slate-500 px-8 py-2"
              placeholder="내용을 쓰세요"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
       />       
       <button type="submit"
               className="bg-blue-600 font-bold text-white py-3">
                전 송
       </button>  
    </form>
  )
}

export default AddTopic