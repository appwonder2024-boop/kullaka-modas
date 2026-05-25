export async function getProducts() {

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyJah_QGQqQpxWkspZIk6vEfgbrzcT0offVRFUPzCVe_dV0PVL_Nff401tNLKaiBzdl/exec"
  );

  return response.json();
}