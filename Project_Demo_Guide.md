# LIVE PROJECT DEMO GUIDE

## Step 1 — Open the deployed project
Say: “This project provides a visual representation of the DKIM process.”

## Step 2 — Animated DKIM Story
Scroll to “Watch the DKIM Security Bots Work”.
Click “Play Story”.
Say: “Each scene represents a different stage of DKIM.”

## Step 3 — Live DKIM Lab
Use:
Domain: college-example.com
Selector: demo
Subject: Important Examination Notice
Message: Your examination schedule is available.

Click “Sign & Send”.
Show simulated DNS record and `DKIM = PASS`.

Say: “The original content remains unchanged in this educational simulation, so verification is successful.”

## Step 4 — Attack Simulation
Modify the message, for example:
“Your examination has been cancelled. Please follow the new instructions.”

Click “Simulate Tampering”.
Show `DKIM = FAIL`.

Say: “The received content is different from the originally signed content, so the verification simulation reports failure.”

## Step 5 — Header Analyzer
Paste:
Authentication-Results: mx.example; spf=pass; dkim=pass; dmarc=pass
DKIM-Signature: v=1; d=college-example.com; s=demo;

Click Analyze Headers.
Explain that this is an educational parser, not a live independent cryptographic verifier.
