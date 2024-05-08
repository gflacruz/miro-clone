export const Info = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      Todo information about the bound
    </div>
  );
};

Info.Skeleton = function InfoSkelton() {
  return (
    <div className="absolute w-[300px] top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md" />
  );
};
