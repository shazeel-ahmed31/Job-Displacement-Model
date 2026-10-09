
        // Update range input displays
        document.getElementById('skillsetComplexity').addEventListener('input', function() {
            document.getElementById('skillsetValue').textContent = this.value;
        });

        document.getElementById('repetitivePercentage').addEventListener('input', function() {
            document.getElementById('repetitiveValue').textContent = this.value + '%';
        });

        // Form submission handler
        document.getElementById('jobForm').addEventListener('submit', function(e) {
            e.preventDefault();
            analyzeJob();
        });

        function analyzeJob() {
            const form = document.getElementById('jobForm');
            if (!form.reportValidity()) return;
            document.getElementById('formStatus').textContent = '';
            const formData = new FormData(form);

            // Show loading state
            const btn = document.querySelector('.analyze-btn');
            btn.querySelector('.btn-text').style.display = 'none';
            btn.querySelector('.btn-loader').style.display = 'inline';
            btn.disabled = true;

            // Simulate API call with mock data
            try {
                const jobData = {
                    job_title: formData.get('jobTitle'),
                    skillset_complexity: parseFloat(formData.get('skillsetComplexity')),
                    repetitive_percentage: parseFloat(formData.get('repetitivePercentage')),
                    industry: formData.get('industry'),
                    location: formData.get('location')
                };

                // Mock prediction logic
                const mockResult = calculateExposure(jobData);
                displayResults(mockResult);

                // Reset button
                btn.querySelector('.btn-text').style.display = 'inline';
                btn.querySelector('.btn-loader').style.display = 'none';
                btn.disabled = false;
            } catch (error) {
                document.getElementById("formStatus").textContent = error.message;
            } finally {
                btn.querySelector(".btn-text").style.display = "inline";
                btn.querySelector(".btn-loader").style.display = "none";
                btn.disabled = false;
            }
        }

        function displayResults(result) {
            // Show results section
            document.getElementById('resultsSection').style.display = 'block';
            document.getElementById('resultsSection').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });

            // Update risk score
            document.getElementById('riskScore').textContent = result.automation_risk_score + '/100';
            document.getElementById('riskLevel').textContent = result.risk_level + ' illustrative exposure';

            // Update risk level styling
            const riskLevel = document.getElementById('riskLevel');
            riskLevel.className = 'risk-level ' + result.risk_level.toLowerCase() + '-risk';

            // Update risk bar
            const riskFill = document.getElementById('riskFill');
            riskFill.style.width = result.automation_risk_score + '%';
            riskFill.className = 'risk-fill ' + result.risk_level.toLowerCase() + '-risk';

            // Update timeline
            document.getElementById('timelineValue').textContent = result.displacement_timeline;

            // Update suggestions
            const suggestionsList = document.getElementById('suggestionsList');
            suggestionsList.innerHTML = '';
            result.future_proof_suggestions.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion;
                suggestionsList.appendChild(li);
            });

            // Update insights
            const insights = generateInsights(result);
            document.getElementById('insightsContent').textContent = insights;
            document.getElementById('resultsHeading').focus();
        }

        function generateInsights(result) {
            return `${result.risk_level} exposure under this project's fixed assumptions. The score is an illustrative index, not a probability of job loss. The timeline is an arbitrary scenario band derived from the same score, not an independently validated forecast. Industry changes the career ideas only; it does not change the score. Career ideas are prompts to explore, not guaranteed safe jobs.`;
        }
