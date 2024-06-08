export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className="w-[100svw] h-[100svh] flex bg-background-dark items-center justify-center"
      style={{ fontFamily: "clash" }}
    >
      <h1 className="text-3xl text-on-background-dark">
        Estamos preparando todo...
      </h1>
    </div>
  );
}
