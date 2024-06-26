import TopicCreateForm from "@/components/topics/topics-create-form";
import TopicList from "@/components/topics/topic-list";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Post</h1>
      </div>
      <div>
        <TopicCreateForm />
        <TopicList />
      </div>
    </div>
  );
}
