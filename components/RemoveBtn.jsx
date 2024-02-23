"use client"
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async ()=> {
    const y = confirm("정말로 삭제하시겠습니까?");
    if(y){
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            method:'DELETE'
        });
        if(res.ok){
            const data = await res.json();
            if(data.message) alert(data.message);
            router.refresh();
        }
    }
  }  
  return (
    <button onClick={removeTopic} className='text-red-400'>
        <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn