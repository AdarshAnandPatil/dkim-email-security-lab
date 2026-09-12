const express=require('express');
const path=require('path');
const crypto=require('crypto');
const app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

function hash(s){return crypto.createHash('sha256').update(s).digest('hex');}

app.post('/api/sign',(req,res)=>{
 const {domain='college-example.com',selector='demo',subject='',message=''}=req.body;
 const canonical=`from:${domain}\nsubject:${subject.trim()}\nbody:${message.trim()}`;
 const bodyHash=hash(message.trim());
 // Educational simulation: deterministic signature represents signing.
 const signature=hash(canonical+'|PRIVATE_KEY_SIMULATION|'+domain+'|'+selector);
 res.json({
   canonical, bodyHash, signature,
   header:`DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=${domain}; s=${selector}; h=from:subject; bh=${bodyHash}; b=${signature}`,
   dns:`${selector}._domainkey.${domain}`,
   publicKey:'PUBLIC_KEY_SIMULATION_RSA_SHA256',
   result:'PASS'
 });
});

app.post('/api/verify',(req,res)=>{
 const {domain='college-example.com',selector='demo',subject='',originalMessage='',receivedMessage=''}=req.body;
 const original=`from:${domain}\nsubject:${subject.trim()}\nbody:${originalMessage.trim()}`;
 const received=`from:${domain}\nsubject:${subject.trim()}\nbody:${receivedMessage.trim()}`;
 const expected=hash(original+'|PRIVATE_KEY_SIMULATION|'+domain+'|'+selector);
 const actual=hash(received+'|PRIVATE_KEY_SIMULATION|'+domain+'|'+selector);
 const pass=expected===actual;
 res.json({result:pass?'PASS':'FAIL',expected,actual,reason:pass?
 'Signed content is unchanged in this educational simulation.':
 'The received content differs from the content represented by the original signature.'});
});
app.listen(process.env.PORT||3000,()=>console.log('DKIM Lab running'));
