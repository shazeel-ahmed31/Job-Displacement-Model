const OPTIONS = {"jobTitle": ["Data Entry Clerk", "Cashier", "Assembly Line Worker", "Truck Driver", "Accountant", "Customer Service Rep", "Software Developer", "Teacher", "Doctor", "Lawyer", "Marketing Manager", "Sales Representative", "Graphic Designer", "Mechanical Engineer", "Nurse", "Chef", "Security Guard", "Janitor", "Bank Teller", "Receptionist"], "industry": ["Manufacturing", "Retail", "Healthcare", "Technology", "Finance", "Education", "Transportation", "Hospitality", "Construction"], "location": ["Developed", "Developing"]};
function validateInput(data) {
  if (!data || !OPTIONS.jobTitle.includes(data.job_title) || !OPTIONS.industry.includes(data.industry) || !OPTIONS.location.includes(data.location)) throw new TypeError("Choose a listed job, industry, and region.");
  for (const [key, min, max] of [["skillset_complexity",1,10],["repetitive_percentage",0,100]]) {
    if (!Number.isFinite(data[key]) || data[key] < min || data[key] > max) throw new RangeError("Input outside supported range: " + key);
  }
}
function calculateExposure(jobData) {
    validateInput(jobData);
            // Simple mock prediction logic
            let riskScore = 50;

            // Adjust based on repetitive percentage
            riskScore += (jobData.repetitive_percentage - 50) * 0.8;

            // Adjust based on skillset complexity (inverse relationship)
            riskScore -= (jobData.skillset_complexity - 5) * 8;

            // Adjust based on job title
            const highRiskJobs = ['Data Entry Clerk', 'Cashier', 'Assembly Line Worker', 'Bank Teller'];
            const lowRiskJobs = ['Software Developer', 'Doctor', 'Teacher', 'Lawyer'];

            if (highRiskJobs.includes(jobData.job_title)) {
                riskScore += 20;
            } else if (lowRiskJobs.includes(jobData.job_title)) {
                riskScore -= 25;
            }

            // Adjust for location
            if (jobData.location === 'Developing') {
                riskScore *= 0.8;
            }

            riskScore = Math.round(Math.max(0, Math.min(100, riskScore)) * 10) / 10;

            const timeline = riskScore > 70 ? '0-5 years' :
                           riskScore > 40 ? '5-10 years' :
                           riskScore > 20 ? '10-20 years' : '20+ years';

            const suggestions = getSuggestions(jobData.industry, riskScore);

            return {
                automation_risk_score: Math.round(riskScore * 10) / 10,
                displacement_timeline: timeline,
                future_proof_suggestions: suggestions,
                risk_level: riskScore > 70 ? 'High' : riskScore > 40 ? 'Medium' : 'Low'
            };
        }

        function getSuggestions(industry, riskScore) {
            const suggestionMap = {
                'Technology': ['AI/ML Engineer', 'Cybersecurity Specialist', 'Cloud Architect', 'DevOps Engineer'],
                'Healthcare': ['Mental Health Counselor', 'Nurse Practitioner', 'Healthcare Data Analyst', 'Telemedicine Specialist'],
                'Finance': ['Financial Analyst', 'Risk Management Specialist', 'Fintech Developer', 'Investment Advisor'],
                'Education': ['Online Learning Designer', 'Educational Technology Specialist', 'Curriculum Developer', 'Corporate Trainer'],
                'Manufacturing': ['Automation Engineer', 'Quality Control Specialist', 'Supply Chain Analyst', 'Industrial Designer'],
                'Retail': ['E-commerce Manager', 'Customer Experience Designer', 'Digital Marketing Specialist', 'Brand Manager']
            };

            return suggestionMap[industry] || ['Data Analyst', 'Project Manager', 'Business Consultant', 'Digital Marketing Specialist'];
        }


if (typeof module !== "undefined") module.exports = { calculateExposure };
