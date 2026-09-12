const sceneData=[
["1. Opening — Email Security World","ARIA walks through a futuristic email security office.","Every day, billions of emails travel across the Internet. How can a receiving system verify a domain's signature and detect changes to signed content?"],
["2. Robot Creates Email","ARIA types an examination notice and creates a glowing email.","The DKIM process begins when a sender creates an email."],
["3. DKIM Signing Server","The email travels to SIGNER-01 in a security server room.","Before the email leaves the sender's domain, it reaches an authorized DKIM signing system."],
["4. Canonicalization","SIGNER-01 places the email in a message processing chamber.","DKIM prepares selected parts of the email into a consistent representation."],
["5. SHA-256 Hashing","A hashing machine converts protected content into a digital fingerprint.","A hash acts like a digital fingerprint. Changing protected content changes the verification representation."],
["6. Private-Key Signing","SIGNER-01 opens a secure vault and uses a private key.","The authorized signing system uses the domain's private key to create a digital signature."],
["7. Signature Attached","A golden security seal is attached to the email.","The resulting information is represented in the DKIM-Signature header."],
["8. DNS Public Key","DNS-01 stores a glowing public key in the DNS server.","The corresponding public key is published through DNS."],
["9. Internet Transmission","The signed email travels between servers and digital networks.","After signing, the email travels normally toward the receiving domain."],
["10. Attacker Intercepts","SHADOW-X intercepts and changes the email.","An attacker may attempt to modify a message after it has been signed."],
["11. Receiver Gets Email","GUARD-01 receives and scans the email.","The receiving system reads the DKIM signature and identifies the domain and selector."],
["12. DNS Lookup","GUARD-01 requests the key; DNS-01 returns it.","The receiver queries DNS and retrieves the corresponding public key."],
["13. Verification Machine","Email, signature and public key enter the verification chamber.","The receiving system verifies the signed portions using the signature and public key."],
["14. DKIM PASS","An unchanged email produces a green check.","For an unchanged signed message, verification can succeed: DKIM PASS."],
["15. DKIM FAIL","A modified email produces a red warning and is blocked.","Because the signed content was changed, verification no longer matches and DKIM FAIL can occur."],
["16. Final Team","ARIA, SIGNER-01, DNS-01, SHADOW-X and GUARD-01 stand in the complete flow.","DKIM signs at the sender, uses DNS for public-key retrieval, and lets the receiver verify signed content."]
];
document.getElementById('scenes').innerHTML=sceneData.map((s,i)=>`<article class="scene"><h3>🤖 ${s[0]}</h3><b>Visual action:</b><p>${s[1]}</p><b>Voice narration:</b><p>“${s[2]}”</p><details><summary>Generation prompt</summary><p class="prompt">High-quality cinematic 3D animation, consistent humanoid robots, physically believable walking and hand movement, futuristic cybersecurity environment, smooth camera movement, realistic lighting, professional educational animation, 16:9 landscape, no subtitles, no watermark. Scene: ${s[1]}</p></details></article>`).join('');

const slideTitles=[
"Title — DomainKeys Identified Mail","Why Do We Need DKIM?","Email Threat Example","What is DKIM?","DKIM Main Components","High-Level DKIM Architecture","Step 1: Email Creation","Step 2: Canonicalization","Step 3: Hashing","Step 4: Private-Key Signing","DKIM-Signature Header","Domain and Selector","Step 5: Email Transmission","Step 6: DNS Lookup","Step 7: Verification","DKIM PASS","Attacker Scenario","DKIM FAIL","AI Robot Video Demonstration","Live Project Demonstration","DKIM, SPF and DMARC","Advantages","Limitations","Conclusion","Thank You"];
document.getElementById('slides').innerHTML=slideTitles.map((x,i)=>`<article class="slide" onclick="alert('Slide ${i+1}: ${x}\\n\\nOpen DKIM_PPT_Content.md in the repository for the complete slide content and speaking flow.')"><b>Slide ${i+1}</b><h3>${x}</h3><small>Tap to view presentation guidance</small></article>`).join('');

async function signEmail(){
 const b={domain:domain.value,selector:selector.value,subject:subject.value,message:message.value};
 const r=await fetch('/api/sign',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});const d=await r.json();
 signout.textContent=`CANONICALIZED DATA\n${d.canonical}\n\nSHA-256 BODY HASH\n${d.bodyHash}\n\nSIMULATED DKIM SIGNATURE\n${d.signature}\n\nDNS LOOKUP\n${d.dns}\n\nDKIM HEADER\n${d.header}\n\nRESULT: ✅ DKIM = ${d.result}`;
 original.value=b.message;
}
async function attack(){
 const b={domain:domain.value,selector:selector.value,subject:subject.value,originalMessage:original.value,receivedMessage:modified.value};
 const r=await fetch('/api/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});const d=await r.json();
 attackout.textContent=`EXPECTED SIGNATURE REPRESENTATION\n${d.expected}\n\nRECEIVED CONTENT REPRESENTATION\n${d.actual}\n\nRESULT: ${d.result==='PASS'?'✅':'❌'} DKIM = ${d.result}\n\n${d.reason}`;
}
