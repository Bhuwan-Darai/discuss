import TopicCreateForm from "@/components/topics/topics-create-form";

export default async function Home() {
  return (
    <div className="grid grid-col-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Post</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}
