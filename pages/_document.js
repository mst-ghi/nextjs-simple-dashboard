import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body dir="ltr">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [
            <React.Fragment key="styles">{initialProps.styles}</React.Fragment>,
        ],
    };
};

export default MyDocument;
