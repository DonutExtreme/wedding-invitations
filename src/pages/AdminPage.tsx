import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const ADMIN_PASSWORD = "0123456789";

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [responses, setResponses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== ADMIN_PASSWORD) {
      setError("Incorrect password");
      return;
    }

    // Sign in with a service-level approach using anon + password check
    // For simplicity, we use supabase auth
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: "admin@wedding.local",
        password: ADMIN_PASSWORD,
      });
      if (authError) {
        // If admin account doesn't exist yet, sign up
        const { error: signUpError } = await supabase.auth.signUp({
          email: "admin@wedding.local",
          password: ADMIN_PASSWORD,
        });
        if (signUpError) {
          setError("Authentication failed. Please try again.");
          return;
        }
      }
    } catch {
      setError("Authentication failed.");
      return;
    }

    setAuthenticated(true);
    setError("");
  };

  useEffect(() => {
    if (!authenticated) return;

    const fetchResponses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("rsvp_responses")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setResponses(data);
      setLoading(false);
    };

    fetchResponses();
  }, [authenticated]);

  const attending = responses.filter((r) => r.attendance === "Joyfully Accept");
  const declining = responses.filter((r) => r.attendance === "Regretfully Decline");
  const totalGuests = attending.reduce((sum, r) => sum + (r.guests || 1), 0);

  const exportCSV = () => {
    const headers = ["Name", "Attendance", "Guests", "Message", "Date"];
    const rows = responses.map((r) => [
      r.name,
      r.attendance,
      r.guests,
      r.message || "",
      new Date(r.created_at).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((row) => row.map((v: any) => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rsvp-responses.csv";
    a.click();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">
          <p className="font-script text-3xl text-primary mb-2">Alya & Daniel</p>
          <h1 className="font-serif text-2xl text-foreground mb-8">Admin Access</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors text-center"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              className="w-full font-sans text-xs tracking-[0.3em] uppercase bg-primary text-primary-foreground py-3 hover:bg-primary/90 transition-colors"
            >
              Enter
            </button>
          </form>

          <button
            onClick={() => navigate("/")}
            className="mt-6 font-sans text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Invitation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-script text-2xl text-primary">Alya & Daniel</p>
            <h1 className="font-serif text-2xl text-foreground">Guest Responses</h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={exportCSV}
              className="font-sans text-xs tracking-wider uppercase border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Export CSV
            </button>
            <button
              onClick={() => {
                supabase.auth.signOut();
                navigate("/");
              }}
              className="font-sans text-xs tracking-wider uppercase border border-border text-muted-foreground px-4 py-2 hover:border-primary hover:text-primary transition-colors"
            >
              Exit
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Total Responses", value: responses.length },
            { label: "Attending", value: `${attending.length} (${totalGuests} guests)` },
            { label: "Declined", value: declining.length },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border p-6 text-center">
              <p className="font-serif text-2xl text-foreground">{stat.value}</p>
              <p className="font-sans text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-center text-muted-foreground font-sans text-sm">Loading...</p>
        ) : responses.length === 0 ? (
          <p className="text-center text-muted-foreground font-sans text-sm py-12">
            No responses yet. Share your invitation link!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  {["Name", "Attendance", "Guests", "Message", "Date"].map((h) => (
                    <th key={h} className="font-sans text-xs tracking-wider uppercase text-muted-foreground py-3 px-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {responses.map((r) => (
                  <tr key={r.id} className="border-b border-border/50">
                    <td className="font-sans text-sm text-foreground py-3 px-4">{r.name}</td>
                    <td className="font-sans text-sm py-3 px-4">
                      <span className={r.attendance === "Joyfully Accept" ? "text-primary" : "text-muted-foreground"}>
                        {r.attendance}
                      </span>
                    </td>
                    <td className="font-sans text-sm text-foreground py-3 px-4">{r.guests}</td>
                    <td className="font-sans text-sm text-muted-foreground py-3 px-4 max-w-xs truncate">
                      {r.message || "—"}
                    </td>
                    <td className="font-sans text-xs text-muted-foreground py-3 px-4">
                      {new Date(r.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
