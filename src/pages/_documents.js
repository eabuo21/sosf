import Document, { Html, Head, Main, NextScript } from "next/document";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../utils/helpers/fontawesome";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


config.autoAddCss = false;


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* animate on scroll library cdn */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
            integrity="sha512-pPQQD0jV4ibY8W6dpDGC6RQau3twgf1fVezKkceNIW2n9XBvOnH9TRMdrqzZpVQVE5c68PBM7b2wzI1QmnKfnw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap"
          rel="stylesheet"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
            integrity="sha512-A7AYkJyl7WjvUSI1d4KbMOw24Zb8aQxkTbJ2dKBR4tA4WAlx2xZMkH1MiO9uAgBwn5RYwHQDa6mGAZpM1F3iXg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
