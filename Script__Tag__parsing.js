Difference b/w ASYNC, DEFER and normal script tag :



<script src="https://domain.com"></script>

1. Html parsing pauses once it finds the script tag is received.
2. Fetches the script.
3. Executes the script.
4. HTML parsing is resumed.


<script async src="https://domain.com"></script>

1. Fetches the script asynchronously with HTML parsing.
2. Once script is fetched it pauses HTML parsing and executes the script.
3. HTML parsing is resumed.


<script defer src="https://domain.com"></script>

1. Fetches the script asynchronously with HTML parsing.
2. Executes the script once the HTML parsing is completed.
NOTE: Defer has an order of executing the script i.e. at the end of the parsing
