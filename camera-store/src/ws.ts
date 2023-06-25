import { useInstant, Message } from "djangoinstant";
//import { Instant } from "@/packages/djangoinstant";
//import { useInstant } from "./packages/djangoinstant/client";

const instant = useInstant();

async function initWs() {
  await instant.init(
    "http://127.0.0.1:8000",
    "ws://localhost:8001",
    true)

    function onMessage(msg: Message): void {
      alert(msg.msg);
    }
    
    instant.onMessage(onMessage);

    await instant.connect();
    console.log("Websockets connected");
}

export { instant, initWs }