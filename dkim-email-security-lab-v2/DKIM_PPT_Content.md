# DKIM SEMINAR PPT — 25 SLIDES

## Slide 1 — TITLE
**DomainKeys Identified Mail (DKIM)**  
Email Authentication and Protection Against Email Tampering  
Subject: Computer and Network Security (CNS)

**Say:** Good morning everyone. Today I am presenting DomainKeys Identified Mail, or DKIM. DKIM helps verify whether an email was signed by an authorized domain and whether the signed portions remained unchanged.  
**Time:** 30 sec

## Slide 2 — WHY DO WE NEED DKIM?
Email threats: sender spoofing, phishing, message tampering, spam, domain impersonation.  
Example: `From: principal@college.com` can be forged.

**Say:** Attackers can forge sender information and impersonate trusted organizations. We need mechanisms that help receiving systems authenticate email.  
**Time:** 45 sec

## Slide 3 — REAL-WORLD THREAT
Normal: `college@example.com — Your examination schedule is available.`  
Attack: same visible sender, but asks for credentials.

**Say:** A visible sender address alone is not enough to prove authenticity. DKIM provides cryptographic information that receiving systems can verify.  
**Time:** 45 sec

## Slide 4 — WHAT IS DKIM?
Private key → signing  
Public key → verification  
DNS → publishes public key

**Say:** The sending domain creates a cryptographic signature. The receiver retrieves the corresponding public key from DNS and verifies it.  
**Time:** 1 min

## Slide 5 — MAIN COMPONENTS
Sender → DKIM signing server → private key → DNS → receiver/verifier.

**Say:** These are the main components involved in DKIM.  
**Time:** 45 sec

## Slide 6 — HIGH-LEVEL ARCHITECTURE
Email → DKIM signing → signature → Internet → receiver → DNS lookup → verification → PASS/FAIL.

**Say:** This is the overall DKIM flow.  
**Time:** 45 sec

## Slide 7 — STEP 1: EMAIL CREATION
From: college@example.com  
To: student@example.com  
Subject: Important Examination Notice

**Say:** The process begins when the message enters the sender's mail system.  
**Time:** 30 sec

## Slide 8 — STEP 2: CANONICALIZATION
Simple: strict formatting.  
Relaxed: tolerates certain routine formatting changes.

**Say:** Canonicalization creates a consistent representation of relevant headers and body.  
**Time:** 1 min

## Slide 9 — STEP 3: HASHING
Email content → SHA-256 concept → digital hash/fingerprint.

**Say:** If protected content changes, the calculated cryptographic result changes.  
**Time:** 45 sec

## Slide 10 — STEP 4: PRIVATE-KEY SIGNING
Message hash + private key → digital signature.

**Say:** The domain's authorized signing system creates the DKIM signature.  
**Time:** 45 sec

## Slide 11 — DKIM SIGNATURE HEADER
`v=1; a=rsa-sha256; c=relaxed/relaxed; d=college-example.com; s=demo; h=from:to:subject; bh=BodyHash; b=Signature`

Explain: version, algorithm, canonicalization, domain, selector, headers, body hash, signature.  
**Time:** 1 min

## Slide 12 — DOMAIN AND SELECTOR
`d=` = signing domain  
`s=` = selector  
Example DNS name: `demo._domainkey.college-example.com`

**Say:** The selector identifies which key record should be used and supports multiple keys and rotation.  
**Time:** 1 min

## Slide 13 — EMAIL TRANSMISSION
Sender domain → mail servers → Internet → receiver domain.

**Time:** 30 sec

## Slide 14 — DNS LOOKUP
Receiver reads `d=` and `s=` and queries DNS for the public key.

**Time:** 45 sec

## Slide 15 — VERIFICATION
Received email + DKIM signature + DNS public key → verification.

**Time:** 45 sec

## Slide 16 — DKIM PASS
Signature verifies successfully. Signed portions remained consistent.

**Say:** PASS means the signature successfully verified; it is not a guarantee that the entire email is safe.  
**Time:** 30 sec

## Slide 17 — ATTACKER SCENARIO
Original: examination schedule available.  
Attacker modifies content during transit.

**Time:** 45 sec

## Slide 18 — DKIM FAIL
Original signed content ≠ modified received content.  
Verification fails; receiver policy can treat the result as suspicious.

**Time:** 45 sec

## Slide 19 — AI VIDEO DEMONSTRATION
Play the AI robot video:
Email → DKIM robot → canonicalization → hash → signing → signature → Internet → attacker → DNS → verification → PASS/FAIL.

**Time:** 3–4 min

## Slide 20 — PROJECT DEMONSTRATION
DKIM Email Security Lab:
Animated story, signing simulation, signature explorer, DNS simulation, verification, tampering simulation, PASS/FAIL, header analyzer.

**Time:** 20 sec + 2 min demo

## Slide 21 — REAL-WORLD EMAIL SECURITY
SPF: sender authorization.  
DKIM: cryptographic domain signature.  
DMARC: policy/alignment framework.

**Time:** 45 sec

## Slide 22 — ADVANTAGES
Cryptographic authentication, tampering detection, automatic operation, DNS-based public key distribution, supports filtering.

**Time:** 30 sec

## Slide 23 — LIMITATIONS
DKIM alone does not guarantee safety, stop all phishing, encrypt email, or authenticate every visible identity by itself.  
Best practice: SPF + DKIM + DMARC.

**Time:** 45 sec

## Slide 24 — CONCLUSION
Email → sign → private key → DKIM signature → Internet → DNS public key → verification → PASS/FAIL.

**Say:** DKIM helps verify that signed portions were not altered and that the signature was produced by a system with access to the corresponding private key.  
**Time:** 30 sec

## Slide 25 — THANK YOU
Questions?
