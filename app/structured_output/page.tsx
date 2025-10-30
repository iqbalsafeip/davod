import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function AgentsPage() {
  const InfoCard = (
    <GuideInfoBox>
      <ul>
        
        <li>
          x403
          <span className="ml-2">
            The chain formats the input schema and passes it into an OpenAI
            Functions model, then parses the output.
          </span>
        </li>
       
        <li className="hidden text-l md:block">
          x403
          <span className="ml-2">
            By default, x403 returns an object with <code>tone</code>,{" "}
            <code>word_count</code>, <code>entity</code>,{" "}
            <code>chat_response</code>, and an optional{" "}
            <code>final_punctuation</code>, but you can change it to whatever
            you&apos;d like!
          </span>
        </li>
        <li className="hidden text-l md:block">
          x403
          <span className="ml-2">
            It uses a lightweight, convenient, and powerful{" "}
            to define schemas, but you can initialize the chain with JSON schema
            too.
          </span>
        </li>
      
        <li className="text-l">
          x403
          <span className="ml-2">
            Try typing e.g. <code>What a beautiful day!</code> below!
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );
  return (
    <ChatWindow
      endpoint="api/chat/structured_output"
      emptyStateComponent={InfoCard}
      placeholder={`No matter what you type here, x403 always return the same JSON object with the same structure!`}
      emoji="x403"
    />
  );
}
