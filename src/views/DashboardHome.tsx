export default function DashboardHome() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card p-4">Card 1</div>
        <div className="card p-4">Card 2</div>
        <div className="card p-4">Card 3</div>
      </div>
    </section>
  );
}
