# Online AWS Environment Constructor

## Data Models (DMs)

### Solution

Below shows an example of what the data-model (JSON) may look like for the results from the survey.

Data Model Assumptions:
- Cost in USD
- Months consist of 4.5 weeks
- Outside of free-tier
- Figures we can't for-sure know (e.g. monthly users, monthly resource usage, etc) are estimates.
- Figures that can be known for-sure (e.g. resource cost per thousand queries) are precise.
- User:Request ratio is 1:1.

#### Solutions DM

The following JSON stores all of the solutions we can offer our users depending on their answers.

```JSON
{
	"solutions": [
		{
			"requiredQuestionAnswers": [
				{
					"id": "1.0",
					"answer": {
						"type": "range",
						"value": (0,10000)
					},
				},
				{
					"id": "1.1",
					"answer": {
						"type": "range",
						"value": (20,500)
					},
				},
				{
					"id": "2.0",
					"answer": {
						"type": "boolean",
						"value": true
					}
				}
			],
			"fitsFor": {
				"type": "website",
				"users": {
					"amount": 2000,
					"located": "locally",
					"frequencyUsed": "daily"
				},
				"tags": [
					"static",
					"website",
					"User-base <2k",
					"local",
					"affordable"
				]
			},
			"resourceUsage": [
				{
					"type": "storage",
					"amount": 3
					"classification": "storage",
					"magnitude": "GB"
				}
			]
			"cost": [
				{
					"amount": 0.0698
					"per": "month",
				}
			],
			"resources": [
				{
					"name": "Route53",
					"estimatedCost": {
						[
							{
								"amount": 12,
								"per": "year"
							}
						]
					},
					"relatedResources": [
						"CloudFront",
					],
					"description": "Domain Name Service; Used to translate domain name (e.g. Google.com) to Internet Protocol (IP). Analogy: Translates the phone number you call to the person itself."
				},
				{
					"name": "S3",
					"estimatedCost": {
						[
							{
								"amount": 0.0004,
								"per": "thousand",
								"classification": "request",
								"magnitude": ""
							},
							{
								"amount": 0.023,
								"per": "month",
								"classification": "storage"
							}
						]
					}
				},
				{
					"name": "CloudFront"
					"estimatedCost": {
						[
							{
								"amount": 0
							}
						]
					}
				}
			]
		}
	]
}
```

With the answers from the survey, we can determine which solution is the best-fit for them. Costs, as of 28th October 2021, are categorized (for this project, based on the currently-used AWS resource pricing) in the following ways:

"Per-X":

- Year
- Month
- Hour
- Second
- Query
- Thousand (requests/queries)
