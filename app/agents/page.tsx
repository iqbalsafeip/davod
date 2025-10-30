import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function AgentsPage() {
  const InfoCard = (
    <GuideInfoBox>
      <ul>
       
        <li>
          <span className="ml-2">
            x404 has memory and access to a search engine and a calculator.
          </span>
        </li>
       
        <li>
          <span className="ml-2">
            By default, x404 is pretending to be a talking parrot, but you
            can the prompt to whatever you want!
          </span>
        </li>
       
        <li className="text-l">
          <span className="ml-2">
            Try asking e.g. <code>What is the weather in Honolulu?</code> below!
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );

  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="Squawk! x404 a conversational agent! Ask me about the current weather in Honolulu!"
      emoji="x404"
      showIntermediateStepsToggle={true}
    />
  );
}
