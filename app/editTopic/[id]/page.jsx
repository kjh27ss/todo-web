import EditTopicForm from "@/components/EditTopicForm";

const getTopById = async(id) => {
    try{
        const rs = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache : "no-store"
        });
        if(!rs.ok){
            throw new Error("데이터를 가져오는데 실패했습니다.");
        }
        return rs.json();
    }catch(error){
        console.log(error);
    }
}


const page = async({params}) => {
    const { id } = params;
    const { topic } = await getTopById(id);
    const { title, description } = topic;
    console.log(id);
    return (
        <EditTopicForm id={id} title={title} description={description}/>
     )
}

export default page