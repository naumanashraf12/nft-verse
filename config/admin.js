module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '603edab71844697573792bb824c1e71b'),
  },
});
