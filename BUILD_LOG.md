
# Prompt 1
## Generate The Entire Application Shell

Create a professional enterprise SaaS application called Enterprise Customer Success Simulator.

Technology:
- Next.js 15
- TypeScript
- Tailwind

Layout:
- Left navigation
- Top customer header
- Responsive design

Pages:
1. Customer Discovery
2. Observability Assessment
3. First Value Plan
4. Incident Command Center
5. Business Value Dashboard
6. Account Health
7. Expansion Opportunities
8. Executive Review

Use mock data.
Generate all routes and navigation.

# Prompt 2
## Build Customer Discovery

Create a customer discovery workshop page.

Display:
- Business goals
- Technical challenges
- Executive concerns
- Success metrics

Use professional consulting style cards.

# Prompt 3
## Build Observability Assessment

Create an observability maturity assessment.

Categories:
Infrastructure Monitoring
APM
Distributed Tracing
Alert Quality
Dashboard Adoption

Display current score and recommendations.

# Prompt 4
## Build Account Health

Create an account health score engine.

Inputs:
- Active users
- Dashboard usage
- Instrumented services
- Alert adoption
- Executive engagement

Output:
Health score
Risk level
Recommendations

# Prompt 5
## Incident Command Center

Create an incident response simulator.

Scenario:
Checkout outage

Show:
Timeline
APM traces
Infrastructure metrics
Deployment events
Root cause analysis

Root cause:
Slow SQL query introduced during deployment.

# Prompt 6
## Create the First Value Plan 

Create the First Value Plan page for the existing Enterprise Customer Success Simulator app.

Add a 30-day onboarding plan focused on achieving first value within 30 days.

Timeline:
1. Days 1-10: Infrastructure Visibility
2. Days 11-20: Java APM Instrumentation
3. Days 21-30: Executive Value Review

For each phase, show:
- Milestones
- Expected outcomes
- Success metrics
- Status

Use the existing layout, navigation, styling, TypeScript, Tailwind CSS, and mock data patterns already present in the app.

If the First Value Plan route or sidebar item already exists, update it instead of creating a duplicate.
If it does not exist, create the route and add it to the sidebar navigation.
Do not change framework versions or restructure the entire application.

# Prompt 7
## Business Value Dashboard

Create an executive value dashboard.

Compare:

Before New Relic:
MTTR 90 minutes
12 incidents/month
97% SLA

After New Relic:
18 minute MTTR
5 incidents/month
99.9% SLA

Calculate annual savings.

# Prompt 8
## Expansion Opportunity Engine

Create an expansion recommendation engine.

Current products:
Infrastructure Monitoring
APM

Missing:
Browser Monitoring
Distributed Tracing
Mobile Monitoring

Show business impact and revenue opportunity.

# Prompt 9
## Executive Business Review

Create a board-ready QBR page.

Sections:
Objectives
Achievements
Business Outcomes
Risks
Recommendations
Next Quarter Plan

Use executive presentation style.

# Prompt 10
## TSM Decision Simulator

Create interactive customer success scenarios.

Scenario:
Platform adoption dropped 25%.

Present four possible actions.

Explain why the best action is correct.

Track decision quality.

# Prompt 11
## Customer Intelligence Hub

Build a new Customer Intelligence Hub module for the existing Enterprise Customer Success Simulator app.

Add a new sidebar navigation item called Customer Intelligence Hub.

The page should show how Salesforce, Slack, and Staging/Product Usage data could be fed into the simulator using mock data sources.

Create three mock data files:
- data/salesforce-signals.ts
- data/slack-signals.ts
- data/staging-usage-signals.ts

Create a reusable health scoring utility that combines these signals into:
- Unified health score
- Risk level
- Key risk reasons
- Recommended TSM action

Page sections:
1. Salesforce Signals
2. Slack Signals
3. Staging/Product Usage Signals
4. Unified Customer Health Insight
5. Recommended Action Plan

Use existing layout, navigation, styling, TypeScript, Tailwind CSS, and mock data patterns already present in the app.

Do not use real Salesforce or Slack APIs yet.
Do not add authentication.
Do not restructure the application.
