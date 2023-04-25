"use client";
import { Navigation } from "../components/nav";

export default function Resume() {
    const pdfURL = 'https://drive.google.com/uc?id=1yNS4kMzA_4n1-EhRksbgRJsoQQWmEFSc'

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto md:pt-20">
                <div className="w-full max-w-2xl mx-auto mt-8 sm:mt-0">
                    <iframe
                        id="pdf-frame"
                        src={pdfURL}
                        title="Front End Developer Resume"
                        className="w-full h-[500px] md:h-128 lg:min-h-[600px] xl:h-[700px] 2xl:h-[800px] border-0"
                        fallback={`
                            <p>
                                Your browser doesn't support iframes.{' '}
                                <a href=${pdfURL}>Click here to view the PDF file.</a>
                            </p>
                        `}
                    />
                </div>
            </div>
        </div>
    );
}


