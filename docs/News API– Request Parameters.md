## Top Headlines Endpoint
  
> `/v2/top-headlines`

**Request Parameters:**

| **Name**     | **Type**                                                                                                                                                            | **Description**                                                                                                                                                                         | **Required/Default** |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| **q**        | `string | string[]`                                                                                                                                                 | Keywords or a phrase to search for.                                                                                                                                                     |               `true` |
| **country**  | `ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za` | The 2-letter `ISO 3166-1` code of the country you want to get headlines for.                                                                                                            |              `false` |
| **category** | `business entertainment general health science sports technology` .                                                                                                 | The category you want to get headlines for.                                                                                                                                             |              `false` |
| **sources**  | `string | string[]`                                                                                                                                                 | A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index. |              `false` |
| **pageSize** | `int`                                                                                                                                                               | The number of results to return per page (request). 20 is the default, 100 is the maximum.                                                                                              |              `false` |
| **page**     | `int`                                                                                                                                                               | Use this to page through the results if the total results found is greater than the page size.                                                                                          |              `false` |

## Everything Endpoint

> `/v2/everything`

**Request Parameters:**
| **Name**           | **Type**                                    | **Description**                                                                                                                                                                                                               | **Required/Default**                            |
| ------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **q**              | `string | string[]`                         | Keywords or phrases to search for.                                                                                                                                                                                            | `true`                                          |
| **sources**        | `string | string[]`                         | A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.                          | `false`                                         |
| **domains**        | `string | string[]`                         | A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.                                                                                                                   | `false`                                         |
| **excludeDomains** | `string | string[]`                         | A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.                                                                                                                  | `false`                                         |
| **from**_          | `ISO 8601`                                  | A date and optional time for the oldest article allowed.                                                                                                                                                                      | **DEFAULT**: the oldest according to your plan  |
| **to**_            | `ISO 8601`                                  | A date and optional time for the newest article allowed.                                                                                                                                                                      | **DEFAULT**: the newest according to your plan. |
| **language**       | `ar de en es fr he it nl no pt ru se ud zh` | The 2-letter ISO-639-1 code of the language you want to get headlines for.                                                                                                                                                    | `false` **DEFAULT**: `all` languages returned.  |
| **sortBy**         | `relevancy popularity publishedAt`          | The order to sort the articles in.<br> `relevancy` = articles more closely related to q come first.<br>`popularity` = articles from popular sources and publishers come first.<br>`publishedAt` = newest articles come first. | **DEFAULT**: `publishedAt`                      |
| **pageSize**       | `int`                                       | The number of results to return per page.                                                                                                                                                                                     | **DEFAULT**: `20` **MAX**: `100`                |
| **page**           | `int`                                       | Use this to page through the results.                                                                                                                                                                                         | `false`                                         |

> Parameter **names\*** should be in `ISO 8601` format
> (e.g. `2019-01-29` or `2019-01-29T19:21:06`)

## Sources Endpoint

> `/v2/sources`

**Request Parameters:**
| **Name**     | **Type**                                                                                                                                                            | **Description**                                        | **Required/Default**           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------ |
| **category** | `business entertainment general health science sports technology`                                                                                                   | Find sources that display news of this category.       | **DEFAULT**: `all` categories. |
| **language** | `ar de en es fr he it nl no pt ru se ud zh`                                                                                                                         | Find sources that display news in a specific language. | **DEFAULT**: `all` languages.  |
| **country**  | `ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za` | Find sources that display news in a specific country.  | **DEFAULT**: `all` countries.  |
