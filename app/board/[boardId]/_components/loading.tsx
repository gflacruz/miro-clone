import { Loader } from "lucide-react";
import { InfoSkelton } from "./info";
import { ParticipantsSkelton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <InfoSkelton />
      <ParticipantsSkelton />
      <ToolbarSkeleton />
    </main>
  );
};
