const { test } = require('node:test');
const assert = require('node:assert/strict');
const { calculateExposure } = require('../scripts/exposure');
const base = {job_title:'Accountant',industry:'Finance',location:'Developed',skillset_complexity:5,repetitive_percentage:50};
test('documented examples and region multiplier', () => {
 assert.equal(calculateExposure(base).automation_risk_score, 50);
 assert.equal(calculateExposure({...base,job_title:'Data Entry Clerk',skillset_complexity:2,repetitive_percentage:85}).automation_risk_score,100);
 assert.equal(calculateExposure({...base,job_title:'Software Developer',skillset_complexity:9,repetitive_percentage:25}).automation_risk_score,0);
 assert.equal(calculateExposure({...base,location:'Developing'}).automation_risk_score,40);
});
test('clamps both extremes and rejects malformed inputs', () => {
 for (const data of [null, {...base,job_title:'Unknown'}, {...base,industry:'Other'}, {...base,location:''}, {...base,skillset_complexity:NaN}, {...base,skillset_complexity:11}, {...base,repetitive_percentage:-1}, {...base,repetitive_percentage:'50'}, {...base,repetitive_percentage:Infinity}]) assert.throws(() => calculateExposure(data));
});
test('score boundaries use the displayed rounded score consistently', () => {
 for (const [score,level,timeline] of [[20,'Low','20+ years'],[20.1,'Low','10-20 years'],[40,'Low','10-20 years'],[40.1,'Medium','5-10 years'],[70,'Medium','5-10 years'],[70.1,'High','0-5 years']]) {
  const result=calculateExposure({...base,repetitive_percentage:50+(score-50)/0.8});
  assert.equal(result.automation_risk_score,score); assert.equal(result.risk_level,level); assert.equal(result.displacement_timeline,timeline);
 }
});
test('repetition increases and complexity decreases exposure across supported ranges', () => {
 let last=-1;
 for(let r=0;r<=100;r++){const s=calculateExposure({...base,repetitive_percentage:r}).automation_risk_score;assert.ok(s>=last && s>=0 && s<=100);last=s;}
 last=101;
 for(let c=1;c<=10;c+=0.1){const s=calculateExposure({...base,skillset_complexity:c}).automation_risk_score;assert.ok(s<=last);last=s;}
});
test('industry affects suggestions only; results are deterministic', () => {
 assert.deepEqual(calculateExposure(base),calculateExposure(base));
 const other=calculateExposure({...base,industry:'Healthcare'});
 assert.equal(other.automation_risk_score,50);assert.notDeepEqual(other.future_proof_suggestions,calculateExposure(base).future_proof_suggestions);
});
