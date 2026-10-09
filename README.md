# Job Displacement Model

An interactive tool designed to evaluate the risk and projected timeline of workplace automation and AI-driven job displacement across diverse industries and professions.

---

## Overview

The **Job Displacement Model** provides a data-driven interface to estimate how vulnerable specific roles are to automation. Users can configure job attributes—such as skill complexity, the proportion of routine or repetitive tasks, industry sector, and economic region—to generate a risk profile and estimated timeline.

---

## Features

- **Granular Job Selection:** Choose from multiple predefined roles across sectors (e.g., Software Developer, Accountant, Cashier, Mechanical Engineer, Nurse).
- **Customizable Risk Metrics:**
  - **Skillset Complexity Slider:** Scale from basic routine skills (1) to highly specialized expertise (10).
  - **Repetitive Task Ratio:** Adjust percentage of daily workload composed of routine tasks (0–100%).
  - **Industry & Regional Context:** Evaluate exposure across diverse sectors (Healthcare, Manufacturing, Technology, Retail, Finance, etc.) and economic regions.
- **Dynamic Analysis Output:**
  - **Automation Risk Score:** A normalized index from 0 to 100 with clear risk tiers (e.g., Low, Moderate, High Risk).
  - **Displacement Timeline:** Estimated projection window for automation adoption (e.g., 20+ years, 5–10 years).

---

## Inputs & Parameters

| Parameter | Type | Range / Options | Description |
| :--- | :--- | :--- | :--- |
| **Job Title** | Dropdown | Predefined list | Selected occupational role |
| **Skillset Complexity** | Slider | `1.0` – `10.0` | 1 = Basic skills, 10 = Highly specialized |
| **Repetitive Task %** | Slider | `0%` – `100%` | Percentage of tasks that are routine |
| **Industry Sector** | Dropdown | Multiple industries | Manufacturing, Retail, Healthcare, Tech, etc. |
| **Economic Region** | Dropdown | Regional sectors | Regional economic classification |

---

## Getting Started

### Prerequisites

Depending on the environment your project runs on (e.g., Python / Node / HTML):
- Web browser (for standalone frontend builds)
- Python 3.8+ (if utilizing a backend server / notebook)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shazeel-ahmed31/Job-Displacement-Model.git](https://github.com/shazeel-ahmed31/Job-Displacement-Model.git)
