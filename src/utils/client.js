import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const token = 'skazl7OL1eWWgdgpSJakPLrLTalftZczLnceWlH8nVPdsj0NNlde3nnQgsuS4WtIbbqBqMNG2hlIWysKWVIrCtBaEmG2cXSoSR99bqEu182D1fwrH3PJ9wji14wnrIxXW4RVSWYJWN7V37FlOGSUUD94sEZDbmqRpisvISxhRgTiOIEZsuTP';

export const client = sanityClient({
    projectId: '7z5659cl',
    dataset: 'production',
    apiVersion: '2024-09-24',
    useCdn: true,
    token: token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)