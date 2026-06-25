
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

# Prompt 12

Build the strongest possible Executive Business Review preparation feature inside the existing Enterprise Customer Success Simulator app.

Feature name:
Prepare Executive Business Review

Important:
This should NOT be a basic deck export.
It should act like a TSM executive briefing assistant that turns customer signals into a customer-facing CBR/QBR story.

Context:
A hiring manager suggested adding the ability to create a deck in the QBR section.
The goal is to synthesize Customer Intelligence Hub data with QBR content so a Technical Success Manager can prepare for an executive customer review.

Use existing mock data and existing app structure from:
- Customer Intelligence Hub / Intelligence tab
- Salesforce-style account signals
- Slack-style engagement signals
- Staging/product usage signals
- Account Health
- Business Value Dashboard
- Incident Command Center
- Expansion Opportunities
- First Value Plan
- Customer Discovery
- QBR / Executive Review

Add a button in the QBR / Executive Review section:
"Prepare Executive Business Review"

When clicked, show a polished deck-style briefing preview with these sections/slides:

1. Key Messages for the TSM
- 3 concise executive talking points
- Focus on value delivered, emerging risks, and the recommended customer conversation

2. Executive Summary
- Customer name
- Health score
- Renewal timeline
- ARR if available
- Overall account status
- One clear narrative summary

3. Customer Goals vs Progress
- Pull from customer discovery goals
- Show progress against reliability, adoption, incident response, and executive visibility goals

4. Intelligence Signals
- Salesforce-style signals: renewal, ARR, risk status, expansion opportunity
- Slack-style signals: escalations, open threads, sentiment
- Usage/staging signals: adoption trend, dashboard usage, instrumentation coverage
- Explain what these signals mean, not just display metrics

5. Value Realized
- Include MTTR improvement
- Incident reduction
- SLA improvement
- Annual savings or business value estimate
- Present this in executive-friendly language

6. Risks and Root Causes
- Identify adoption decline, escalation increase, renewal risk, or instrumentation gaps
- Explain why these risks matter to the customer and to the TSM

7. Recommended TSM Action Plan
- Provide a clear 30/60/90-day action plan
- Include executive alignment, adoption workshop, observability rollout, and follow-up review

8. Renewal and Expansion Strategy
- Show renewal confidence
- Show expansion opportunity
- Recommend next best expansion motion, such as Browser Monitoring or Distributed Tracing
- Tie recommendation to customer outcomes, not just product features

9. Suggested Customer Discussion Questions
- Add 4-5 questions a TSM should ask during the CBR/QBR
- Questions should uncover adoption blockers, executive priorities, operational gaps, and expansion readiness

Add a small section at the top or bottom:
"Briefing generated from"
with chips/badges for:
- Salesforce signals
- Slack signals
- Product usage signals
- Account health
- Incident history
- Business value metrics
- Expansion recommendations

Add actions:
- Print / Export using browser print
- Back to QBR
- Link or CTA from the Customer Intelligence Hub to prepare the Executive Business Review

Implementation rules:
- Use existing mock data only
- Do not add real APIs
- Do not add authentication
- Do not restructure the whole app
- Do not change framework versions
- Keep all styling consistent with the current app
- Use TypeScript and Tailwind
- Keep it responsive
- Make it polished and executive-ready
- Avoid generic placeholder text
- Make the generated briefing feel like a real New Relic-style Customer Business Review preparation flow

Success criteria:
The feature should make it clear that the app does not just show dashboards. It helps a Technical Success Manager turn fragmented customer intelligence into an executive-ready customer success story.

# Prompt 13

Upgrade the exported Executive Business Review deck so it looks enterprise-level and customer-facing.

Important:
Do NOT rebuild the feature.
Do NOT change app structure, routing, data model, mock data, framework versions, auth, or APIs.
Focus only on making the exported / printable deck visually polished, executive-ready, and credible.

Problem:
The current deck/export looks too plain. It should feel like a premium enterprise CBR/QBR deck a Technical Success Manager would share with executives.

Goal:
Improve the browser print/export experience and deck preview so each section looks like a professional slide.

Requirements:

