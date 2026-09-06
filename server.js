const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/analyze", (req, res) => {
  const h = (req.body.headers || "").toLowerCase();
  const result = {
    spf: h.includes("spf=pass") ? "PASS" : h.includes("spf=fail") ? "FAIL" : "NOT FOUND",
    dkim: h.includes("dkim=pass") ? "PASS" : h.includes("dkim=fail") ? "FAIL" : "NOT FOUND",
    dmarc: h.includes("dmarc=pass") ? "PASS" : h.includes("dmarc=fail") ? "FAIL" : "NOT FOUND",
    domain: ((req.body.headers || "").match(/\bd=([^;\s]+)/i)||[])[1] || "Not detected",
    selector: ((req.body.headers || "").match(/\bs=([^;\s]+)/i)||[])[1] || "Not detected"
  };
  res.json(result);
});

app.get("*", (_, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(PORT, () => console.log(`DKIM Lab running on ${PORT}`));
