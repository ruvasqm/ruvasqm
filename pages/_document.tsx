import Document, { Html, Head, Main, NextScript } from 'next/document'
class AppDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}
export default AppDocument
