Data Mentah di MySQL → Ekspor ke CSV → Pembersihan di Excel → Impor ke Tableau → Analisis & Visualisasi di Tableau → Ekspor Laporan (PDF/Image/Link) → Presentasi Hasil

Atau alur yang lebih efisien untuk data besar:
Data di MySQL → Pembersihan & Agregasi via SQL → Koneksi Langsung Tableau ke MySQL → Analisis & Visualisasi di Tableau → Presentasi Hasil



PHASE 1: BUSINESS UNDERSTANDING & PLANNING (Perumusan Masalah)
Goal: Do not touch the data until you know exactly what you are looking for.
Step 1.1: The Stakeholder Interview (Defining the "Pain")
Focus: Understanding the business problem clearly.
[Standard Path]
•	Action: Schedule a kick-off meeting. Avoid vague goals like "Fix sales."
•	Ask the "5 Ws":
o	Who is affected? (e.g., New customers or old ones?)
o	What is the specific problem? (e.g., Sales dropped by 20% in Q3).
o	Where is it happening? (e.g., Only in Jakarta region?).
o	When did it start?
o	Why does this matter now? (Business impact).
[AI-Enhanced Path]
•	Context Prompt: "Act as a Senior Data Analyst Manager. I have been asked to analyze [Problem, e.g., High Employee Turnover]. What are the top 5 questions I must ask the stakeholders to clarify the requirements before I start?"
•	Refinement Prompt: "My stakeholder says 'Sales are bad.' Rewrite this into a SMART objective (Specific, Measurable, Achievable, Relevant, Time-bound)."
________________________________________
Step 1.2: Data Potential Assessment (The "Inventory")
Focus: Understanding what is possible with the data you have.
[Standard Path]
•	Action: Open your dataset (Excel/SQL) and look at the headers (columns).
•	Check: Do I have dates? Do I have customer IDs? Do I have financial values?
•	Feasibility: Can I actually answer the stakeholder's question with this specific data?
[AI-Enhanced Path]
•	The "Discovery" Prompt (Crucial):
"I have a dataset with the following columns: [Paste Column Headers, e.g., Date, Product_ID, Quantity, Unit_Price, Customer_City]. Based on these columns, what specific business insights, trends, or patterns can I generate? List 10 potential analysis ideas."
•	The "Gap" Prompt:
"I need to calculate [Metric, e.g., Customer Retention Rate]. Based on the columns above, do I have enough data? If not, what column is missing?"
________________________________________
Step 1.3: Hypotheses & KPI Definition (The "Strategy")
Focus: Guessing the cause and choosing how to measure it.
[Standard Path]
•	Hypothesis: Make an educated guess. Example: "I believe sales dropped because we stopped marketing on Instagram."
•	Select KPIs: Choose the math to prove it.
o	Metric: Revenue.
o	KPI: Year-over-Year (YoY) Revenue Growth %.
[AI-Enhanced Path]
•	Hypothesis Prompt:
"The business problem is [Problem]. List 5 logical hypotheses (theories) for why this is happening that I should test with data."
•	KPI Prompt:
"What are the standard Industry KPIs for [Industry, e.g., E-commerce Fashion]? Give me the formula for each."
________________________________________
Step 1.4: Project Roadmap & Tool Selection (The "Plan")
Focus: Organizing your workflow.
[Standard Path]
•	Select Tool:
o	< 1 Million Rows: Excel (Power Query/Pivot).
o	> 1 Million Rows: SQL + Tableau/Power BI.
o	Predictive/Complex: Python (Pandas).
•	Timeline: Day 1 (Cleaning), Day 2 (Analysis), Day 3 (Dashboard).
[AI-Enhanced Path]
•	Planning Prompt:
"Create a step-by-step project checklist for this analysis. Start from data cleaning and end with the final presentation. Estimate the time required for each step."
________________________________________
Summary Table: The Phase 1 "Prompt Cheatsheet"
Step	Goal	Copy-Paste this Prompt
1.1	Clarify Problem	"My boss wants to solve [Problem]. What specific questions should I ask them to define the scope?"
1.2	Check Data	"Here are my columns: [List]. What specific insights or KPIs can I derive from this raw data?"
1.3	Hypothesize	"List 5 potential reasons why [Problem] is happening so I can investigate them."
1.4	Plan	"Create a project timeline for a Data Analysis project involving [Data Size] and [Tools]."
_______________________________________________________________________________
PHASE 2: DATA SOURCING (Pengumpulan Data)
Goal: Acquire high-quality raw materials. Your analysis is only as good as your source.
Step 2.1: Internal Data (The Foundation)
Focus: Extracting data your company already owns (OLTP, CRM, ERP).
[Standard Path]
•	Databases (SQL): Access the company's "Data Warehouse."
o	Action: Connect using a tool like DBeaver or MySQL Workbench.
o	Code: Write a SELECT query to filter specific rows.
o	Example: SELECT * FROM transactions WHERE amount > 1000 AND status = 'completed';
•	Business Systems (No-Code):
o	Action: Log into Salesforce, SAP, or HubSpot.
o	Export: Navigate to "Reports" -> "Export" -> Select CSV or Excel format.
[AI-Enhanced Path]
•	SQL Generation Prompt:
"I need to extract data from a table named Orders. Write a MySQL query to select Order_ID, Date, and Total_Amount, filtering for orders placed in the last 30 days."
•	Debugging Prompt:
"I am getting a syntax error in this SQL query: [Paste Code]. Fix it and explain the mistake."
________________________________________
Step 2.2: External Data (Enrichment)
Focus: Getting data from outside to provide context (Market Trends, Public Info).
[Standard Path]
•	Open Datasets:
o	Action: Download "Ready-to-use" CSV files from Kaggle, Google Dataset Search, or data.go.id (Indonesia).
•	APIs (Application Programming Interfaces):
o	Action: Use Python to "talk" to another app (e.g., pulling Twitter/X data or Weather data).
•	Web Scraping:
o	Action: Use Python (BeautifulSoup or Selenium) to extract data from HTML when no API exists.
o	Warning: Always check the website's Terms of Service before scraping.
[AI-Enhanced Path]
•	API Script Prompt (Vibe Coder Style):
"Write a Python script using the requests library to fetch daily exchange rate data from [API URL] and save the JSON response as a CSV file."
•	Scraping Prompt:
"Write a Python script using BeautifulSoup to scrape product names and prices from this HTML structure: <div class='product'> <span class='name'>Item</span> <span class='price'>$10</span> </div>."
________________________________________
Step 2.3: Manual Data Collection (The "Gap" Filler)
Focus: Creating data that doesn't exist yet.
[Standard Path]
•	Surveys:
o	Action: Create a Google Form or Typeform.
o	Metric: Ensure questions are neutral to avoid biased data.
•	Interviews:
o	Action: Talk to users directly and record their feedback in a spreadsheet (Qualitative Data).
[AI-Enhanced Path]
•	Survey Design Prompt:
"I need to survey customers about why they cancelled their subscription. Suggest 5 unbiased multiple-choice questions that cover Price, Features, and Support."
•	Normalization Prompt:
"I have interview notes in text format. Create a structure/schema to convert this text into a standardized dataset (e.g., Sentiment Score, Key Topic)."
________________________________________
Step 2.4: Data Integration (Merging)
Focus: Bringing all sources into one place.
[Standard Path]
•	Excel Power Query:
o	Action: Data Tab -> Get Data -> From Folder (to combine multiple CSVs).
•	SQL Joins:
o	Action: Import external CSVs into your database and use JOIN to connect them with internal tables.
[AI-Enhanced Path]
•	Merging Strategy Prompt:
"I have a 'Sales' table with Customer_ID and a 'Marketing' CSV with Email_Address. How can I join these two if they don't share a common ID column?"
________________________________________
Summary Table: Sourcing Strategy & Tools
Source Type	Best Tool	Common File Format	Primary Challenge
Internal Database	SQL (MySQL, PostgreSQL)	.sql, .csv	Writing complex joins correctly.
External API	Python (requests, pandas)	.json, .xml	Handling rate limits (blocks).
Web Scraping	Python (BeautifulSoup)	.html -> .csv	Website structure changes; Legal issues.
Open Data	Browser (Kaggle/Gov sites)	.csv, .xlsx	Data quality (missing values).
Manual Survey	Google Forms	.csv (Google Sheets)	Bias in questions; Low response rate.
________________________________________
PHASE 3: DATA CLEANING (Pembersihan Data)
Goal: Make data accurate and consistent. "Garbage in, garbage out."
Essential Configuration
•	Version: Microsoft 365 (Windows) is recommended for full feature access (Power Pivot/Query).
•	Enable Add-ins: Go to File > Options > Add-ins and enable:
o	Analysis ToolPak (Statistical analysis).
o	Power Pivot (Data modeling).
o	Solver (Optimization).
Scenario A: Microsoft Excel (The 10-Step Manual Guide)
Best for: Small to Medium datasets (< 1M rows) requiring visual inspection.
Step 1: Save, Auto-fit, & Table Setup
•	Action: Always save a copy first. Select all data (Ctrl + A) -> Auto-fit columns (Alt + H + O + I).
•	Crucial: Press Ctrl + T to convert the range into a Table (enables dynamic formulas).
Step 2: Remove Parentheses (Clean Text)
•	Goal: Remove text inside brackets like "Client Name (VIP)".
•	Action: Select column -> Ctrl + H (Find & Replace).
o	Find what: (*)
o	Replace with: (Leave Blank) -> Click Replace All.
Step 3: Standardize Case (Lowercase)
•	Goal: Fix mixed capitalization (e.g., "JaKarTa" -> "jakarta").
•	Action: Create a new column. Formula: =LOWER(C2).
•	Finalize: Copy the new column -> Right Click -> Paste Values (to remove the formula) -> Delete original column.
Step 4: Clean Names (Trim & Proper)
•	Goal: Remove extra spaces and capitalize the first letter.
•	Action: Create a new column. Formula: =PROPER(TRIM(D2)).
•	Result: " john doe " becomes "John Doe".
Step 5: Split Columns
•	Goal: Separate "Region_Department" into two columns.
•	Action: Data Tab -> Text to Columns -> Delimited -> Select Delimiter (e.g., Underscore _).
Step 6: Remove Duplicates
•	Action: Select Table -> Data Tab -> Remove Duplicates.
•	Note: Ensure "My data has headers" is checked.
Step 7: Fill Blank Cells
•	Action: Select Data -> Ctrl + G (Go To) -> Special -> Blanks.
•	Execute: Type "NA" -> Press Ctrl + Enter (Fills all selected blanks at once).
Step 8: Handle Formula Errors
•	Action: Wrap your lookups to look professional.
•	Formula: =IFERROR(VLOOKUP(...), "Not Found") (Replaces #N/A with text).
Step 9: Format Headers
•	Action: Make headers Bold, change Fill Color (Dark Blue), and Font Color (White) for readability.
Step 10: Remove Gridlines
•	Action: View Tab -> Uncheck Gridlines (or Alt + W + V + G). This makes the dashboard look cleaner.
[AI Acceleration for Excel]
•	Prompt: "I have a column with messy addresses. Write an Excel formula to extract just the text before the first comma."
3. Strategy B: Power Query (Automated/ETL)
For repeatable tasks and complex messes.
•	Location: Data Tab -> Get Data.
•	Key Actions:
o	Unpivot: Transform "wide" data (Months as columns) into "tall" data (Rows) for analysis.
o	Change Type: Force specific columns to be Date, Text, or Currency to prevent errors.
o	Merge Queries: The modern alternative to VLOOKUP for combining tables.
[AI-Enhanced Path for Excel]
•	Formula Generator:
"I have a cell containing 'John Doe - Manager'. Write an Excel formula to extract everything after the hyphen."
•	Power Query Help:
"How do I unpivot columns in Excel Power Query? Give me a step-by-step guide."
________________________________________
Scenario B: MySQL (Large Data Strategy)
Best for: Datasets > 1M rows. Cleaning is done via code (Queries).
Task 1: Remove Duplicates (The Safe Way)
•	Instead of deleting, create a new "Clean" table.
SQL
CREATE TABLE clean_table AS
SELECT DISTINCT * FROM original_table;
Task 2: Handle Missing Values (Nulls)
•	Fill empty cells with a default value.
SQL
UPDATE clean_table
SET column_name = 'Default Value'
WHERE column_name IS NULL;
Task 3: Remove Extra Spaces
•	Clean messy whitespace.
SQL
UPDATE clean_table
SET column_name = TRIM(column_name);
Task 4: Standardize Text Case
•	Make text consistent (Uppercase/Lowercase).
SQL
UPDATE clean_table
SET column_name = UPPER(column_name);
Task 5: Find and Replace
•	Replace specific words directly.
SQL
UPDATE clean_table
SET column_name = REPLACE(column_name, 'Old Text', 'New Text');
Task 6: Fix Data Types
•	Change a "Text" column to a "Number" column for calculation.
SQL
ALTER TABLE clean_table
MODIFY COLUMN price DECIMAL(10,2);
[AI Acceleration for SQL]
•	Prompt: "Write a SQL query to find all rows where the 'Email' column is invalid (does not contain '@')."
________________________________________
Scenario C: Google Sheets (Cloud Smart Features)
Best for: Collaboration and "No-Code" quick fixes.
•	Trim Whitespace (Built-in): No formula needed.
o	Action: Select Cells -> Data -> Data cleanup -> Trim whitespace.
•	Remove Duplicates:
o	Action: Data -> Data cleanup -> Remove duplicates.
•	Cleanup Suggestions (AI):
o	Action: Data -> Data cleanup -> Cleanup suggestions. (Sheets scans for errors automatically).
•	Split Text:
o	Action: Data -> Split text to columns (Auto-detects the separator).
•	Data Validation (Prevention):
o	Action: Data -> Data validation. (Restrict input to valid Emails or Dates only).
[AI Acceleration for Sheets]
•	Prompt: "Write a Google Sheets REGEXMATCH formula to check if a phone number starts with '62'."
________________________________________
Summary: The Cleaning Toolkit Cheat Sheet
Task	Excel Formula/Action	SQL Command	Google Sheets Feature
Remove Spaces	=TRIM(cell)	TRIM(col)	Menu: Data > Cleanup > Trim
Capitalize	=PROPER(cell)	UPPER(col)	=PROPER(cell)
Remove Dups	Data > Remove Duplicates	SELECT DISTINCT	Menu: Data > Cleanup > Remove Dups
Fill Blanks	Ctrl+G > Blanks	WHERE col IS NULL	Find & Replace
Logic Check	=IF(logic, true, false)	CASE WHEN...	=IF(logic, true, false)
________________________________________
PHASE 4: EXPLORATORY DATA ANALYSIS (EDA)
Goal: Find patterns, anomalies, and summary statistics before building the final dashboard.
SECTION 1: THE MASTER FORMULA SHEET (Excel)
Use this table as your daily reference. These are the tools you need to manipulate data.
Category	Formula Name	Syntax / Description	Use Case Example
A. Logical (Decision)	=IF(...)	=IF(logical_test, value_if_true, value_if_false)


Basic True/False check.	Check if Sales > Target.
	=IFS(...)	=IFS(test1, val1, test2, val2, ...)


Multiple conditions. Cleaner than nested IFs.	Grade A, B, C based on score.
	=AND / =OR	=AND(log1, log2) / =OR(log1, log2)


Used inside IF statements to check multiple logic.	Check if Region is "North" AND Sales > 100.
	=IFERROR(...)	=IFERROR(value, value_if_error)


Handles errors gracefully.	Return "0" instead of #DIV/0!.
B. Lookup (Connecting)	=XLOOKUP(...)	(lookup_val, lookup_arr, return_arr, [not_found], [match])


The Gold Standard. Defaults to exact match.	Find Price for a Product ID.
	=VLOOKUP(...)	(lookup_val, table, col_index, [range_lookup])


Legacy. Always use FALSE (0) for exact match.	Old files; finding data in a table.
	=MATCH(...)	=MATCH(lookup_val, lookup_arr, 0)


Returns the numeric position (row number) of an item.	Finding which row "Target" is in.
C. Math & Stats	Aggregation	=SUM(), =AVERAGE(), =COUNT() (numbers), =COUNTA() (text).


Basic math.	Total Revenue, Average Age.
	Conditional Math	=SUMIFS(sum_range, crit_range1, crit1)


=COUNTIFS(crit_range1, crit1)


Crucial. Sums/Counts only if criteria are met.	Sum Revenue where Region="North".
	Analysis	=MEDIAN(): Middle value (ignores outliers).


=MODE.SNGL(): Most frequent value.


=STDEV.S(): Standard deviation (risk).


=QUARTILE.INC(): Breaks data into 25% chunks.	Finding the "real" average when salary data is skewed.
D. Text Manipulation	Trimming	=TRIM(text)


Removes leading/trailing/double spaces.	Cleaning " John Doe " to "John Doe".
	Extraction	=LEFT(), =RIGHT(), =MID()


Extract specific characters from text.	Extracting Area Code from Phone Number.
	Length	=LEN(text)


Counts characters.	Validating ID length (must be 16 digits).
	Combining	=TEXTJOIN(delim, empty, text1)


Superior to CONCATENATE.	Joining "City" and "Zip" with a comma.
	Splitting	=TEXTSPLIT(text, delimiter)


Spills text across columns dynamically.	Splitting "Name_Date" into two columns.
	Standardizing	=UPPER(), =LOWER(), =PROPER()


Changes text case.	Capitalizing names (john -> John).
E. Dates	Intervals	=DATEDIF(start, end, "d")


Calculates days ("d"), months ("m"), or years ("y").	Calculating Customer Age or Tenure.
	Workdays	=NETWORKDAYS(start, end)


Calculates business days (excludes weekends).	Project management timelines.
	Formatting	=TEXT(value, format)


Converts date to text.	=TEXT(A1, "DD-MMM") -> "01-Jan".
F. Dynamic Arrays	=UNIQUE(...)	=UNIQUE(range)


Extracts a list of unique values.	Getting a list of all unique Product Categories.
	=SORT(...)	=SORT(range)


Sorts data dynamically without touching the menu.	Sorting a "Top 10" list automatically.
	=FILTER(...)	=FILTER(array, include)


Creates a dynamic subset of data based on criteria.	Showing only "Active" employees in a separate list.
________________________________________
SECTION 2: EXCEL EDA WORKFLOW (Visual & Interactive)
Best for: Visual exploration and quick summaries (Small/Medium Data).
Step 1: The First Look (Sort, Filter, & Outliers)
•	Action: Click inside your data -> Ctrl + Shift + L (Filter).
•	Check List:
o	Click dropdowns to see Unique Values (Check for typos: "USA" vs "U.S.A").
o	Sort (A-Z / Z-A): Identify extremes. (e.g., Is there a negative Age? Is there a Price of $0?).
o	Conditional Formatting: Home -> Conditional Formatting -> Color Scales. (Green = High, Red = Low).
o	Logic: If Mean $\neq$ Median, you have Outliers. Use Median for the "center."
Step 2: PivotTables (The Engine of Analysis)
•	Action: Insert -> PivotTable.
•	The 4 Magic Boxes:
1.	Filters: The "Global" Switch (e.g., Select "Year=2024" to filter the whole report).
2.	Rows: The "Group By" (e.g., Drag Product Category here). Labels run down the side.
3.	Columns: The "Secondary Group" (e.g., Drag Month here). Labels run across the top.
4.	Values ($\Sigma$): The "Math" (e.g., Drag Sales here).
	Pro Tip: Right-click the number -> Show Values As -> % of Grand Total.
Step 3: Visualization (Patterns)
•	Distribution: Select one numerical column -> Insert Histogram. (Is it a Bell Curve? Is it skewed?).
•	Relationship: Select two numerical columns -> Insert Scatter Plot. (Does Ad Spend go up when Sales go up?).
🤖 AI Acceleration Prompts (Excel):
•	For Formulas: "I need to look up Product_ID in Sheet1 and return Price from Sheet2. Write the XLOOKUP formula for me."
•	For Errors: "My VLOOKUP is returning #N/A but I know the value exists. What are the common reasons for this error?"
•	For Analysis: "I have a dataset with columns [Date, Sales, Region]. Suggest 3 PivotTable layouts to find the most profitable region."
•	For Cleaning: "I have a column with text like 'ID_123_New'. Write a formula to extract just the number '123'."
________________________________________
SECTION 3: SQL EDA WORKFLOW (Code-Based)
Best for: Large datasets (>1M rows) living in a database.
Step 1: Understand Structure
•	Command: DESCRIBE sales_table; (See column names and types).
•	Command: SHOW TABLES; (List all tables).
Step 2: Statistical Summary (Aggregates)
•	Goal: Get the high-level math.
SQL
SELECT
    COUNT(*) AS Total_Rows,
    COUNT(DISTINCT customer_id) AS Unique_Customers,
    AVG(price) AS Avg_Price,
    MIN(price) AS Min_Price,
    MAX(price) AS Max_Price
FROM sales_table;
Step 3: Segmentation (GROUP BY)
•	Goal: Group rows that have the same value (like PivotTable Rows).
SQL
SELECT category, COUNT(*) as Total_Orders
FROM sales_table
GROUP BY category
ORDER BY Total_Orders DESC;
Step 4: Advanced Filtering (HAVING)
•	Goal: Filter the groups, not the individual rows.
SQL
SELECT category, SUM(sales)
FROM sales_table
GROUP BY category
HAVING SUM(sales) > 10000; -- Only show categories with >10k Sales
Step 5: Bad Data Check
•	Goal: Find Nulls or empty strings.
SQL
SELECT * FROM sales_table
WHERE email IS NULL OR email = '';
🤖 AI Acceleration Prompts (SQL):
•	For Query Writing: "Write a SQL query to calculate the top 5 customers by total spending in 2024."
•	For Logic: "Explain the difference between WHERE and HAVING in SQL with a simple example."
•	For Debugging: "My query failed with 'Error Code 1055'. Fix this query: [Paste Code]."
•	For Date Math: "Write a SQL query to calculate the number of days between Order_Date and Ship_Date."
________________________________________
To demonstrate EDA Concepts visually, I will generate two charts:
1.	Histogram: To show "Distribution" (Skewness).
2.	Scatter Plot: To show "Correlation" (Relationship).
Python
import matplotlib.pyplot as plt
import numpy as np

# Generate dummy data
np.random.seed(42)
ages = np.random.normal(35, 10, 1000)  # Normal distribution for Histogram
marketing_spend = np.random.rand(100) * 1000
sales = marketing_spend * 3 + np.random.normal(0, 200, 100)  # Correlated data

# Create subplots
fig, ax = plt.subplots(1, 2, figsize=(12, 5))

# Plot 1: Histogram (Distribution)
ax[0].hist(ages, bins=20, color='skyblue', edgecolor='black')
ax[0].set_title('Histogram: Distribution Analysis\n(Checks for Skewness/Outliers)')
ax[0].set_xlabel('Value')
ax[0].set_ylabel('Frequency')
ax[0].axvline(np.mean(ages), color='red', linestyle='dashed', linewidth=1, label='Mean')
ax[0].legend()

# Plot 2: Scatter Plot (Relationship)
ax[1].scatter(marketing_spend, sales, color='coral', alpha=0.7)
ax[1].set_title('Scatter Plot: Correlation Analysis\n(Checks Relationship between Variables)')
ax[1].set_xlabel('Variable A (e.g. Ad Spend)')
ax[1].set_ylabel('Variable B (e.g. Sales)')

plt.tight_layout()
plt.savefig('eda_concepts.png')
________________________________________
________________________________________
PHASE 5: VISUALIZATION & DASHBOARDING
Goal: Communicate findings visually. Convert raw numbers into a story.
STEP 5.1: THE TOOLKIT (Setup & Strategy)
Choose your tool based on the audience and the data size.
1. Microsoft Excel (Static & Quick)
•	Best For: Ad-hoc analysis, financial reports, and small datasets.
•	Setup Checklist:
o	Clean Canvas: View Tab -> Uncheck Gridlines.
o	PivotCharts: Create charts linked directly to PivotTables.
o	Slicers: Insert -> Slicer. (These are visual buttons to filter data).
o	Report Connections (Crucial): Right-click Slicer -> Report Connections -> Check ALL PivotTables. Result: One button updates every chart instantly.
o	Sparklines: Insert -> Sparklines. (Mini-charts inside a single cell to show trends).
•	Design Tip: Remove "Chart Junk." Delete heavy borders, gridlines, and redundant legends.
2. Tableau (Interactivity King)
•	Best For: Deep exploration and storytelling.
•	Setup Checklist:
o	Connect: Link to MySQL or Excel.
o	Dashboarding: Drag multiple "Sheets" onto a "Dashboard" canvas.
o	Filters & Actions (Superpower): Configure the dashboard so clicking a bar in one chart filters the rest of the page.
o	Maps: Double-click geographic fields (City/Country) for instant mapping.
o	Tooltips: Customize the pop-up box when hovering over data to show extra context.
3. Power BI (Microsoft Ecosystem)
•	Best For: Complex data modeling and enterprise sharing.
•	Setup Checklist:
o	Data Model: Use Power Query to clean and Power Pivot to link tables (Star Schema) before visualizing.
o	DAX (Data Analysis Expressions): Use formulas for custom measures (e.g., Year-over-Year growth) instead of just sums.
o	Cross-Filtering: Clicking a data point filters other visuals automatically.
o	Q&A Visual: Allow users to type questions ("Total sales in May") to generate charts via AI.
4. Looker (Single Source of Truth)
•	Best For: Governed data where definitions must be consistent.
•	Setup Checklist:
o	LookML: Define dimensions and measures in code once. Everyone uses this exact definition for "Profit."
o	Explore: Teach users to use the "Explore" interface to answer their own questions safely.
________________________________________
STEP 5.2: THE CHART SELECTION MATRIX
Use this table to choose the correct visualization for your data.
Goal	Recommended Chart	Excel/Tool Feature
Comparison	Bar Chart (Horizontal) or Column Chart (Vertical)	Standard "Clustered Column".
Trend (Time)	Line Chart	Ensure dates are on the X-axis.
Distribution	Histogram or Box & Whisker	Use "Bins" to group data (e.g., Age 0-10, 11-20).
Relationship	Scatter Plot	Requires two numerical variables (e.g., Spend vs. Sales).
Geography	Map Chart	Requires standard names (ISO codes or correct spelling).
Part-to-Whole	Pie/Donut Chart	Rule: Only use if categories < 6. Otherwise, use a Bar Chart.
KPI / Single Number	Card or Big Number	Large text showing the main metric (Total Revenue).
________________________________________
STEP 5.3: DASHBOARD CONSTRUCTION (The "Vibe" Layout)
Follow the "F-Pattern" layout: Key numbers at the top left, charts in the middle, detailed tables at the bottom.
1.	Storytelling: Context ("Sales dropped") -> Insight ("Inventory issue") -> Recommendation ("Restock ASAP").
2.	Alignment: Select multiple charts -> Shape Format -> Align -> Distribute Horizontally/Vertically.
3.	Color: Use color with purpose. Use grey for "normal" data and a bright color (like Red or Blue) to highlight the insight.
________________________________________
STEP 5.4: AI ACCELERATION (Prompts)
Use these prompts to let Gemini help you design.
Prompt 1: The Chart Advisor
"I have a dataset with [Variable A: e.g., Date] and [Variable B: e.g., Customer Satisfaction Score]. I want to show how satisfaction has changed over time. What is the best chart to use and why?"
Prompt 2: The DAX/Formula Writer (Power BI/Tableau)
"Act as a Power BI Expert. Write a DAX formula to calculate the 'Year-over-Year Growth %'. My table is named Sales and the column is Total_Amount."
Prompt 3: The Design Critic
"I am building a dashboard for [Audience: e.g., CEO]. Suggest a color palette and layout structure that is professional and easy to read."
Prompt 4: The LookML Helper (Looker)
"Write a LookML dimension block for a tier group based on the price column: Low (<20), Medium (20-100), High (>100)."

________________________________________
PHASE 6: REPORTING & PORTFOLIO (Presentasi)
Goal: Data has no value until it is communicated. Deliver insights, not just numbers.
STEP 6.1: DATA STORYTELLING (The Presentation)
Focus: Translating "Code" into "Business Impact".
1. The Narrative Structure (McKinsey Method)
•	Standard Action: Never just paste charts. Use the S-C-R Framework:
o	Situation (Context): "Sales in Q3 dropped by 15% compared to last year."
o	Complication (Insight): "Our analysis shows this is due to stockouts in the 'Electronics' category during the July sale."
o	Resolution (Recommendation): "We recommend increasing 'Electronics' inventory buffer by 20% for Q4 to recover revenue."
2. The Deliverable
•	Standard Action:
o	Slide Deck: 1 slide per insight. Big font, simple charts.
o	Executive Summary: A 1-page PDF summary for busy stakeholders.
[AI Acceleration]
•	Prompt (Executive Summary): "Act as a Lead Data Analyst. I have found that sales dropped due to inventory issues. Write a 1-paragraph Executive Summary for the CEO that highlights the financial impact and the proposed solution."
•	Prompt (Simplification): "Rewrite this technical explanation to be understood by a non-technical marketing manager: [Paste explanation]."
________________________________________
STEP 6.2: THE GITHUB PORTFOLIO (The Technical Proof)
Focus: Showing how you solved the problem (Code & Logic).
1. Repository Setup
•	Standard Action: Create a new Public Repository.
•	Upload Checklist:
o	Raw_Data ( WARNING: Anonymize data first! Never upload real company private data).
o	SQL_Queries.sql (Your cleaning and analysis code).
o	Python_Script.py (If used).
o	Dashboard_Screenshot.png (Image of your final Tableau/Power BI result).
2. The README.md (Crucial)
•	Standard Action: Every repo needs a README.md file. It explains the project to recruiters.
•	Structure:
o	Project Title: Clear and Catchy.
o	Objective: What question were you trying to answer?
o	Tools Used: Excel, SQL, Tableau, etc.
o	Key Findings: Bullet points of your results.
[AI Acceleration]
•	Prompt (README Generator): "Write a professional README.md structure for a Data Analysis project about Customer Churn. Include sections for: Problem Statement, Tools Used (SQL, Tableau), Data Cleaning Method, and Key Insights."
________________________________________
STEP 6.3: LINKEDIN BRANDING (The Social Proof)
Focus: Marketing yourself to recruiters and the community.
1. The Post Structure
•	Standard Action: Do not just post a link. Write a "Hook."
o	The Hook: "Did you know that 20% of customers cause 80% of churn?"
o	The Process: "I analyzed 50,000 rows of sales data using SQL and visualized it in Power BI."
o	The Visual: Attach a high-quality screenshot of your dashboard.
o	The Call to Action: "Check out the full code on my GitHub (Link in comments)."
2. Profile Optimization
•	Standard Action: Add the project to the "Featured" section of your LinkedIn profile.
[AI Acceleration]
•	Prompt (Viral Post): "Draft a LinkedIn post showcasing my new 'E-commerce Sales Dashboard' project. Keep it professional but engaging. Highlight my skills in SQL and Data Visualization. Use emojis moderately."
________________________________________
Summary Checklist: The "Definition of Done"
Component	Requirement	AI Prompt Helper
Data Privacy	CRITICAL: Ensure all sensitive PII (Names, Emails) is removed/faked.	"Write a Python script to mask email addresses in a CSV."
Code Quality	SQL/Python code is commented and indented.	"Add comments to this SQL code explaining what each step does."
Visualization	Dashboard is clean, aligned, and has a title.	"Critique this dashboard layout."
Documentation	GitHub README explains the "Why" and "How".	"Generate a README based on this SQL logic."
Distribution	Project is posted on LinkedIn and pinned to GitHub.	"Write a catchy headline for this project."
________________________________________
________________________________________

The Ultimate Data Analyst Cheat Sheet
A side-by-side comparison of how to do the most common tasks in every tool.
Category	Task / Action	Excel / Sheets Formula	SQL Command	Python (Pandas)
Retrieval	Filter Columns	FILTER(range, condition)	SELECT col FROM table	df['col']
	Filter Rows	Filter Button (Ctrl+Shift+L)	WHERE col > 100	df[df['col'] > 100]
	Sort Data	Sort Button / =SORT()	ORDER BY col DESC	df.sort_values('col')
	Unique Values	=UNIQUE(range)	SELECT DISTINCT col	df['col'].unique()
Cleaning	Remove Spaces	=TRIM(cell)	TRIM(col)	df['col'].str.strip()
	Change Case	=UPPER() / =PROPER()	UPPER() / LOWER()	df['col'].str.upper()
	Fill Blanks/Nulls	Go To Special > Blanks	COALESCE(col, 0)	df.fillna(0)
	Replace Text	=SUBSTITUTE(text, old, new)	REPLACE(col, old, new)	df['col'].replace(old, new)
Logic	If / Else	=IF(cond, true, false)	CASE WHEN cond THEN val END	np.where(cond, val, other)
	Multiple Logic	=IFS(cond1, val1, ...)	CASE WHEN... WHEN... END	def function(x): ...
Connecting	Join Tables	=XLOOKUP() / =VLOOKUP()	LEFT JOIN table ON id=id	pd.merge(df1, df2, on='id')
	Stack Tables	=VSTACK(rng1, rng2)	UNION ALL	pd.concat([df1, df2])
Math	Sum with Condition	=SUMIFS(sum_rng, crit_rng, crit)	SUM(col) ... WHERE ...	df.groupby('crit')['col'].sum()
	Count Lines	=COUNTROWS() / =COUNTA()	COUNT(*)	df.shape[0] / len(df)
Dates	Extract Year	=YEAR(cell)	EXTRACT(YEAR FROM col)	df['date'].dt.year
	Today's Date	=TODAY()	CURRENT_DATE()	pd.to_datetime('today')
________________________________________
The "Vibe Coder" AI Prompt Cheat Sheet
When you get stuck, use these prompt structures.
Intent	Prompt Template
Debug Error	"I am getting error [Error Code] in [Tool] when trying to [Action]. Here is my code: [Paste Code]. Fix it and explain why it happened."
Write Regex	"Write a Regular Expression (Regex) to extract [Pattern, e.g., Email addresses] from a text string. Explain how the pattern works."
Explain Complex Code	"Explain this SQL query/Python function to me like I am a beginner. Break it down line by line."
Optimize Speed	"This Excel formula/SQL query is very slow on large data. Suggest a more efficient way to write it."
Generate Dummy Data	"Create a dummy dataset in CSV format with 10 rows containing: ID, Name, Date, and Sales Amount. Make it realistic."
________________________________________
The "End of Day" Workflow: 5 Tips for Success
A junior analyst just finishes the task. A senior analyst leaves their workspace ready for tomorrow.
1. The "Bus Factor" Rule (Documentation)
•	The Problem: If you get hit by a bus (or just go on vacation), can someone else understand your work?
•	The Fix:
o	In SQL: Add comments. -- This section calculates monthly churn excluding trial users.
o	In Excel: Add a "Cover Sheet" tab explaining: Source of data, Date of update, and Color codes.
o	In Python: Use hashtags # to explain why you did something, not just what you did.
2. File Naming Convention (ISO 8601)
•	The Problem: Final_Report_v2_FINAL_REAL.xlsx
•	The Fix: Always start with the date in YYYY-MM-DD format.
o	2025-11-23_Sales_Report_Draft01.xlsx
o	2025-11-23_Sales_Report_Final.xlsx
o	Why? This way, your computer sorts files chronologically automatically.
3. The "Future You" Kindness
•	The Concept: Be kind to the "You" of next month.
•	Action:
o	Never hard-code numbers (e.g., don't write =A1 * 0.11). Instead, make a "Variables" table where "Tax Rate" is 0.11, and reference that cell. When tax changes to 0.12, you update one cell, not 1,000 formulas.
o	Save your raw data separately from your analysis file.
4. The Folder Structure Standard
•	Organize every project exactly the same way:
o	📂 01_Input (Raw CSVs, unmodified).
o	📂 02_Scripts (SQL files, Python notebooks).
o	📂 03_Output (Cleaned Excel files, PDFs, Screenshots).
o	📂 04_Archive (Old versions).
5. The "15-Minute" Shutdown Ritual
•	Before you turn off your computer:
o	Commit & Push: If using GitHub, push your code.
o	Clean Desktop: Move downloads to their correct folders.
o	To-Do List: Write down the top 3 tasks for tomorrow morning. This beats "Morning Procrastination."

________________________________________

THE VIBE CODER PROJECT CYCLE (The Ultimate Practice Routine)
Do not just "practice." Build a legacy. Follow this 6-step cycle for every project.
STEP 1: SCOUT (Find the Dataset)
Goal: Find data that mimics real-world business scenarios.
•	Sources:
o	Beginner: Kaggle (Search for "Sales," "Retail," or "HR").
o	Intermediate: Maven Analytics Data Playground (High-quality business datasets).
o	Advanced: Government Portals (data.gov or data.go.id) - These are messy and realistic.
•	Criteria: Must have at least 3 tables (e.g., Sales, Customers, Products) to practice Joins/Relationships.
•	AI Prompt: "I need a dataset to practice [Skill: e.g., SQL Joins]. Suggest 3 specific dataset topics on Kaggle that are suitable for a Data Analyst portfolio."
STEP 2: SCOPE (Define the Mission)
Goal: Don't dive in blind. Define the "North Star."
•	The Rule of 3: Define exactly 3 specific business questions to answer.
1.	Descriptive: "What happened?" (e.g., Total Sales by Month).
2.	Diagnostic: "Why did it happen?" (e.g., Which Region caused the sales drop?).
3.	Prescriptive: "What should we do?" (e.g., Which products should we discount?).
•	AI Prompt: "I have a dataset about [Topic: e.g., Pizza Sales]. Act as a Stakeholder and give me 3 difficult business questions to solve."
STEP 3: SCRUB (The Clean-Up)
Goal: Make the data analysis-ready. Document every change.
•	The Excel Path (<50k rows):
o	Check for duplicates (Remove Duplicates).
o	Fix formatting (Dates as Dates, Numbers as Numbers).
o	Fill blanks with 0 or "Unknown".
•	The SQL Path (>50k rows):
o	Write a script to standardize text: UPPER(), TRIM().
o	Handle NULLs: COALESCE().
•	Documentation: Create a simple text file (changelog.txt) listing what you fixed.
•	AI Prompt: "I have a date column formatted as '01-Jan-2024'. Write a SQL query to convert this into standard 'YYYY-MM-DD' format."
STEP 4: SOLVE (The Analysis)
Goal: Answer the questions from Step 2.
•	Excel: Use PivotTables to aggregate data. Use VLOOKUP/XLOOKUP to join tables.
•	SQL: Use GROUP BY for aggregation. Use Window Functions (RANK(), LEAD()) for advanced trends.
•	Python: Use Pandas to create new calculated columns (Feature Engineering).
•	AI Prompt: "Write a SQL query to rank the top 5 salespeople per region using a Window Function."
STEP 5: STORY (The Visualization)
Goal: Build a dashboard that speaks for itself.
•	Tool: Tableau Public or Power BI Desktop (Free).
•	Requirement:
o	KPI Cards: Top 3 numbers (Total Revenue, Total Orders, etc.) at the top.
o	Interactivity: Add at least 1 Filter/Slicer (e.g., "Select Year").
o	Design: Use a consistent color palette (max 3 main colors).
•	AI Prompt: "Suggest a color palette (Hex codes) for a financial dashboard that looks modern and professional."
STEP 6: SHARE (The "Flex")
Goal: If you don't publish it, it didn't happen.
•	GitHub:
o	Upload the SQL file (analysis.sql).
o	Write a README.md (Context, Analysis, Conclusion).
•	LinkedIn:
o	Post the dashboard screenshot.
o	Caption Formula: Hook ("I found out why sales dropped...") + Process ("Using SQL and Tableau...") + Link ("Check the code below").
•	AI Prompt: "Draft a LinkedIn post for this project. The key finding was that mobile users churn 20% faster than desktop users. Keep it engaging."
________________________________________
Summary Checklist (Copy-Paste for Every Project)
Phase	Task	Status (✅)
1. Scout	Downloaded dataset (CSV/SQL).	[ ]
2. Scope	Defined 3 clear business questions.	[ ]
3. Scrub	Removed duplicates & handled NULLs.	[ ]
4. Solve	Calculated answers using SQL/PivotTables.	[ ]
5. Story	Built Dashboard with 1 Slicer + 3 KPIs.	[ ]
6. Share	Uploaded to GitHub + Posted on LinkedIn.	[ ]
________________________________________

