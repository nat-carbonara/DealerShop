// Configura Supabase (metti qui le tue credenziali dal progetto Supabase)
const supabaseUrl = "https://hohsnyptyrallpdpkmdh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaHNueXB0eXJhbGxwZHBrbWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNjg5MTQsImV4cCI6MjA3Mzk0NDkxNH0._sSnyvRuwqPTtesuKX5FBShxwuK0RRsvb7TCNRXex8A";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Registrazione
async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPass").value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    document.getElementById("status").innerText = "Errore: " + error.message;
  } else {
    document.getElementById("status").innerText = "Registrazione completata! Controlla l'email.";
  }
}

// Login
async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    document.getElementById("status").innerText = "Errore: " + error.message;
  } else {
    document.getElementById("status").innerText = "Login riuscito! Benvenuto " + data.user.email;
  }
}
