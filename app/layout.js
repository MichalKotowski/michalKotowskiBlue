import "../styles/global.scss";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Content from "../components/Content";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Navigation />
          <Content>{children}</Content>
        </Container>
      </body>
    </html>
  );
}
