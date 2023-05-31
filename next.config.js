/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['www.weatherbit.com']

    },
    experimental:
    {   
        appDir: true,
        serverComponentsExternalPackages:["@tremor/react"],
    },
};

module.exports = nextConfig

