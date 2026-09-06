# DKIM Email Security Lab

Interactive CNS project demonstrating:
- DKIM signing flow
- SHA-256 message hashing
- Private/public key concept
- Simulated DNS TXT record
- DKIM PASS/FAIL verification
- Email tampering attack simulation
- Raw email header analyzer
- Seminar mode and 90-second video storyboard

## Run locally
```bash
npm install
npm start
```
Open `http://localhost:3000`.

## Deploy on Render
1. Upload this project to GitHub.
2. Create a **Web Service** in Render.
3. Connect the repository.
4. Build Command: `npm install`
5. Start Command: `npm start`

## Important
This is an educational simulator. The cryptographic flow is visualized for CNS learning and does not replace a production mail server or DNS infrastructure.
