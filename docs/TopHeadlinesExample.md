# Top Headlines Example

## Query

Query for returning `TopHeadlines`

```graphql
query TopHeadlines($query: String!, $options: HeadlineInput) {
	topHeadlines(q: $query, options: $options) {
		status
		totalResults
		articles {
			title
			description
			author
		}
	}
}
```

## Variables

**Variables** for our `TopHeadlines` Query

```json
{
	"query": "Starbucks",
	"options": {
		"pageSize": 5,
		"page": 1
	}
}
```
