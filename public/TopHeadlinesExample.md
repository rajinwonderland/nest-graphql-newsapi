# Top Headlines Example

The example below can be found on this [GraphqlBin](https://www.graphqlbin.com/v2/oZQ1tP)!

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

## Results

Results should end up showing in this sort of format

```json
{
	"data": {
		"topHeadlines": {
			"status": "ok",
			"totalResults": 3,
			"articles": [
				{
					"title": "Starbucks to report earnings after the bell",
					"description": "Starbucks will report its first-quarter earnings and revenue after the bell Thursday.",
					"author": "Amelia Lucas"
				}
			]
		}
	}
}
```
