import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "yehezkieldio",
            social: {
                github: "https://github.com/yehezkieldio",
            },
            sidebar: [
                {
                    slug: "",
                },
                {
                    slug: "stack",
                },
                {
                    label: "Commands",
                    autogenerate: { directory: "commands" },
                },
            ],
            lastUpdated: true,
            customCss: [
                "./src/tailwind.css",
                "@fontsource-variable/inter",
                "@fontsource/geist-mono/400.css",
                "@fontsource/geist-sans/100.css",
                "@fontsource/geist-sans/200.css",
                "@fontsource/geist-sans/300.css",
                "@fontsource/geist-sans/400.css",
                "@fontsource/geist-sans/500.css",
                "@fontsource/geist-sans/600.css",
                "@fontsource/geist-sans/700.css",
                "@fontsource/geist-sans/800.css",
                "@fontsource/geist-sans/900.css",
            ],
            pagination: false,
            tableOfContents: false,
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
