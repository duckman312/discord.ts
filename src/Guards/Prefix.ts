import { Message } from "discord.js";

export function Prefix(text: string, replace: boolean = false) {
  return (message: Message) => {
    const startWith = message.content.startsWith(text);
    if (replace) {
      message.content = message.content.replace(text, "");
    }
    return startWith;
  };
}
