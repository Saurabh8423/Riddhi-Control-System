import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="grid">
        <a href="/admin/products">Manage Products</a>
        <a href="/admin/reviews">Manage Reviews</a>
      </div>
    </div>
  );
}
