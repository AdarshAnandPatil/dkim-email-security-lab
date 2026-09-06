let originalMessage = "", originalHash = "";

async function sha256(text){
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
}
const sleep = ms => new Promise(r=>setTimeout(r,ms));

document.getElementById("signBtn").onclick = async () => {
  const domain=document.getElementById("domain").value.trim() || "college-example.com";
  const selector=document.getElementById("selector").value.trim() || "demo";
  const subject=document.getElementById("subject").value.trim();
  originalMessage=document.getElementById("message").value;
  const full=subject+"\\n"+originalMessage;
  const steps=document.getElementById("steps");
  const result=document.getElementById("verifyResult");
  steps.innerHTML="";
  result.className="status neutral"; result.textContent="SIGNING IN PROGRESS...";
  const messages=[
    "① Preparing email headers and message content...",
    "② Calculating SHA-256 hash of selected content...",
    "③ Applying educational private-key signing simulation...",
    "④ Adding DKIM-Signature header (d="+domain+"; s="+selector+")...",
    "⑤ Email sent to receiver...",
    "⑥ Receiver queries DNS: "+selector+"._domainkey."+domain,
    "⑦ Public key found. Verifying signature..."
  ];
  for(const m of messages){steps.innerHTML+=`<div>${m}</div>`;await sleep(450)}
  originalHash=await sha256(full);
  document.getElementById("dns").textContent=`${selector}._domainkey.${domain}\\nTYPE: TXT\\nv=DKIM1; k=rsa; p=SIMULATED_PUBLIC_KEY...`;
  document.getElementById("originalText").textContent=originalMessage;
  result.className="status pass";result.textContent="✓ DKIM = PASS";
  document.getElementById("verifyText").textContent="The received signed content matches the content that was verified in this educational simulation.";
  steps.innerHTML+=`<div><b>✓ Verification complete: DKIM PASS</b><br><small>Message SHA-256: ${originalHash.slice(0,32)}...</small></div>`;
};

document.getElementById("attackBtn").onclick = async () => {
 if(!originalMessage){alert("Please run 'Sign & Send Email' first.");return}
 const tampered=document.getElementById("tampered").value;
 const tamperedHash=await sha256(document.getElementById("subject").value+"\\n"+tampered);
 const same=tamperedHash===originalHash;
 const r=document.getElementById("attackResult");
 r.className="status "+(same?"pass":"fail");
 r.textContent=same?"✓ DKIM = PASS":"✗ DKIM = FAIL — MESSAGE MODIFICATION DETECTED";
 document.getElementById("hashCompare").innerHTML=`
 <div class="panel"><b>Original SHA-256</b><br><code>${originalHash}</code></div>
 <div class="panel"><b>Received SHA-256</b><br><code>${tamperedHash}</code></div>`;
};

document.getElementById("analyzeBtn").onclick=async()=>{
 const headers=document.getElementById("headers").value;
 const res=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({headers})});
 const d=await res.json();
 const status=x=>x==="PASS"?"good":x==="FAIL"?"bad":"";
 document.getElementById("analysis").innerHTML=[
 ["SPF",d.spf],["DKIM",d.dkim],["DMARC",d.dmarc],["DKIM DOMAIN",d.domain],["SELECTOR",d.selector]
 ].map(([a,b])=>`<div><strong>${a}</strong><span class="${status(b)}">${b}</span></div>`).join("");
};
