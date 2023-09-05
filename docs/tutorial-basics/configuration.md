# Configuration

TheBugging does not have any dependencies. To install and use TheBugging, simply import the package in your application and initialize it with your project key.

Here's an example of how to implement TheBugging in a vanilla JavaScript application:

```js
import TheBugging from "the-bugging";

TheBugging.init({ projectKey: "VALID-PROJECT-KEY" });
```

Here's an example of how to implement TheBugging in a React application :

```js
import { createRoot } from "react-dom/client";
import TheBugging from "the-bugging";
import App from "./App";

TheBugging.init({ projectKey: "VALID-PROJECT-KEY" });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App />);
```

Here's an example of how to implement TheBugging in a NextJS application:

```js
import TheBugging from "the-bugging";

function MyApp({ Component, pageProps }) {
  TheBugging.init({ projectKey: "VALID-PROJECT-KEY" });

  return <Component {...pageProps} />;
}

export default MyApp;
```
