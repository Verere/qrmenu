/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
  loader: 'cloudinary',
  path: 'https://cloudinary.com/dqomu5hhg/'
 },
  env: {
    "ACCESS_TOKEN_SECRET": "123456789e654se89790",
    "BASE_URL": "https://qrmenu-nine.vercel.app/",
    "CLOUD_UPDATE_PRESET": "qrglobalmenu_store",
    "CLOUD_NAME": "dqomu5hhg",
    "CLOUD_API": " https://api.cloudinary.com/v1_1/dqomu5hhg/image/upload",
    "MONGODB_URL": "mongodb+srv://eddy:eddy@cluster0.482ai.mongodb.net/qrglobalmenu?retryWrites=true&w=majority",
    "REACT_APP_PUBLIC_KEY": 'FLWPUBK_TEST-60cdb8880b40a20f0ab307c1d631619e-X',
    "REFRESH_TOKEN_SECRET": "9088766544gu8o909yh321",

},
}

module.exports = nextConfig