1. Create print-optimized slide styling
- Each briefing section should print as a clean slide-like page
- Use consistent slide dimensions/spacing
- Add page-break rules so slides do not split awkwardly
- Hide app navigation/buttons during print
- Keep only deck content visible in print
- Use @media print CSS if needed

2. Make every slide visually stronger
Each slide/card should include:
- Slide number
- Strong title
- Executive subtitle
- Key insight callout
- Supporting metrics or evidence
- Recommendation/TSM action where relevant

3. Add enterprise visual hierarchy
Use Tailwind styling to add:
- Premium header layout
- Subtle gradient backgrounds
- Strong section dividers
- Metric tiles
- Status badges
- Risk severity badges
- Signal source chips
- Clean borders and shadows
- Consistent typography and spacing

4. Add an executive cover slide
Create a first slide for the exported deck:
- Executive Business Review
- Customer name
- Account health
- Renewal timeline
- ARR if available
- Prepared for executive review
- Generated from Salesforce, Slack, product usage, incident, health, value, and expansion signals

5. Improve Value Realized slide
Make this slide visually impressive:
- MTTR improvement
- Incident reduction
- SLA improvement
- Annual savings/business value
Each metric should have:
- Large number
- Business meaning
- Executive-friendly explanation

6. Improve Risks and Root Causes slide
Turn it into a risk matrix:
Columns:
- Risk
- Evidence
- Business impact
- Recommended TSM response

Use severity badges: High, Medium, Low.

7. Improve 30/60/90 Action Plan slide
Turn it into a timeline layout:
- 30 days: stabilize and align
- 60 days: expand adoption
- 90 days: prove value and renew

Each column should include actions, owner/stakeholder, and expected outcome.

8. Improve Renewal and Expansion slide
Make it look like a strategic recommendation:
- Renewal confidence
- Expansion opportunity
- Recommended next-best motion
- Why now
- Customer outcome

Tie Browser Monitoring / Distributed Tracing recommendations to reliability, customer experience, and executive visibility.

9. Improve exported deck polish
- Add footer on each slide with customer name and “Executive Business Review”
- Add source badges where useful
- Make printed output readable in PDF
- Avoid cramped content
- Avoid generic placeholder text
- Use existing mock data only

10. Keep responsive screen preview
- Desktop should look like deck cards
- Mobile should stack cleanly
- Print/PDF should look like a real executive deck

Success criteria:
When I click Print / Export and save as PDF, the output should look like a polished enterprise Customer Business Review deck, not a plain web page.

A hiring manager should immediately see that this feature demonstrates:
- executive storytelling
- customer intelligence synthesis
- renewal risk thinking
- expansion strategy
- Technical Success Manager business judgment

# Prompt 14

Fix the Executive Business Review print/export PDF layout.

Problem:
The web page deck preview looks good, but when I use browser Print / Save as PDF:
- slide content overruns into the next slide
- one slide overlaps or spills into another
- the exported PDF does not match the web app preview

Do NOT redesign the feature.
Do NOT change mock data, routing, app structure, framework versions, APIs, or auth.
Only fix print/PDF layout behavior.

Requirements:

1. Add print-specific CSS using @media print
- Hide app navigation, buttons, CTAs, and non-deck UI during print
- Print only the Executive Business Review deck content
- Ensure each slide starts on a new page
- Prevent slide content from overlapping the next slide

2. Add proper page break rules
Apply print classes to each slide/card:
- break-before: page where needed
- break-after: page
- break-inside: avoid
- page-break-inside: avoid

3. Fix slide height behavior
Do NOT force fixed screen heights that cause overflow in print.
Use print-safe sizing:
- min-height instead of fixed height where possible
- allow content to flow within the same slide page
- reduce padding/font sizes in print if needed
- avoid absolute positioning for slide content unless necessary

4. Add print page settings
Use CSS like:
@page {
  size: A4 landscape;
  margin: 12mm;
}

5. Make print match preview as closely as possible
- Keep slide card styling
- Keep headings, badges, metric tiles, risk matrix, and timeline readable
- Ensure no content is cut off
- Ensure no slide overlaps another
- Ensure every slide exports cleanly as its own PDF page

6. Add reusable print-safe classes if needed
Example intent:
- print:shadow-none
- print:border
- print:break-after-page
- print:overflow-visible
- print:h-auto
- print:min-h-[calc(100vh-or-page-safe-height)]

