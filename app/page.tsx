import AiTalks from "@/components/intro/ai-talks";
import Headline from "@/components/intro/headline";

export default function Home() {
  return (
      <div className="w-full flex flex-col space-y-[100px]">
       <AiTalks />
       <Headline />
      </div>
  );
}
