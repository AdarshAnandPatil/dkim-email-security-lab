# DKIM Seminar PPT Content

## Slide 1 — Title
**DomainKeys Identified Mail (DKIM)**  
Email Authentication and Protection Against Email Tampering

## Slide 2 — Why Do We Need DKIM?
Spoofing, phishing, spam, message tampering and domain impersonation.

## Slide 3 — Threat Example
A message may visually appear to come from a trusted domain. The visible From address alone is not cryptographic proof.

## Slide 4 — What is DKIM?
Private key signing → public key verification → DNS publishes the public key.

## Slide 5 — Main Components
Sender → DKIM signing system → private key → DNS → receiver.

## Slide 6 — High-Level Flow
Email → DKIM Signing → Signature → Internet → DNS lookup → Verification → PASS/FAIL.

## Slide 7 — Email Creation
Example: college sends an examination notice.

## Slide 8 — Canonicalization
Simple and relaxed canonicalization prepare a consistent representation.

## Slide 9 — Hashing
SHA-256 creates a cryptographic fingerprint.

## Slide 10 — Private-Key Signing
The authorized signing system creates a digital signature.

## Slide 11 — DKIM-Signature Header
v, a, c, d, s, h, bh and b.

## Slide 12 — Domain and Selector
Example DNS query: demo._domainkey.college-example.com.

## Slide 13 — Transmission
The signed email travels through normal mail infrastructure.

## Slide 14 — DNS Lookup
The receiver retrieves the corresponding public key.

## Slide 15 — Verification
Received email + DKIM signature + DNS public key.

## Slide 16 — DKIM PASS
Verification succeeds for unchanged signed content.

## Slide 17 — Attacker Scenario
An attacker attempts to alter a signed message.

## Slide 18 — DKIM FAIL
Modification can cause signature verification failure.

## Slide 19 — AI Robot Demonstration
Show sender, signer, DNS, attacker and receiver robots.

## Slide 20 — Live Project Demonstration
Use the DKIM Simulator and Attack Simulation.

## Slide 21 — DKIM with SPF and DMARC
DKIM is commonly used with SPF and DMARC.

## Slide 22 — Advantages
Cryptographic authentication, tampering detection, automation and DNS-based key distribution.

## Slide 23 — Limitations
DKIM does not encrypt email and does not alone guarantee an email is safe.

## Slide 24 — Conclusion
Email → signing → signature → DNS public key → verification → PASS/FAIL.

## Slide 25 — Thank You
Questions?
