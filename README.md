# YADAR Consulting — Consultation Form Email System

The consultation form is configured to run **100% in the browser on VS Code Live Server (Port 5500)** with **Zero Node.js / Zero Backend required**.

---

## 🚀 How It Works (Port 5500 — No Node Needed)

1. Open the project in VS Code.
2. Click **"Go Live"** to start **Live Server on Port 5500** (`http://127.0.0.1:5500/index.html` or `http://localhost:5500/`).
3. Fill out the consultation form and click **"Submit Consultation Request"**.
4. The form automatically sends the data via AJAX to **FormSubmit**:
   `https://formsubmit.co/ajax/marksho8lkdp@gmail.com`
5. The consultation details arrive directly in your inbox (`marksho8lkdp@gmail.com`) formatted as a neat table, with the client's email set as `Reply-To`.

> ⚠️ **First-Time Activation (One-time only, 10 seconds):**
> On the very first form submission, FormSubmit will send a confirmation email to `marksho8lkdp@gmail.com` with an **"Activate Form"** button. Click it once to activate. Every future submission will arrive instantly in your inbox!

---

## 📧 How to Change the Recipient Email

To change the recipient inbox in the future, open [script.js](file:///c:/Users/hp/OneDrive/Desktop/naser/script.js) (lines 6–10) and edit `RECIPIENT_EMAIL`:

```javascript
const FORM_CONFIG = {
  RECIPIENT_EMAIL: "your-email@example.com",
  DEV_PORT: 5500
};
```
Save the file, and all submissions will immediately route to your new address.