7. Test mentally for browser Save as PDF
The result should work in Chrome browser print/save as PDF.

Success criteria:
When I click Print / Export and save as PDF:
- each Executive Business Review section becomes a clean PDF page
- no slide content overruns into another slide
- no overlapping content
- no content is cut off
- exported PDF looks close to the webpage deck preview

# Prompt 15

 The browser Print / Save as PDF export is still ugly and does not match the Executive Business Review deck preview.

Change the export approach.

Goal:
When the user exports the Executive Business Review deck, the PDF should visually match the deck cards shown in the web application as closely as possible.

Important:
Do NOT change mock data, routing, auth, APIs, framework versions, or app structure.
Keep the current web preview UI.
Only replace/improve the export mechanism.

Implement a client-side PDF export using a screenshot-based approach instead of browser print.

Preferred approach:
- Use html2canvas to capture each deck slide/card as rendered in the browser
- Use jsPDF to generate a PDF
- Add each captured slide as one PDF page
- Use landscape orientation
- Preserve colors, gradients, cards, badges, spacing, typography, and layout from the web preview

Requirements:
1. Add a ref or data attribute to each Executive Business Review slide/card.
2. On Export PDF click:
   - capture each slide one by one using html2canvas
   - convert each captured slide to an image
   - add each image to jsPDF as a separate page
3. Ensure:
   - no slide content overlaps another slide
   - no content is cut off
   - exported PDF matches the on-screen slide design
   - buttons/navigation are not captured
   - each slide is centered and scaled correctly on the PDF page
4. Use high-quality capture settings:
   - scale: 2 or higher
   - useCORS: true
   - backgroundColor matching the app background
5. Add loading state:
   - “Generating PDF…”
   - disable export button while PDF is being generated
6. Keep browser print as fallback only if needed.
7. Do not introduce server-side PDF generation.
8. Keep TypeScript clean and avoid unsafe any where possible.

Success criteria:
The exported PDF should look like screenshots of the actual deck slides in the application, not like a browser print version.

# Encountered an error
# Prompt 16

We are using Tailwind CSS v4 and html2canvas for PDF export.

The export fails with:
"Attempting to parse an unsupported color function 'lab'"

Root cause:
html2canvas does not support modern CSS color functions such as lab(), oklab(), lch(), or oklch(), which may come from Tailwind v4 computed styles.

Fix the PDF export without downgrading Tailwind.

Requirements:
1. Keep the web app UI unchanged.
2. Before html2canvas captures each slide, clone the slide into an off-screen export container.
3. Normalize unsupported computed colors in the cloned slide only.
4. Convert computed styles using lab(), oklab(), lch(), or oklch() into browser-supported rgb() values before capture.
5. Apply normalized values for:
   - color
   - backgroundColor
   - borderColor
   - outlineColor
   - textDecorationColor
   - boxShadow if needed
6. Avoid changing the live visible deck.
7. Then pass the cloned, normalized slide to html2canvas.
8. Keep TypeScript clean.
9. Preserve the deck’s visual appearance as closely as possible.

Success criteria:
- PDF export no longer throws unsupported color function errors.
- Exported PDF visually matches the on-screen deck.
- No app-wide Tailwind downgrade.
- No changes to mock data, routing, app structure, auth, or APIs.

# Prompt 17

Remove the browser Print fallback from the Executive Business Review feature.

Goal:
The Executive Business Review should have a single, polished export experience.

Requirements:

- Remove the browser Print / window.print() functionality.
- Remove any "Print" buttons, menu items, or fallback logic.
- Keep only one action:
  "Export Executive Business Review (PDF)"
- Ensure this button uses the existing client-side PDF generation flow.
- Remove any unused print-specific code if it is no longer needed, including:
  - window.print()
  - print event handlers
  - print-only buttons
  - obsolete @media print styles that are no longer required
- Keep the rest of the feature unchanged.
- Do not modify routing, mock data, app structure, framework versions, authentication, or APIs.
- Keep the UI clean and consistent with the rest of the application.

Success criteria:
Users have a single, high-quality "Export PDF" experience with no browser print option or related code.

