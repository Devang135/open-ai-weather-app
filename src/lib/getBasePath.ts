const getBasePath =() =>{
    let base_url = process.env.NODE_ENV === 'development' ?"http://localhost:3000":`http:${process.env.VERCELURL}`;

    return base_url;
};

export default getBasePath;