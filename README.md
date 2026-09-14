# YADAR Consulting — Consultation Form Email System

The consultation form is configured to run **100% in the browser on the published site** ([https://markramy1.github.io/YADAR_Consulting/](https://markramy1.github.io/YADAR_Consulting/)) with **Zero Node.js / Zero Backend required**.

---

## 🚀 How It Works (Published Site — No Node Needed)

1. Visit the live site: [https://markramy1.github.io/YADAR_Consulting/](https://markramy1.github.io/YADAR_Consulting/)
2. Fill out the consultation form and click **"Submit Consultation Request"**.
3. The form automatically sends the data via AJAX to **FormSubmit**:
   `https://formsubmit.co/ajax/marksho8lkdp@gmail.com`
4. The consultation details arrive directly in your inbox (`marksho8lkdp@gmail.com`) formatted as a neat table, with the client's email set as `Reply-To`.

> ⚠️ **First-Time Activation (One-time only, 10 seconds):**
> On the very first form submission, FormSubmit will send a confirmation email to `marksho8lkdp@gmail.com` with an **"Activate Form"** button. Click it once to activate. Every future submission will arrive instantly in your inbox!

---

## 📧 How to Change the Recipient Email

To change the recipient inbox in the future, open [script.js](script.js) (lines 6–10) and edit `RECIPIENT_EMAIL`:

```javascript
const FORM_CONFIG = {
  RECIPIENT_EMAIL: "your-email@example.com",
  SITE_URL: "https://markramy1.github.io/YADAR_Consulting/"
};
```
Save the file, and all submissions will immediately route to your new address.
