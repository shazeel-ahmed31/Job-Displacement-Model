# Job Displacement Model

An interactive tool designed to evaluate the risk and projected timeline of workplace automation and AI-driven job displacement across diverse industries and professions[cite: 4, 5, 7].

---

## Screenshots

<div align="center">
  <h3>Input Form & Parameters</h3>
  <img src="screenshots/job-analysis-input.png" alt="Job Analysis Input Form" width="450"/>
  <p><em>Configure job role, skillset complexity, repetitive task percentage, and sector[cite: 7].</em></p>
</div>

<br/>

<div align="center">
  <h3>Analysis & Output Results</h3>
  <img src="screenshots/analysis-results.png" alt="Automation Analysis Results" width="450"/>
  <p><em>Computed automation risk score (0–100) and displacement timeline projection[cite: 4].</em></p>
</div>

---

## Overview

The **Job Displacement Model** provides a data-driven interface to estimate how vulnerable specific roles are to automation[cite: 4, 7]. Users can configure job attributes—such as skill complexity, the proportion of routine or repetitive tasks, industry sector, and economic region—to generate a risk profile and estimated timeline[cite: 4, 5, 7].

---

## Features

- **Granular Job Selection:** Choose from multiple predefined roles across sectors (e.g., Software Developer, Accountant, Cashier, Mechanical Engineer, Nurse)[cite: 6].
- **Customizable Risk Metrics:**
  - **Skillset Complexity Slider:** Scale from basic routine skills (1) to highly specialized expertise (10)[cite: 7].
  - **Repetitive Task Ratio:** Adjust percentage of daily workload composed of routine tasks (0–100%)[cite: 7].
  - **Industry & Regional Context:** Evaluate exposure across diverse sectors (Healthcare, Manufacturing, Technology, Retail, Finance, etc.) and economic regions[cite: 5, 7].
- **Dynamic Analysis Output:**
  - **Automation Risk Score:** A normalized index from 0 to 100 with clear risk tiers (e.g., Low, Moderate, High Risk)[cite: 4].
  - **Displacement Timeline:** Estimated projection window for automation adoption (e.g., 20+ years, 5–10 years)[cite: 4].

---

## Inputs & Parameters

| Parameter | Type | Range / Options | Description |
| :--- | :--- | :--- | :--- |
| **Job Title** | Dropdown | Predefined list | Selected occupational role[cite: 6, 7] |
| **Skillset Complexity** | Slider | `1.0` – `10.0` | 1 = Basic skills, 10 = Highly specialized[cite: 7] |
| **Repetitive Task %** | Slider | `0%` – `100%` | Percentage of tasks that are routine[cite: 7] |
| **Industry Sector** | Dropdown | Multiple industries | Manufacturing, Retail, Healthcare, Tech, etc.[cite: 5, 7] |
| **Economic Region** | Dropdown | Regional sectors | Regional economic classification[cite: 7] |

---

## Getting Started

### Prerequisites

Depending on the environment your project runs on:
- Modern Web Browser (Chrome, Firefox, Edge)
- Python 3.8+ (if utilizing a local server or backend API)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shazeel-ahmed31/Job-Displacement-Model.git](https://github.com/shazeel-ahmed31/Job-Displacement-Model.git)
