# node.js-with-react.js
Node.js and React.js running on the same server.

This is an example where you can host both Node.js and React.js running on the same instance server.  
This is a good idea when it's just a small non-production based project. 
This is also usefor for developers who do not want to have 2 projects open at the same time.

In the package.json be sure to have 
``` 
"proxy": "http://localhost:5008/"
```
